import { useEffect, useRef, useState } from 'react'

interface Props {
  title: string
  description: string
  /** optional delay in milliseconds for the entrance animation */
  delay?: number
}

export default function ServiceCard({ title, description, delay = 0 }: Props) {
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
    <article
      ref={ref}
      className={"service-card" + (visible ? ' visible' : '')}
      aria-hidden={!visible}
      style={{ animationDelay: `${visible ? delay : 0}ms` }}
    >
      <div className="service-card-inner">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="cta">Learn more →</div>
      </div>
    </article>
  )
}
