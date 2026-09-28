function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container narrow">
        <p className="eyebrow">Contact</p>
        <h1>Connect with Vighna Infra Projects</h1>
        <p className="lead">
          Share your project scope and location. Our engineering team will
          connect with the right execution plan for your requirements.
        </p>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="info@vighnainfra.com" required />

          <label htmlFor="message">Project Requirement</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us about location, capacity, and timeline"
            required
          />

          <button type="submit" className="btn btn-primary">Send Inquiry</button>
        </form>

        <article className="content-card contact-details">
          <h3>Direct Contact</h3>
          <p>M/S Vighna Infra Projects Pvt Ltd</p>
          <p>Villa No-21, Survey No-170/1, 172, 173, Domus, Thumkunta Municipality, Shamirpet, Hyderabad, Telangana - 500078</p>
          <p>Email: info@vighnainfra.com</p>
          <p>Phone: +91 789 333 3456</p>
        </article>
      </div>
    </section>
  )
}

export default ContactPage
