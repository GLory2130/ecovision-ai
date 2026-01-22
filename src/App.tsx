import './App.css'
import ServiceCard from './components/ServiceCard'
import ProjectCard from './components/ProjectCard'
import TestimonialCard from './components/TestimonialCard'

const services = [
  {
    title: 'System Development',
    description:
      'Custom backend and frontend systems tailored to your business workflows.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform and native mobile apps with great UX and performance.',
  },
  {
    title: 'Data Analytics',
    description:
      'Analytics, dashboards and ML-powered insights to drive decisions.',
  },
  {
    title: 'IT Consulting',
    description:
      'Architecture, cloud strategy, and hands-on technical guidance.',
  },
]

export default function App() {
  return (
    <div id="root">
      <header className="hero">
        <div className="hero-inner">
          <h1 className="brand">Ecovision</h1>
          <p className="tagline">
            We build digital products: 
            <span className="moving-words" aria-hidden>
              <span>System Development</span>
              <span>Mobile Apps</span>
              <span>Data Analytics</span>
              <span>IT Consulting</span>
            </span>
          </p>
          <p className="lead">
            Engineering modern software, apps and analytics with creative
            design and pragmatic delivery.
          </p>
        </div>
        <div className="floating-words" aria-hidden>
          <span>System</span>
          <span>Mobile</span>
          <span>Data</span>
          <span>Cloud</span>
          <span>Analytics</span>
        </div>
      </header>

      <main className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="cards">
          {services.map((s, i) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} delay={i * 120} />
          ))}
        </div>

        <h2 className="section-title">Our Projects</h2>
        <div className="projects-list container">
          {/* Example projects — replace images with local files in /public for best performance */}
          <ProjectCard
            title="Nutrition Consultancy AI"
            description="AI-powered nutrition consultancy system with a conversational chatbot that provides personalized meal plans and recommendations."
            image="/nutrition.jpg"
            tags={["AI Chatbot", "Nutrition", "Personalization"]}
            delay={0}
          />

          <ProjectCard
            title="CAG Inventory System"
            description="Agricultural inventory management system for warehouses and cold storage — includes forecasting and alerts."
            image="/inventory.jpg"
            tags={["Inventory", "Forecasting", "SaaS"]}
            delay={140}
          />

          <ProjectCard
            title="Vendor Tracking System"
            description="Vendor and supplier tracking with dashboards, automated scorecards, and audit trails to ensure supply-chain reliability."
            image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            tags={["Vendor Management", "Analytics", "Dashboards"]}
            delay={280}
          />
        </div>
      </main>

      <section className="testimonials container">
        <h2 className="section-title">What our users say</h2>
        <div className="testimonials-list">
          <TestimonialCard
            name="Amina Yusuf"
            role="Nutritionist"
            quote="The AI nutrition chatbot generated meal plans my clients actually followed — the personalization is excellent and saved us hours of manual work."
            delay={0}
          />

          <TestimonialCard
            name="Daniel Otieno"
            role="Farm Manager"
            quote="The AG inventory system cut spoilage by 18% in the first quarter. Forecasting and alerts are spot-on."
            delay={140}
          />

          <TestimonialCard
            name="Grace Mwangi"
            role="Procurement Lead"
            quote="Vendor tracking with automated scorecards made our sourcing decisions faster and more transparent. Highly recommend Ecovision."
            delay={280}
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner container">
          <div className="footer-col contact">
            <h4>Contact Us</h4>
            <p className="footer-line">hello@ecovision.com</p>
            <p className="footer-line">+255 700 000 000</p>
          </div>

          <div className="footer-col links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-col location">
            <h4>Location</h4>
            <p className="footer-line">Unit 12, Tan House</p>
            <p className="footer-line">Dar es Salaam, Tanzania</p>
          </div>

          <div className="footer-col social">
            <h4>Follow</h4>
            <div className="social-icons">
              <a href="#" aria-label="Twitter" className="icon" title="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.66.3-1.37.5-2.11.59.76-.45 1.35-1.16 1.63-2.02-.71.42-1.5.72-2.34.89A3.77 3.77 0 0016.5 4c-2.08 0-3.77 1.7-3.77 3.78 0 .3.03.6.1.88-3.13-.16-5.9-1.66-7.76-3.95-.33.57-.52 1.23-.52 1.94 0 1.34.67 2.53 1.69 3.23-.62-.02-1.2-.19-1.71-.47v.05c0 1.86 1.32 3.41 3.07 3.77-.32.09-.65.14-.99.14-.24 0-.47-.02-.69-.07.48 1.51 1.88 2.62 3.54 2.65A7.56 7.56 0 012 19.54a10.68 10.68 0 005.79 1.7c6.95 0 10.75-5.76 10.75-10.75v-.49c.74-.53 1.38-1.2 1.89-1.96-.68.3-1.4.5-2.15.59z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="icon" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001 2.5 2.5 0 01.01-5zm.02 7.5H2v11h3V11zm7 0h-3v11h3v-6.2c0-3.4 4-3.68 4 0V22h3v-7.6c0-6.14-6.5-5.92-7-2.9V11z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="icon" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.86 5.37.86 11.64c0 4.86 3.14 8.98 7.5 10.44.55.1.74-.24.74-.52 0-.26-.01-1-.02-1.95-3.05.66-3.7-1.47-3.7-1.47-.5-1.3-1.22-1.65-1.22-1.65-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.69-1.48-2.43-.28-4.99-1.22-4.99-5.43 0-1.2.43-2.17 1.13-2.94-.12-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.13a10.5 10.5 0 015.56 0c2.12-1.42 3.05-1.13 3.05-1.13.6 1.54.23 2.68.11 2.96.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.14-5.01 5.42.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .28.19.62.75.51 4.36-1.46 7.5-5.59 7.5-10.45C23.14 5.37 18.27.5 12 .5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
