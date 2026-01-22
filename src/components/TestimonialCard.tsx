import { useEffect, useRef, useState } from 'react'

interface Props {
  name: string
  role?: string
  quote: string
  delay?: number
}

export default function TestimonialCard({ name, role, quote, delay = 0 }: Props) {
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
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={"testimonial-card" + (visible ? ' visible' : '')}
      style={{ animationDelay: `${visible ? delay : 0}ms` }}
    >
      <div className="testimonial-top no-avatar">
        <div className="author">
          <div className="name">{name}</div>
          {role && <div className="role">{role}</div>}
        </div>
      </div>
      <blockquote className="quote">{quote}</blockquote>
    </article>
  )
}
