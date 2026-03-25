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
    <div style={styles.container}>
      {/* 背景装饰 */}
      <div style={styles.bgPattern} />
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      <div style={styles.hero}>
        {/* 公司标签 */}
        <div style={styles.companyTags}>
          {highlights.map((h) => (
            <div key={h.title} style={styles.companyTag}>
              <span style={styles.companyIcon}>{h.icon}</span>
              <div>
                <span style={styles.companyName}>{h.title}</span>
                <span style={styles.companyRole}>{h.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 头像 */}
        <div style={styles.avatarWrap}>
          <div style={styles.avatar}>
            <span style={styles.avatarText}>薛</span>
          </div>
          <div style={styles.avatarRing} />
          <div style={styles.avatarRing2} />
        </div>

        {/* 主标题 */}
        <h1 style={styles.name}>薛嘉宁</h1>
        <div style={styles.titleLine}>
          <span style={styles.line} />
          <h2 style={styles.title}>资深前端架构师</h2>
          <span style={styles.line} />
        </div>

        {/* 简介 */}
        <p style={styles.bio}>
          <span style={styles.bioHighlight}>8年</span>一线互联网大厂经验，曾任职 
          <span style={styles.bioHighlight}>华为</span>、
          <span style={styles.bioHighlight}>阿里巴巴</span>、
          <span style={styles.bioHighlight}>字节跳动</span> 核心前端团队。
          <br />
          主导过<span style={styles.bioHighlight}>千万级DAU</span>产品前端架构，
          擅长大规模前端工程化、微前端架构设计与团队技术管理。
          <br />
          累计指导<span style={styles.bioHighlight}>100+</span>前端工程师成长，
          拥有丰富的技术选型与架构决策经验。
        </p>

        {/* 技术栈标签 */}
        <div style={styles.tagCloud}>
          {techTags.map((tag) => (
            <div key={tag.name} style={styles.tagWrap}>
              <span style={styles.tag}>{tag.name}</span>
              <div style={styles.tagProgress}>
                <div style={{ ...styles.tagProgressBar, width: `${tag.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* 按钮组 */}
        <div style={styles.btnGroup}>
          <Link to="/projects" style={styles.btnPrimary}>
            <span>查看项目经验</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/experience" style={styles.btnSecondary}>
            工作经历
          </Link>
          <Link to="/contact" style={styles.btnOutline}>
            联系方式
          </Link>
        </div>

        {/* 数据展示 */}
        <div style={styles.stats}>
          {[
            { value: '8+', label: '年开发经验', icon: '⏱️' },
            { value: '50+', label: '大型项目', icon: '🚀' },
            { value: '100+', label: '团队成员指导', icon: '👥' },
            { value: '1000w+', label: 'DAU产品', icon: '📈' },
          ].map((stat) => (
            <div key={stat.label} style={styles.statItem}>
              <span style={styles.statIcon}>{stat.icon}</span>
              <span style={styles.statValue}>{stat.value}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 72px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 24px 60px',
    position: 'relative',
    overflow: 'hidden',
  },
  bgPattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 40%)
    `,
  },
  bgGlow1: {
    position: 'absolute',
    top: '0%',
    left: '10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
    filter: 'blur(100px)',
  },
  bgGlow2: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
    filter: 'blur(100px)',
  },
  hero: {
    textAlign: 'center',
    maxWidth: '900px',
    position: 'relative',
    zIndex: 1,
  },
  companyTags: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  companyTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 18px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
  },
  companyIcon: {
    fontSize: '20px',
  },
  companyName: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: '#fff',
  },
  companyRole: {
    display: 'block',
    fontSize: '11px',
    color: '#64748b',
    marginTop: '2px',
  },
  avatarWrap: {
    position: 'relative',
    width: '140px',
    height: '140px',
    margin: '0 auto 36px',
  },
  avatar: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '56px',
    fontWeight: 700,
    color: '#fff',
    boxShadow: '0 0 60px rgba(99, 102, 241, 0.4)',
  },
  avatarText: {
    fontFamily: '"Noto Sans SC", sans-serif',
  },
  avatarRing: {
    position: 'absolute',
    inset: '-8px',
    borderRadius: '50%',
    border: '2px solid rgba(99, 102, 241, 0.3)',
    animation: 'spin 8s linear infinite',
  },
  avatarRing2: {
    position: 'absolute',
    inset: '-16px',
    borderRadius: '50%',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    animation: 'spin 12s linear infinite reverse',
  },
  name: {
    fontSize: 'clamp(48px, 10vw, 80px)',
    fontWeight: 800,
    color: '#fff',
    margin: '0 0 16px 0',
    letterSpacing: '-3px',
    lineHeight: 1.1,
    textShadow: '0 4px 30px rgba(99, 102, 241, 0.3)',
  },
  titleLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '28px',
  },
  line: {
    width: '60px',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
  },
  title: {
    fontSize: 'clamp(18px, 4vw, 24px)',
    fontWeight: 600,
    color: '#94a3b8',
    margin: 0,
    letterSpacing: '4px',
    textTransform: 'uppercase',
  },
  bio: {
    fontSize: '17px',
    lineHeight: 2,
    color: '#94a3b8',
    margin: '0 0 44px 0',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  bioHighlight: {
    color: '#a5b4fc',
    fontWeight: 600,
  },
  tagCloud: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '48px',
  },
  tagWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '8px',
  },
  tag: {
    fontSize: '13px',
    color: '#e2e8f0',
    fontFamily: '"SF Mono", monospace',
  },
  tagProgress: {
    width: '30px',
    height: '3px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  tagProgressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
    borderRadius: '2px',
  },
  btnGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    marginBottom: '56px',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: 600,
    boxShadow: '0 8px 30px rgba(99, 102, 241, 0.4)',
    transition: 'all 0.3s',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '16px 32px',
    background: 'rgba(99, 102, 241, 0.1)',
    color: '#a5b4fc',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: 600,
    border: '1px solid rgba(99, 102, 241, 0.3)',
    transition: 'all 0.3s',
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '16px 32px',
    background: 'transparent',
    color: '#94a3b8',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: 600,
    border: '1px solid rgba(255, 255, 255, 0.15)',
    transition: 'all 0.3s',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    padding: '36px',
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  statIcon: {
    fontSize: '24px',
    marginBottom: '4px',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: 800,
    color: '#fff',
    fontFamily: '"SF Mono", monospace',
    letterSpacing: '-1px',
  },
  statLabel: {
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
}
