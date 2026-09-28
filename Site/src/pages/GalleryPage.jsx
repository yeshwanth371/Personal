const galleryImages = [
  {
    title: 'Solar Field Array',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Panel Installation',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
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
    title: 'Transmission Corridor',
    image:
      'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sunlit Infrastructure',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
  },
]

function GalleryPage() {
  return (
    <section className="section-pad section-soft">
      <div className="container">
        <p className="eyebrow center">Gallery</p>
        <h1 className="section-title center">Visual Snapshot of Our Work</h1>
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
    </section>
  )
}

export default GalleryPage