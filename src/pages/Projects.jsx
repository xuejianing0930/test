import { Navbar } from '../App'

const projects = [
  {
    name: '中国银行资产管理科技平台',
    subtitle: '投资管理系统',
    period: '2025.05 - 2026.03',
    color: '#6366f1',
    role: '核心开发',
    tech: ['Vue3', 'TypeScript', 'Vite', 'Pinia', 'ECharts', 'Element Plus'],
    highlights: [
      '金融级前端应用，支撑资金管理、证券投资等核心业务场景',
      '20+ 通用金融组件库：虚拟滚动表格、行编辑、自定义校验',
      '前端工程化体系：多环境自动打包，依赖预构建，启动速度提升 60%',
      '性能优化：10万+ 交易明细虚拟滚动，解决大数据量渲染卡顿',
      'TypeScript 类型系统：统一业务数据模型，类型自动推导与校验',
    ],
  },
  {
    name: '建信人寿保险电子商务系统',
    subtitle: '新一代项目',
    period: '2024.08 - 2025.04',
    color: '#06b6d4',
    role: '技术负责人',
    tech: ['React', 'TypeScript', 'Ant Design', 'ECharts', 'Webpack'],
    highlights: [
      '从 0 到 1 搭建前端架构，统一技术规范与项目模板',
      '性能优化：代码分割、懒加载、资源压缩，首屏加载时间减少 40%',
      '微信生态集成：公众号 + 小程序多端统一开发',
      '大屏数据可视化：实时数据看板，支持多维度钻取分析',
    ],
  },
  {
    name: '百度大模型萃取平台',
    subtitle: '建信人寿 AI 数据平台',
    period: '2024.01 - 2024.04',
    color: '#8b5cf6',
    role: '前端负责人',
    tech: ['React', 'Ant Design', 'ECharts', 'axios'],
    highlights: [
      '实时文本定位与标记：录音文本同步高亮、打点',
      '热度词云图：多维度数据可视化展示',
      '项目全流程管理：需求评审、技术方案设计、进度把控',
    ],
  },
  {
    name: '建行生活保险生活馆',
    subtitle: '数字化经营项目',
    period: '2023.04 - 2024.01',
    color: '#22c55e',
    role: '核心开发',
    tech: ['React', 'TypeScript', 'Ant Design'],
    highlights: [
      '数字货币支付对接：新增卡单类型与销售渠道',
      '多渠道 API 拓展：实现一对多接口设计',
      '第三方支付集成：建行生活收银台 + 实时付款系统',
      '业务对账平账：契约、保单、实时收付费核心流程对接',
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
          <p style={styles.subtitle}>深度参与企业级大型项目，积累丰富实战经验</p>
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
          <h3 style={styles.achTitle}>项目成果</h3>
          <div style={styles.achGrid}>
            {[
              { icon: '🏆', text: '多个项目成功上线验收' },
              { icon: '💰', text: '金融级系统稳定运行' },
              { icon: '⚡', text: '性能优化效果显著' },
              { icon: '📈', text: '研发效率大幅提升' },
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
