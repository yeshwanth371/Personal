import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import acmeLogo from '../assets/logos/acme_logo.png'
import greenkoLogo from '../assets/logos/greenko_logo.png'
import heritageLogo from '../assets/logos/heritage_logo.png'
import meilLogo from '../assets/logos/meil_logo.jpg'
import raysPowerLogo from '../assets/logos/rays_power_logo.png'
import sembcorpLogo from '../assets/logos/sembcorp_logo.png'

const services = [
  {
    title: 'Solar EPC',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    description:
      'Rooftop and ground-mounted solar solutions with complete EPC execution.',
  },
  {
    title: 'Building Construction',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Residential, commercial, industrial, and institutional building projects delivered with quality.',
  },
  {
    title: 'Industrial Construction',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Factory buildings, manufacturing plants, utility structures, and process foundations.',
  },
  {
    title: 'Infrastructure Development',
    image:
      'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80',
    description:
      'Roads, bridges, drainage, water systems, and civil infrastructure networks.',
  },
]

const projects = [
  {
    title: '200 MW Solar Power Plant',
    location: 'Maharashtra',
    category: 'Solar EPC',
    status: 'In Progress',
    description: 'Utility-scale solar execution with complete EPC delivery.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Building Project',
    location: 'Gujarat',
    category: 'Building Construction',
    status: 'New',
    description: 'Modern commercial structure built with quality-first standards.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Industrial Plant Development',
    location: 'Madhya Pradesh',
    category: 'Industrial Construction',
    status: 'Completed',
    description: 'Integrated industrial civil and utility infrastructure works.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Integrated Road and Bridge Corridor',
    location: 'Rajasthan',
    category: 'Infrastructure Development',
    status: 'In Progress',
    description: 'Corridor development improving regional transport connectivity.',
    image:
      'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80',
  },
]

const featuredProjectsHeading = {
  eyebrow: 'Our Projects',
  title: 'Featured Projects',
  ctaLabel: 'View All Projects',
}

const clients = [
  {
    name: 'Greenko',
    logo: greenkoLogo,
    url: 'https://www.greenkogroup.com/',
  },
  {
    name: 'MEIL',
    logo: meilLogo,
    url: 'https://www.meil.in/',
  },
  {
    name: 'Rays Power Infra',
    logo: raysPowerLogo,
    url: 'https://www.rayspowerinfra.com/',
  },
  {
    name: 'ACME Group',
    logo: acmeLogo,
    url: 'https://acme.in/',
  },
  {
    name: 'Sembcorp',
    logo: sembcorpLogo,
    url: 'https://www.sembcorp.com/',
  },
  {
    name: 'Heritage Foods',
    logo: heritageLogo,
    url: 'https://www.heritagefoods.in/',
  },
]

const aboutPillars = [
  {
    title: '200+ MW Solar Execution',
    text: 'Trusted delivery experience across utility-scale, commercial, and industrial solar projects.',
  },
  {
    title: 'Civil Construction Strength',
    text: 'Successful residential, commercial, and industrial projects built to durable standards.',
  },
  {
    title: 'Values-Led Delivery',
    text: 'Every engagement is guided by trust, integrity, safety, and long-term relationships.',
  },
]

const focusPoints = [
  'Founded in 2021 with focused Solar EPC and Civil Construction capabilities',
  'End-to-end execution spanning engineering, procurement, construction, and quality assurance',
  'Commitment to innovation, safety, timely delivery, and sustainable development',
]

function HomePageWithProjectsCarousel() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveProjectIndex((currentIndex) => (currentIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const showPreviousSlide = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
    )
  }

  const showNextSlide = () => {
    setActiveProjectIndex((currentIndex) => (currentIndex + 1) % projects.length)
  }

  return (
    <>
      <section className="project-carousel-section">
        <div className="project-carousel" aria-label="Projects carousel">
            <button
              type="button"
              className="project-carousel-nav prev"
              onClick={showPreviousSlide}
              aria-label="Show previous project"
            >
              <span className="project-carousel-nav-icon">&#8249;</span>
            </button>

            <div className="project-carousel-viewport">
              <div
                className="project-carousel-track"
                style={{ transform: `translateX(-${activeProjectIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="project-carousel-slide project-carousel-image-slide"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8, 31, 58, 0.02) 28%, rgba(8, 31, 58, 0.8) 100%), url('${project.image}')`,
                    }}
                  >
                    <div className="project-carousel-overlay-copy">
                      <span
                        className={`project-status-tag project-status-ribbon project-status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {project.status}
                      </span>
                      <h3>{project.title}</h3>
                      <p>
                        {project.location} | {project.category}
                      </p>
                      <p className="project-carousel-description">{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="project-carousel-nav next"
              onClick={showNextSlide}
              aria-label="Show next project"
            >
              <span className="project-carousel-nav-icon">&#8250;</span>
            </button>
        </div>
      </section>

      <section className="hero-banner hero-banner-split">
        <div className="hero-overlay">
          <div className="container hero-layout">
            <div className="hero-copy reveal-up">
              <p className="eyebrow">Building Smart, Powering Green</p>
              <h1>Engineering the Future of Infrastructure</h1>
              <p className="lead">
                Delivering reliable EPC solutions across Solar EPC, Building
                Construction, Industrial Construction, and Infrastructure
                Development with quality and commitment.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  Explore Projects
                </Link>
                <Link to="/services" className="btn btn-outline hero-services-btn">
                  Our Services
                </Link>
              </div>
            </div>

            <div className="hero-visual reveal-up delay-1">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
                alt="Solar infrastructure project"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container about-block">
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
              alt="Infrastructure project execution at site"
            />
          </div>

          <div className="about-copy">
            <p className="eyebrow">About Us</p>
            <h2>Building Smart, Powering Green</h2>
            <p>
              We are a dynamic Solar EPC and Civil Construction organization
              with successful execution of 200+ MW of solar power projects,
              along with strong delivery in residential, commercial, and
              industrial civil works.
            </p>

            <ul className="about-focus-list">
              {focusPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="pillar-grid">
              {aboutPillars.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <Link to="/about" className="text-link text-link-boxed">
              Know More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container">
          <p className="eyebrow center">Our Services</p>
          <h2 className="section-title center">What We Do</h2>

          <div className="service-cards">
            {services.map((service) => (
              <article key={service.title} className="service-card reveal-up">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link className="text-link" to="/services">
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head-row">
            <div>
              <p className="eyebrow">{featuredProjectsHeading.eyebrow}</p>
              <h2 className="section-title">{featuredProjectsHeading.title}</h2>
            </div>
            <Link to="/projects" className="text-link text-link-boxed">
              {featuredProjectsHeading.ctaLabel}
            </Link>
          </div>

          <div className="project-gallery">
            {projects.map((project) => (
              <article key={project.title} className="project-tile">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <p>
                    {project.location} | {project.category}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link to="/projects" className="text-link text-link-boxed projects-cta-mobile">
            {featuredProjectsHeading.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="section-pad client-strip">
        <div className="container">
          <p className="eyebrow center">Our Clients and Partners</p>
          <div className="client-grid">
            {clients.map((client) => (
              <a
                key={client.name}
                className="client-badge"
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
              >
                <img src={client.logo} alt={client.name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePageWithProjectsCarousel
