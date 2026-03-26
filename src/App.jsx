import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function NavItem({ to, children, onClick }) {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      style={{
        ...styles.navLink,
        color: isActive ? '#fff' : '#64748b',
        background: isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
      }}
    >
      {children}
    </Link>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        <span style={styles.logoIcon}>⌨️</span>
        <span style={styles.logoText}>薛嘉宁</span>
      </Link>

      {/* PC端导航 */}
      <div style={styles.navLinks}>
        <NavItem to="/skills">技术栈</NavItem>
        <NavItem to="/experience">工作经历</NavItem>
        <NavItem to="/projects">项目经验</NavItem>
        <NavItem to="/contact">联系方式</NavItem>
      </div>

      {/* 联系我按钮 - PC端 */}
      <a href="mailto:xuejianing@example.com" style={styles.contactBtn}>
        📧 联系我
      </a>

      {/* 手机端汉堡菜单按钮 */}
      <button 
        style={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="菜单"
      >
        <span style={{ ...styles.menuLine, transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
        <span style={{ ...styles.menuLine, opacity: menuOpen ? 0 : 1 }} />
        <span style={{ ...styles.menuLine, transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
      </button>

      {/* 手机端侧边菜单 */}
      <div style={{ 
        ...styles.mobileMenu,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
      }}>
        <div style={styles.mobileMenuContent}>
          <NavItem to="/" onClick={() => setMenuOpen(false)}>首页</NavItem>
          <NavItem to="/skills" onClick={() => setMenuOpen(false)}>技术栈</NavItem>
          <NavItem to="/experience" onClick={() => setMenuOpen(false)}>工作经历</NavItem>
          <NavItem to="/projects" onClick={() => setMenuOpen(false)}>项目经验</NavItem>
          <NavItem to="/contact" onClick={() => setMenuOpen(false)}>联系方式</NavItem>
          <a href="mailto:xuejianing@example.com" style={styles.mobileContactBtn}>
            📧 联系我
          </a>
        </div>
      </div>

      {/* 遮罩层 */}
      {menuOpen && (
        <div style={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
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
          <p style={styles.footerText}>© 2024 薛嘉宁 · 资深前端架构师</p>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>GitHub</a>
            <a href="#" style={styles.footerLink}>掘金</a>
            <a href="#" style={styles.footerLink}>LinkedIn</a>
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
    paddingTop: '72px',
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
    padding: '0 24px',
    background: 'rgba(10, 10, 15, 0.98)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    zIndex: 1001,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    zIndex: 1002,
  },
  logoIcon: {
    fontSize: '22px',
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
    gap: '4px',
  },
  navLink: {
    padding: '10px 14px',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s',
  },
  contactBtn: {
    padding: '10px 18px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 600,
    textDecoration: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
    transition: 'all 0.3s',
  },
  menuBtn: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    width: '40px',
    height: '40px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    zIndex: 1002,
  },
  menuLine: {
    width: '24px',
    height: '2px',
    background: '#fff',
    borderRadius: '2px',
    transition: 'all 0.3s',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '75%',
    maxWidth: '320px',
    height: '100vh',
    background: 'rgba(15, 15, 25, 0.98)',
    backdropFilter: 'blur(20px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'transform 0.3s ease',
    zIndex: 1001,
    paddingTop: '100px',
  },
  mobileMenuContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
    gap: '8px',
  },
  mobileContactBtn: {
    marginTop: '20px',
    padding: '14px 20px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#fff',
    fontSize: '15px',
    fontWeight: 600,
    textDecoration: 'none',
    borderRadius: '10px',
    textAlign: 'center',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1000,
  },
  footer: {
    padding: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    color: '#64748b',
    fontSize: '12px',
  },
  footerText: {
    margin: 0,
    textAlign: 'center',
  },
  footerLinks: {
    display: 'flex',
    gap: '20px',
  },
  footerLink: {
    color: '#64748b',
    textDecoration: 'none',
  },
}

// 响应式样式
const mediaStyles = `
  @media (max-width: 768px) {
    nav > div:nth-child(2) { display: none !important; }
    nav > a:nth-child(3) { display: none !important; }
    button { display: flex !important; }
    footer { padding: 20px !important; }
  }
  
  @media (min-width: 769px) {
    .mobile-menu { display: none !important; }
    .overlay { display: none !important; }
  }
`

// 注入媒体查询样式
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style')
  styleEl.textContent = mediaStyles
  document.head.appendChild(styleEl)
}
