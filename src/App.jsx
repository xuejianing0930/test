import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        <span style={styles.logoBracket}>&lt;</span>
        LY
        <span style={styles.logoBracket}>/&gt;</span>
      </Link>
      <div style={styles.navLinks}>
        {[
          { to: '/skills', label: 'Skills' },
          { to: '/experience', label: 'Experience' },
          { to: '/projects', label: 'Projects' },
          { to: '/contact', label: 'Contact' },
        ].map((item) => (
          <Link key={item.to} to={item.to} style={styles.navLink}>
            {item.label}
            <span style={styles.navUnderline} />
          </Link>
        ))}
      </div>
    </nav>
  )
}

export { Navbar }

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        <Navbar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

const styles = {
  app: {
    minHeight: '100vh',
    background: '#050507',
    color: '#e2e8f0',
  },
  content: {
    paddingTop: '72px',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '72px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 48px',
    background: 'rgba(5, 5, 7, 0.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    zIndex: 1000,
  },
  logo: {
    fontSize: '20px',
    fontWeight: 800,
    color: '#fff',
    textDecoration: 'none',
    fontFamily: '"SF Mono", "Fira Code", "Cascadia Code", monospace',
    letterSpacing: '-0.5px',
  },
  logoBracket: {
    color: '#6366f1',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
  },
  navLink: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#94a3b8',
    textDecoration: 'none',
    position: 'relative',
    padding: '4px 0',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
  },
  navUnderline: {
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    right: 0,
    height: '1px',
    background: '#6366f1',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
}
