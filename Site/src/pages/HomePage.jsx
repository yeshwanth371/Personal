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
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Building Project',
    location: 'Gujarat',
    category: 'Building Construction',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Industrial Plant Development',
    location: 'Madhya Pradesh',
    category: 'Industrial Construction',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Integrated Road and Bridge Corridor',
    location: 'Rajasthan',
    category: 'Infrastructure Development',
    image:
      'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80',
  },
  // {
  //   title: 'Substation Development',
  //   location: 'Telangana',
  //   category: 'Transmission',
  //   image:
  //     'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
  // },
]

const featuredProjectsHeading = {
  eyebrow: 'Our Projects',
  title: 'Featured Projects',
  ctaLabel: 'View All Projects',
}

const strengths = [
  {
    icon: 'team',
    title: 'Experienced Team',
    detail: 'Skilled professionals with deep domain expertise and field discipline.',
  },
  {
    icon: 'shield',
    title: 'Quality Assurance',
    detail: 'Structured quality reviews and standards-based engineering checks.',
  },
  {
    icon: 'safety',
    title: 'Safety First',
    detail: 'Strict adherence to safety protocols during every stage of execution.',
  },
  {
    icon: 'clock',
    title: 'Timely Delivery',
    detail: 'Milestone-driven delivery with strong project management control.',
  },
  {
    icon: 'tech',
    title: 'Modern Technology',
    detail: 'Smart machinery and modern tools for faster and consistent outcomes.',
  },
  {
    icon: 'epc',
    title: 'End-to-End EPC',
    detail: 'Single-partner accountability from survey to commissioning.',
  },
]

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

const galleryImages = [
  {
    title: 'Solar Field Array',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Industrial Construction Yard',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Engineering Survey',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Construction Progress',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Road and Infrastructure Corridor',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sunlit Infrastructure',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
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

function StrengthIcon({ type }) {
  if (type === 'team') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M16.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M13.5 19a4.5 4.5 0 0 1 7 0" />
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v6c0 4.2 2.6 7.9 7 9 4.4-1.1 7-4.8 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }

  if (type === 'safety') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M7 13V9.5A5 5 0 0 1 12 5a5 5 0 0 1 5 4.5V13" />
        <path d="M10 17h4" />
        <path d="M8 20h8" />
      </svg>
    )
  }

  if (type === 'clock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    )
  }

  if (type === 'tech') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m10 3 1 2.2 2 .5.5 2L16 9l-2 1.3-.5 2-2 .5L10 15l-1-2.2-2-.5-.5-2L4 9l2-1.3.5-2 2-.5L10 3Z" />
        <circle cx="10" cy="9" r="2.2" />
        <path d="M15 14h5" />
        <path d="M15 18h5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19h16" />
      <path d="M7 19V9l5-3 5 3v10" />
      <path d="M10 13h4" />
      <path d="M10 16h4" />
    </svg>
  )
}

function HomePage() {
  return (
    <>
      <section
        className="hero-banner"
        style={{
          backgroundImage:
            "linear-gradient(103deg, rgba(8, 31, 58, 0.72) 10%, rgba(8, 31, 58, 0.42) 48%, rgba(8, 31, 58, 0.18) 68%), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
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
                <Link to="/services" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container about-block">
          <div className="about-copy">
            <p className="eyebrow">About Us</p>
            <h2>Building Smart, Powering Green</h2>
            <p>
              We are a dynamic Solar EPC and Civil Construction organization
              with successful execution of 60+ MW of solar power projects,
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

          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
              alt="Infrastructure project execution at site"
            />
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

      {/* <section className="section-pad section-soft">
        <div className="container">
          <p className="eyebrow center">Gallery</p>
          <h2 className="section-title center">Visual Snapshot of Our Work</h2>
          <p className="gallery-intro center">
            A quick look at the solar, civil, and infrastructure environments we work in.
          </p>

          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <article
                key={item.title}
                className={`gallery-tile gallery-tile-${(index % 6) + 1}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-caption">
                  <span>{item.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="section-pad section-soft">
        <div className="container">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title">Our Commitment to Excellence</h2>

          <div className="strength-grid">
            {strengths.map((item) => (
              <article key={item.title} className="strength-card">
                <span className="strength-icon">
                  <StrengthIcon type={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

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

export default HomePage
