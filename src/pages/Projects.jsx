import { Navbar } from '../App'

const projects = [
  {
    name: '鸿蒙企业级应用平台',
    subtitle: '跨端统一架构',
    period: '2022.03 - 至今',
    color: '#ef4444',
    role: '架构设计',
    tech: ['Vue3', 'TypeScript', 'ArkUI', '微前端', 'Node.js', '低代码'],
    highlights: [
      '设计跨端统一渲染引擎，一套代码覆盖鸿蒙/Android/Web三端',
      '支撑千万级DAU，双11等大促零故障',
      '微前端架构支持20+团队并行开发，交付效率提升300%',
      '低代码平台落地，运营配置化上线节省研发成本80%',
      '性能监控体系，P99响应时间从3s优化至800ms',
    ],
  },
  {
    name: '淘宝核心交易链路',
    subtitle: '双11峰值支撑',
    period: '2019.06 - 2022.03',
    color: '#f59e0b',
    role: '核心开发',
    tech: ['React', 'TypeScript', 'Rax', 'Node.js', 'Webpack'],
    highlights: [
      '支撑双11峰值54万QPS，零故障运行',
      '交易链路前端重构，性能提升40%，转化率提升12%',
      '多端统一架构，覆盖小程序/H5/APP多端场景',
      '监控告警体系，问题发现从小时级缩短至分钟级',
    ],
  },
  {
    name: '抖音创作者平台',
    subtitle: '视频编辑器',
    period: '2017.07 - 2019.06',
    color: '#06b6d4',
    role: '核心开发',
    tech: ['React', 'TypeScript', 'FFmpeg', 'WebAssembly'],
    highlights: [
      '从0到1搭建创作者平台，支撑百万创作者日常使用',
      '高性能视频编辑器，实时预览延迟低于100ms',
      '大文件上传优化，断点续传成功率99.9%',
      '自动化测试体系，核心功能覆盖率85%',
    ],
  },
  {
    name: '美团外卖商家端',
    subtitle: '百万商家运营',
    period: '2015.07 - 2017.07',
    color: '#22c55e',
    role: '核心开发',
    tech: ['Vue2', 'JavaScript', 'Webpack', '移动端优化'],
    highlights: [
      '支撑百万商家日常运营管理',
      '移动端H5性能优化，首屏从4s降至1.5s',
      '组件库建设，团队开发效率提升50%',
    ],
  },
]

export default function Projects() {
  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        {/* 页面标题 */}
        <div style={styles.header}>
          <span style={styles.headerTag}>PROJECTS</span>
          <h1 style={styles.title}>项目经验</h1>
          <p style={styles.subtitle}>主导50+大型项目，支撑千万级DAU产品落地</p>
        </div>

        {/* 项目卡片 */}
        <div style={styles.projectList}>
          {projects.map((project) => (
            <div key={project.name} style={styles.projectCard}>
              {/* 卡片顶部色条 */}
              <div style={{ ...styles.cardAccent, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

              <div style={styles.cardContent}>
                {/* 项目头部 */}
                <div style={styles.projectHeader}>
                  <div>
                    <h3 style={styles.projectName}>{project.name}</h3>
                    <p style={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>
                  <div style={styles.projectMeta}>
                    <span style={styles.period}>{project.period}</span>
                    <span style={{ ...styles.roleBadge, borderColor: project.color, color: project.color }}>
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* 技术栈 */}
                <div style={styles.techStack}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ ...styles.techTag, borderColor: `${project.color}40`, color: project.color }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* 项目亮点 */}
                <ul style={styles.highlights}>
                  {project.highlights.map((item) => (
                    <li key={item} style={styles.highlightItem}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 底部成果 */}
        <div style={styles.achievements}>
          <h3 style={styles.achTitle}>核心成果</h3>
          <div style={styles.achGrid}>
            {[
              { icon: '🏆', text: '双11零故障运行' },
              { icon: '💰', text: '千万级DAU支撑' },
              { icon: '⚡', text: '性能提升300%+' },
              { icon: '📈', text: '团队效率翻倍' },
            ].map((ach) => (
              <div key={ach.text} style={styles.achItem}>
                <span style={styles.achIcon}>{ach.icon}</span>
                <span style={styles.achText}>{ach.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#050507',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '80px 24px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  headerTag: {
    display: 'inline-block',
    padding: '6px 14px',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '100px',
    fontSize: '11px',
    color: '#a5b4fc',
    letterSpacing: '2px',
    marginBottom: '20px',
    fontFamily: 'monospace',
  },
  title: {
    fontSize: 'clamp(36px, 6vw, 56px)',
    fontWeight: 800,
    color: '#fff',
    margin: '0 0 16px 0',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#64748b',
    margin: 0,
  },
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginBottom: '64px',
  },
  projectCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s',
  },
  cardAccent: {
    height: '3px',
  },
  cardContent: {
    padding: '32px',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '12px',
  },
  projectName: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#fff',
    margin: '0 0 4px 0',
  },
  projectSubtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0,
  },
  projectMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px',
  },
  period: {
    fontSize: '12px',
    color: '#64748b',
    fontFamily: 'monospace',
  },
  roleBadge: {
    padding: '4px 10px',
    border: '1px solid',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: 'monospace',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  },
  techTag: {
    padding: '4px 10px',
    border: '1px solid',
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: 'monospace',
  },
  highlights: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '14px',
    color: '#cbd5e1',
    lineHeight: 1.6,
  },
  achievements: {
    padding: '40px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.05) 100%)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '16px',
  },
  achTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#fff',
    margin: '0 0 24px 0',
    textAlign: 'center',
  },
  achGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
  },
  achItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '10px',
  },
  achIcon: {
    fontSize: '24px',
  },
  achText: {
    fontSize: '14px',
    color: '#e2e8f0',
    fontWeight: 500,
  },
}
