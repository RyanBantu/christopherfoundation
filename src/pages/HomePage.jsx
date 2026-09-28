import { Link } from "react-router-dom"
import StatGrid from "../components/StatGrid"
import { galleryItems } from "../content/gallery"
import { missions, foundation } from "../content/site"
import { statGroups, statNote } from "../content/stats"

export default function HomePage() {
  const preview = galleryItems.filter((item) =>
    ["books", "classroom", "clinic"].includes(item.id),
  )

  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">A charitable trust</p>
          <h1>{foundation.tagline}</h1>
          <p className="lede">{foundation.summary}</p>
          <div className="hero-actions">
            <Link className="button" to="/projects">
              See the work
            </Link>
            <Link className="button button-quiet" to="/get-involved">
              Get involved
            </Link>
          </div>
        </div>
        <aside className="season">
          <p className="eyebrow">Two kinds of work</p>
          <ul>
            {missions.map((mission) => (
              <li key={mission.title}>
                <Link to={mission.to}>
                  <span>{mission.title}</span>
                  <small>{mission.brief}</small>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="shell band">
        <div className="band-head">
          <h2>Why this mission</h2>
          <p>
            Education empowers a child. A medical mission reaches women and children where
            they live. The figures below are why both belong together.
          </p>
        </div>
        <div className="focus-grid cols-2">
          {missions.map((mission) => (
            <article key={mission.title} className="focus-card">
              <span>{mission.number}</span>
              <h3>{mission.title}</h3>
              <p>{mission.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell band" id="india">
        <div className="band-head">
          <h2>India, in public numbers</h2>
          <p>National surveys, not the trust’s own count. They show the size of the need.</p>
        </div>
        <div className="stat-groups">
          {statGroups.map((group) => (
            <section key={group.id} className="stat-group" aria-labelledby={group.id}>
              <h3 id={group.id}>{group.title}</h3>
              <p className="stat-intro">{group.intro}</p>
              <StatGrid stats={group.stats} columns={group.stats.length} />
            </section>
          ))}
        </div>
        <p className="source-note">{statNote}</p>
      </section>

      <section className="statement">
        <div className="shell statement-inner">
          <p>Invest today to have a better tomorrow.</p>
          <Link to="/get-involved">Be part of the mission</Link>
        </div>
      </section>

      <section className="shell band">
        <div className="band-head">
          <h2>From the gallery</h2>
          <p>Classrooms, clinics, and the kind of day a camp is meant to be.</p>
        </div>
        <div className="preview-grid">
          {preview.map((item) => (
            <Link key={item.id} to="/gallery" className="preview-card">
              <img src={item.src} alt={item.alt} />
              <span>
                <small>{item.category}</small>
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <Link className="text-link" to="/gallery">
          Open the gallery
        </Link>
      </section>

      <section className="shell invite">
        <div>
          <p className="eyebrow">Take part</p>
          <h2>Give, volunteer, or bring a skill.</h2>
          <p>
            The trust is small on purpose. A clear note about how you want to help is the
            best way to begin.
          </p>
        </div>
        <Link className="button" to="/get-involved">
          Get involved
        </Link>
      </section>
    </>
  )
}
