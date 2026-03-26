import { Link } from 'react-router-dom'
import { Navbar } from '../App'

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-page { min-height: 100vh; background: linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%); }
        .contact-container { max-width: 560px; margin: 0 auto; padding: 100px 16px 40px; }
        .contact-header { text-align: center; margin-bottom: 36px; }
        .contact-header-tag { display: inline-block; padding: 6px 14px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 100px; font-size: 10px; color: #a5b4fc; letter-spacing: 2px; margin-bottom: 16px; font-family: monospace; text-transform: uppercase; }
        .contact-title { font-size: clamp(32px, 7vw, 48px); font-weight: 800; color: #fff; margin: 0 0 10px 0; letter-spacing: -1px; }
        .contact-subtitle { font-size: 15px; color: #64748b; margin: 0; }
        .contact-main-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 36px 24px; text-align: center; margin-bottom: 20px; }
        .contact-icon { font-size: 48px; margin-bottom: 16px; }
        .contact-card-title { font-size: 26px; font-weight: 800; color: #fff; margin: 0 0 6px 0; }
        .contact-card-role { font-size: 14px; color: #94a3b8; margin: 0 0 20px 0; }
        .contact-divider { width: 40px; height: 2px; background: linear-gradient(90deg, #6366f1, #8b5cf6); margin: 0 auto 20px; border-radius: 2px; }
        .contact-email { font-size: 17px; color: #6366f1; text-decoration: none; font-family: monospace; font-weight: 600; }
        .contact-list { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 8px; margin-bottom: 24px; }
        .contact-item { display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: 10px; }
        .contact-icon-wrap { width: 40px; height: 40px; border-radius: 10px; background: rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-info { display: flex; flex-direction: column; gap: 2px; }
        .contact-label { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
        .contact-value { font-size: 14px; color: #e2e8f0; font-weight: 500; }
        .contact-value-link { font-size: 14px; color: #6366f1; font-weight: 500; text-decoration: none; }
        .quick-links { text-align: center; margin-bottom: 32px; }
        .quick-title { font-size: 13px; color: #64748b; margin: 0 0 14px 0; text-transform: uppercase; letter-spacing: 1px; }
        .quick-grid { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .quick-btn { padding: 10px 18px; background: transparent; border: 1px solid; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
        .back-wrap { text-align: center; }
        .back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; color: #64748b; text-decoration: none; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; }
        @media (max-width: 640px) {
          .contact-container { padding: 80px 12px 32px !important; }
          .contact-main-card { padding: 28px 16px !important; }
        }
      `}</style>
      
      <div className="contact-page">
        <Navbar />
        <div className="contact-container">
          {/* 标题区域 */}
          <div className="contact-header">
            <span className="contact-header-tag">CONTACT</span>
            <h1 className="contact-title">联系我</h1>
            <p className="contact-subtitle">期待与您交流合作</p>
          </div>

          {/* 主要联系方式卡片 */}
          <div className="contact-main-card">
            <div className="contact-icon">📧</div>
            <h2 className="contact-card-title">薛嘉宁</h2>
            <p className="contact-card-role">资深前端架构师</p>
            <div className="contact-divider" />
            <a href="mailto:xuejianing@example.com" className="contact-email">
              xuejianing@example.com
            </a>
          </div>

          {/* 联系方式列表 */}
          <div className="contact-list">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
                label: '邮箱',
                value: 'xuejianing@example.com',
                href: 'mailto:xuejianing@example.com',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: '地点',
                value: '上海',
                href: null,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                label: '状态',
                value: '在职 · 看机会',
                href: null,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                label: '意向',
                value: '高级前端 / 架构师',
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon-wrap">{item.icon}</div>
                <div className="contact-info">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-value-link">{item.value}</a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 快捷链接 */}
          <div className="quick-links">
            <h3 className="quick-title">快捷链接</h3>
            <div className="quick-grid">
              {[
                { label: 'GitHub', color: '#e2e8f0' },
                { label: '掘金', color: '#1e7fff' },
                { label: '简历 PDF', color: '#ef4444' },
              ].map((link) => (
                <a key={link.label} href="#" className="quick-btn" style={{ borderColor: `${link.color}40`, color: link.color }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* 返回首页 */}
          <div className="back-wrap">
            <Link to="/" className="back-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
