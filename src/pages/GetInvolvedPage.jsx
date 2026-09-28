import { Link } from "react-router-dom"
import EnquiryForm from "../components/EnquiryForm"
import PageIntro from "../components/PageIntro"
import { interests, ways } from "../content/involve"
import { foundation } from "../content/site"

export default function GetInvolvedPage() {
  return (
    <div className="shell page">
      <PageIntro
        eyebrow="Get involved"
        title="Invest today to have a better tomorrow."
        lede="Give toward a literacy camp or a medical mission, volunteer for a day, or tell us about a place that needs one. A short note is enough to begin."
      />

      <section className="way-grid">
        {ways.map((way) => (
          <article key={way.title}>
            <h2>{way.title}</h2>
            <p>{way.text}</p>
          </article>
        ))}
      </section>

      <section className="involve-layout">
        <div>
          <h2>Reach out</h2>
          <p>
            Write to the trustees at{" "}
            <a href={`mailto:${foundation.email}`}>{foundation.email}</a>, or use the note
            beside this. It opens your email app. Nothing is stored on the website.
          </p>
          <p>
            Doctors, teachers, and hosts can also register on the{" "}
            <Link to="/contractors">Contractors</Link> page.
          </p>
        </div>
        <EnquiryForm interests={interests} />
      </section>
    </div>
  )
}
