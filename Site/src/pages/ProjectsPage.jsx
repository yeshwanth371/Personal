const projects = [
  {
    name: 'Utility-Scale Solar Site Development',
    capacity: 'Survey, Piling, and Structural Execution',
    model: 'End-to-end field mobilization and module mounting work across large-format project sites.',
  },
  {
    name: 'Electrical Integration and Commissioning',
    capacity: 'AC and DC Works with HT and LT Systems',
    model: 'Reliable interconnection works including inverter duty transformer installation and testing.',
  },
  {
    name: 'Warehouse and Civil Infrastructure',
    capacity: 'Industrial Civil and Fabrication Projects',
    model: 'Warehouse construction, boundary solutions, and integrated support infrastructure execution.',
  },
  {
    name: 'Machinery-Led High-Speed Execution',
    capacity: 'Ajax Mixers, Crawler Excavators, Backhoe Loaders',
    model: 'Strong machinery readiness combined with skilled operators for consistent quality and on-time completion.',
  },
]

function ProjectsPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <p className="eyebrow">Portfolio</p>
        <h1>Project Highlights from the Field</h1>
        <div className="card-grid one-col">
          {projects.map((project) => (
            <article key={project.name} className="content-card project-card">
              <h3>{project.name}</h3>
              <p>
                <strong>Capacity:</strong> {project.capacity}
              </p>
              <p>{project.model}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
