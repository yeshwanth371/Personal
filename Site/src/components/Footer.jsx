function Footer() {
  return (
    <footer className="site-footer">
      <div className="contact-ribbon">
        <div className="container contact-ribbon-grid">
          <div>
            <h3>Get In Touch</h3>
            <p>Let&apos;s build your next solar and infrastructure project together.</p>
          </div>

          <div className="contact-ribbon-meta">
            <span>+91 789 333 3456</span>
            <span>info@vighnainfra.com</span>
            <span>Shamirpet, Hyderabad</span>
          </div>

          <a href="mailto:info@vighnainfra.com" className="ribbon-btn">
            Contact Us
          </a>
        </div>
      </div>

      <div className="container footer-grid">
        <div>
          <h4>Vighna Infra Projects</h4>
          <p>
            Delivering dependable EPC execution across Solar PV, civil
            construction, and transmission infrastructure.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
        </div>

        <div>
          <h4>Office</h4>
          <p>Villa No-21, Survey No-170/1, 172, 173</p>
          <p>Domus, Thumkunta Municipality, Shamirpet</p>
          <p>Hyderabad, Telangana - 500078</p>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Stay updated with project highlights and company updates.</p>
          <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Vighna Infra Projects Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
