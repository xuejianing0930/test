import { Link } from 'react-router-dom'

const techTags = [
  { name: 'Vue.js', level: 95 },
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: '微前端', level: 88 },
  { name: '前端架构', level: 95 },
  { name: '性能优化', level: 90 },
  { name: '团队管理', level: 88 },
]

const highlights = [
  { icon: '🏢', title: '华为', desc: '前端架构师' },
  { icon: '🛒', title: '阿里巴巴', desc: '高级技术专家 P7' },
  { icon: '🎵', title: '字节跳动', desc: '高级前端工程师' },
  { icon: '📱', title: '美团', desc: '前端工程师' },
]

export default function Home() {
  return (
    <>
      <style>{`
        .home-container { min-height: calc(100vh - 72px); display: flex; align-items: center; justify-content: center; padding: 60px 16px 40px; position: relative; overflow: hidden; }
        .home-hero { text-align: center; max-width: 900px; position: relative; z-index: 1; width: 100%; }
        .company-tags { display: flex; justify-content: center; gap: 12px; margin-bottom: 32px; flex-wrap: wrap; }
        .company-tag { display: flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; }
        .company-icon { font-size: 16px; }
        .company-name { display: block; font-size: 13px; font-weight: 600; color: #fff; }
        .company-role { display: block; font-size: 10px; color: #64748b; margin-top: 1px; }
        .avatar-wrap { position: relative; width: 120px; height: 120px; margin: 0 auto 28px; }
        .avatar { width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%); display: flex; align-items: center; justify-content: center; font-size: 48px; font-weight: 700; color: #fff; box-shadow: 0 0 50px rgba(99, 102, 241, 0.4); }
        .avatar-ring { position: absolute; inset: -6px; border-radius: 50%; border: 2px solid rgba(99, 102, 241, 0.3); animation: spin 8s linear infinite; }
        .avatar-ring2 { position: absolute; inset: -12px; border-radius: 50%; border: 1px solid rgba(139, 92, 246, 0.2); animation: spin 12s linear infinite reverse; }
        .home-name { font-size: clamp(36px, 10vw, 64px); font-weight: 800; color: #fff; margin: 0 0 12px 0; letter-spacing: -2px; line-height: 1.1; text-shadow: 0 4px 30px rgba(99, 102, 241, 0.3); }
        .title-line { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 20px; }
        .title-line-inner { font-size: clamp(14px, 4vw, 20px); font-weight: 600; color: #94a3b8; letter-spacing: 3px; text-transform: uppercase; }
        .title-line-bar { width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #6366f1, transparent); }
        .home-bio { font-size: 15px; line-height: 1.8; color: #94a3b8; margin: 0 0 32px 0; max-width: 600px; margin-left: auto; margin-right: auto; padding: 0 8px; }
        .bio-highlight { color: #a5b4fc; font-weight: 600; }
        .tag-cloud { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 36px; }
        .tag-wrap { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 6px; }
        .tag { font-size: 12px; color: #e2e8f0; font-family: monospace; }
        .tag-progress { width: 24px; height: 2px; background: rgba(255, 255, 255, 0.1); border-radius: 1px; overflow: hidden; }
        .tag-progress-bar { height: 100%; background: linear-gradient(90deg, #6366f1, #8b5cf6); border-radius: 1px; }
        .btn-group { display: flex; gap: 12px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; padding: 0 8px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 24px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600; box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4); }
        .btn-secondary { display: inline-flex; align-items: center; padding: 14px 24px; background: rgba(99, 102, 241, 0.1); color: #a5b4fc; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600; border: 1px solid rgba(99, 102, 241, 0.3); }
        .btn-outline { display: inline-flex; align-items: center; padding: 14px 24px; background: transparent; color: #94a3b8; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600; border: 1px solid rgba(255, 255, 255, 0.15); }
        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 24px; background: rgba(255, 255, 255, 0.02); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05); }
        .stat-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .stat-icon { font-size: 20px; margin-bottom: 2px; }
        .stat-value { font-size: clamp(24px, 5vw, 32px); font-weight: 800; color: #fff; font-family: monospace; letter-spacing: -1px; }
        .stat-label { font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
        @media (max-width: 640px) {
          .stats { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; padding: 16px !important; }
          .company-tags { gap: 8px !important; }
          .company-tag { padding: 6px 10px !important; }
          .avatar-wrap { width: 100px !important; height: 100px !important; margin-bottom: 20px !important; }
          .avatar { width: 100px !important; height: 100px !important; font-size: 40px !important; }
        }
      `}</style>
      
      <div className="home-container">
        <div className="home-hero">
          {/* 公司标签 */}
          <div className="company-tags">
            {highlights.map((h) => (
              <div key={h.title} className="company-tag">
                <span className="company-icon">{h.icon}</span>
                <div>
                  <span className="company-name">{h.title}</span>
                  <span className="company-role">{h.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 头像 */}
          <div className="avatar-wrap">
            <div className="avatar">
              <span>薛</span>
            </div>
            <div className="avatar-ring" />
            <div className="avatar-ring2" />
          </div>

          {/* 主标题 */}
          <h1 className="home-name">薛嘉宁</h1>
          <div className="title-line">
            <span className="title-line-bar" />
            <h2 className="title-line-inner">资深前端架构师</h2>
            <span className="title-line-bar" />
          </div>

          {/* 简介 */}
          <p className="home-bio">
            <span className="bio-highlight">8年</span>一线互联网大厂经验，曾任职 
            <span className="bio-highlight">华为</span>、
            <span className="bio-highlight">阿里巴巴</span>、
            <span className="bio-highlight">字节跳动</span> 核心前端团队。
            擅长大规模前端工程化、微前端架构设计与团队技术管理。
            累计指导<span className="bio-highlight">100+</span>前端工程师成长。
          </p>

          {/* 技术栈标签 */}
          <div className="tag-cloud">
            {techTags.map((tag) => (
              <div key={tag.name} className="tag-wrap">
                <span className="tag">{tag.name}</span>
                <div className="tag-progress">
                  <div className="tag-progress-bar" style={{ width: `${tag.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* 按钮组 */}
          <div className="btn-group">
            <Link to="/projects" className="btn-primary">
              <span>查看项目</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/experience" className="btn-secondary">
              工作经历
            </Link>
            <Link to="/contact" className="btn-outline">
              联系方式
            </Link>
          </div>

          {/* 数据展示 */}
          <div className="stats">
            {[
              { value: '8+', label: '年经验', icon: '⏱️' },
              { value: '50+', label: '大型项目', icon: '🚀' },
              { value: '100+', label: '团队指导', icon: '👥' },
              { value: '1000w+', label: 'DAU产品', icon: '📈' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
