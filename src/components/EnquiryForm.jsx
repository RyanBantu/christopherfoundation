import { useState } from "react"
import { foundation } from "../content/site"

export default function EnquiryForm({ interests, submitLabel = "Prepare email" }) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    interest: interests[0],
    message: "",
  })
  const [error, setError] = useState("")
  const [ready, setReady] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
    setError("")
    setReady(false)
  }

  function submit(event) {
    event.preventDefault()
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError("Please add your name, email, and a short message.")
      return
    }
    setError("")

    const subject = `Christopher Foundation — ${fields.interest}`
    const body = [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Interest: ${fields.interest}`,
      "",
      fields.message.trim(),
    ].join("\n")

    window.location.href = `mailto:${foundation.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setReady(true)
  }

  if (ready) {
    return (
      <div className="form-ready" role="status">
        <h2>Your note is ready to send.</h2>
        <p>
          Your email app should open with this message addressed to {foundation.email}. If it
          does not, write to that address and mention that you would like to{" "}
          {fields.interest.toLowerCase()}.
        </p>
        <button type="button" className="text-button" onClick={() => setReady(false)}>
          Edit the note
        </button>
      </div>
    )
  }

  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={update}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={update}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="interest">I want to</label>
        <select id="interest" name="interest" value={fields.interest} onChange={update}>
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={fields.message}
          onChange={update}
          required
        />
      </div>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="button">
        {submitLabel}
      </button>
    </form>
  )
}
