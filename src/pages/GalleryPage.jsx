import { useEffect, useMemo, useRef, useState } from "react"
import FilterBar from "../components/FilterBar"
import PageIntro from "../components/PageIntro"
import { galleryCategories, galleryItems } from "../content/gallery"

export default function GalleryPage() {
  const [category, setCategory] = useState("All")
  const [active, setActive] = useState(null)
  const closeRef = useRef(null)
  const returnFocus = useRef(null)

  const visible = useMemo(
    () =>
      category === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === category),
    [category],
  )
  const isOpen = active !== null

  function open(item) {
    returnFocus.current = document.activeElement
    setActive(item)
  }

  function close() {
    setActive(null)
    requestAnimationFrame(() => returnFocus.current?.focus())
  }

  function step(direction) {
    const index = visible.findIndex((item) => item.id === active.id)
    const next = visible[(index + direction + visible.length) % visible.length]
    setActive(next)
  }

  useEffect(() => {
    if (!isOpen) return undefined
    closeRef.current?.focus()
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    const onKey = (event) => {
      if (event.key === "Escape") {
        setActive(null)
        requestAnimationFrame(() => returnFocus.current?.focus())
      }
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
      const direction = event.key === "ArrowRight" ? 1 : -1
      setActive((current) => {
        if (!current) return current
        const index = visible.findIndex((item) => item.id === current.id)
        if (index < 0) return current
        return visible[(index + direction + visible.length) % visible.length]
      })
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, visible])

  return (
    <div className="shell page">
      <PageIntro
        eyebrow="Gallery"
        title="Learning, care, and the people who make a camp."
        lede="Pictures of the kind of rooms and days this trust is here to support. Open one to read what it stands for. When the foundation’s own camp photographs are ready, they replace these."
      />

      <FilterBar
        label="Filter gallery"
        options={galleryCategories}
        value={category}
        onChange={(item) => {
          setCategory(item)
          setActive(null)
        }}
      />

      <div className="gallery-grid">
        {visible.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`tile tile-${item.size}`}
            onClick={() => open(item)}
          >
            <img src={item.src} alt={item.alt} />
            <span className="tile-caption">
              <small>{item.category}</small>
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title}>
          <button
            type="button"
            className="lightbox-backdrop"
            aria-label="Close gallery view"
            onClick={close}
          />
          <figure className="lightbox-frame">
            <img src={active.src} alt={active.alt} />
            <figcaption>
              <div>
                <small>{active.category}</small>
                <strong>{active.title}</strong>
                <p>{active.caption}</p>
              </div>
              <div className="lightbox-actions">
                <button type="button" onClick={() => step(-1)} aria-label="Previous picture">
                  Prev
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next picture">
                  Next
                </button>
                <button type="button" ref={closeRef} onClick={close}>
                  Close
                </button>
              </div>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  )
}
