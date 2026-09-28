import { Link } from "react-router-dom"
import EnquiryForm from "../components/EnquiryForm"
import PageIntro from "../components/PageIntro"
import { appointment, contractorInterests, roles } from "../content/contractors"
import { foundation } from "../content/site"

export default function ContractorsPage() {
  return (
    <div className="shell page">
      <PageIntro
        eyebrow="Contractors"
        title="The people a camp depends on."
        lede="Education camps need teachers. A medical mission needs clinicians. Both need a host and someone to keep the day orderly. If that is your work, the trust would like to hear from you."
      />

      <section className="way-grid way-grid-4">
        {roles.map((role) => (
          <article key={role.title}>
            <h2>{role.title}</h2>
            <p>{role.text}</p>
          </article>
        ))}
      </section>

      <section className="block">
        <div className="band-head">
          <h2>How an appointment works</h2>
          <p>A written brief, agreed before the camp day.</p>
        </div>
        <ol className="steps">
          {appointment.map((step, index) => (
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

      <section className="involve-layout">
        <div>
          <h2>Offer your skill</h2>
          <p>
            This note opens in your email app, addressed to{" "}
            <a href={`mailto:${foundation.email}`}>{foundation.email}</a>. Say what you do,
            where you can travel, and when you are free.
          </p>
          <p>
            Volunteers who are not contracting for a fee can also write from the{" "}
            <Link to="/get-involved">Get involved</Link> page.
          </p>
        </div>
        <EnquiryForm interests={contractorInterests} submitLabel="Prepare email" />
      </section>
    </div>
  )
}
