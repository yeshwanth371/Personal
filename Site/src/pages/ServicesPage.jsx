const services = [
  {
    title: 'Solar EPC',
    items: [
      'Rooftop solar systems (Residential, Commercial & Industrial)',
      'Ground-mounted solar power plants',
    ],
  },
  {
    title: 'Building Construction',
    items: [
      'Residential buildings (apartments, villas, individual homes)',
      'Commercial buildings (offices, retail spaces, malls)',
      'Industrial buildings (factories, warehouses)',
      'Institutional buildings (schools, hospitals, colleges)',
    ],
  },
  {
    title: 'Infrastructure Development',
    items: [
      'Roads and highways',
      'Bridges and flyovers',
      'Drainage and stormwater systems',
      'Water supply and sewerage networks',
      'Irrigation canals and retaining walls',
    ],
  },
  {
    title: 'Industrial Construction',
    items: [
      'Factory buildings',
      'Manufacturing plants',
      'Warehouses and logistics centers',
      'Process equipment foundations',
      'Utility structures',
    ],
  },
]

function ServicesPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1>Execution Capabilities Across Solar and Construction Projects</h1>
        <div className="card-grid two-col">
          {services.map((service) => (
            <article key={service.title} className="content-card">
              <h3>{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
