import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function NavItem({ to, children }) {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to} 
      style={{
        ...styles.navLink,
        color: isActive ? '#fff' : '#64748b',
      }}
    >
      {children}
      <span style={{
        ...styles.navUnderline,
        background: isActive ? '#6366f1' : 'transparent',
        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
      }} />
    </Link>
  )
}

export function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        <span style={styles.logoIcon}>⌨️</span>
        <span style={styles.logoText}>薛嘉宁</span>
      </Link>
      <div style={styles.navLinks}>
        <NavItem to="/skills">技术栈</NavItem>
        <NavItem to="/experience">工作经历</NavItem>
        <NavItem to="/projects">项目经验</NavItem>
        <NavItem to="/contact">联系方式</NavItem>
      </div>
      <a 
        href="mailto:xuejianing@example.com" 
        style={styles.contactBtn}
      >
        📧 联系我
      </a>
    </nav>
  )
}

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
        <footer style={styles.footer}>
          <p>© 2024 薛嘉宁 · 资深前端架构师</p>
          <div style={styles.footerLinks}>
            <a href="#">GitHub</a>
            <a href="#">掘金</a>
            <a href="#">LinkedIn</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

const styles = {
  app: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)',
    color: '#e2e8f0',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    paddingTop: '80px',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 48px',
    background: 'rgba(10, 10, 15, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoIcon: {
    fontSize: '24px',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#fff',
    fontFamily: '"Noto Sans SC", sans-serif',
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '8px',
  },
  navLink: {
    position: 'relative',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s',
  },
  navUnderline: {
    position: 'absolute',
    bottom: '2px',
    left: '16px',
    right: '16px',
    height: '2px',
    borderRadius: '1px',
    transition: 'all 0.3s',
  },
  contactBtn: {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 600,
    textDecoration: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
    transition: 'all 0.3s',
  },
  footer: {
    padding: '32px 48px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#64748b',
    fontSize: '13px',
  },
  footerLinks: {
    display: 'flex',
    gap: '24px',
  },
}
