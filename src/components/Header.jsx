import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { foundation, nav } from "../content/site"

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [path, setPath] = useState(pathname)

  if (path !== pathname) {
    setPath(pathname)
    setOpen(false)
  }

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="shell header-bar">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark" aria-hidden="true">
            C
          </span>
          <span className="brand-text">
            <span className="brand-name">{foundation.name.split(" ")[0]}</span>
            <span className="brand-sub">Foundation</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span />
          <span />
        </button>

        <nav id="site-nav" className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                ["nav-link", item.accent && "nav-cta", isActive && "is-active"]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
