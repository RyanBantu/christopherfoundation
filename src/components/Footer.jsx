import { NavLink } from "react-router-dom"
import { foundation, nav } from "../content/site"

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">{foundation.name}</p>
          <p className="footer-summary">{foundation.summary}</p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-label">Visit</p>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-label">Write</p>
          <a className="footer-mail" href={`mailto:${foundation.email}`}>
            {foundation.email}
          </a>
          <p className="footer-note">
            Messages from the site open in your email app, addressed to the trust.
          </p>
        </div>
      </div>
      <div className="shell footer-base">
        <p>© {year} {foundation.name}</p>
        <p>Education and medical camps</p>
      </div>
    </footer>
  )
}
