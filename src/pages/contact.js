import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xlezprqa" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
