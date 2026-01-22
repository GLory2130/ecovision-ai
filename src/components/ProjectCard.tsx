import { useEffect, useRef, useState } from 'react'

interface Props {
  title: string
  description: string
  image?: string
  tags?: string[]
  /** optional delay in milliseconds for entrance animation */
  delay?: number
}

export default function ProjectCard({ title, description, image, tags = [], delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <article ref={ref} className={"project-card" + (visible ? ' visible' : '')} style={{ animationDelay: `${visible ? delay : 0}ms` }}>
      {image ? (
        <div className="project-image" role="img" aria-label={title}>
          <img src={image} alt={title} />
        </div>
      ) : null}

      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
