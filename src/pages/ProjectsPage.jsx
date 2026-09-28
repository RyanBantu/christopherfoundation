import { useState } from "react"
import { Link } from "react-router-dom"
import FilterBar from "../components/FilterBar"
import PageIntro from "../components/PageIntro"
import { projects, projectStatuses } from "../content/projects"

export default function ProjectsPage() {
  const [status, setStatus] = useState("All")
  const [openId, setOpenId] = useState(null)

  const visible =
    status === "All" ? projects : projects.filter((project) => project.status === status)

  return (
    <div className="shell page">
      <PageIntro
        eyebrow="Projects"
        title="Education, and a medical mission."
        lede="These are the camps and rooms the trust is looking after. Education empowers children who are in school and still learning to read. Medical camps screen women and children, treat what can be treated on the day, and refer what cannot."
      />

      <FilterBar
        label="Filter projects"
        options={projectStatuses}
        value={status}
        onChange={(item) => {
          setStatus(item)
          setOpenId(null)
        }}
      />

      <div className="project-list">
        {visible.map((project) => {
          const open = openId === project.id
          return (
            <article key={project.id} className={open ? "project is-open" : "project"}>
              <button
                type="button"
                className="project-toggle"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : project.id)}
              >
                <span className={`status status-${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
                <span className="project-title">{project.title}</span>
                <span className="project-meta">
                  {project.area}
                  <span aria-hidden="true"> · </span>
                  {project.place}
                </span>
                <span className="project-summary">{project.summary}</span>
              </button>
              {open ? (
                <div className="project-detail">
                  <div>
                    <h3>Why this one</h3>
                    <p>{project.why}</p>
                  </div>
                  <div>
                    <h3>Where it stands</h3>
                    <p>{project.now}</p>
                  </div>
                  <Link to="/get-involved">Write about this work</Link>
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </div>
  )
}
