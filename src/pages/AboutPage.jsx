import { Link } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import { purpose, steps, values } from "../content/about"

export default function AboutPage() {
  return (
    <div className="shell page">
      <PageIntro
        eyebrow="About us"
        title="A trust for learning and care."
        lede="Christopher Foundation exists so more children can read, and more women and children can be seen by a health worker. Let's be part of the mission with a vision: education that empowers, and a medical mission that comes to the place people live."
      />

      <section className="split">
        {purpose.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="block">
        <div className="band-head">
          <h2>How a camp moves</h2>
          <p>The same path for a literacy hour and for a clinic day.</p>
        </div>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block">
        <div className="band-head">
          <h2>What guides a decision</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="invite invite-flat">
        <div>
          <h2>The need is already measured.</h2>
          <p>
            Public surveys show where literacy and nutrition still fall short. The trust’s
            work is a response to those figures, one camp at a time.
          </p>
        </div>
        <Link className="button" to="/#india">
          Read the figures
        </Link>
      </section>
    </div>
  )
}
