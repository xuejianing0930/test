import { Navbar } from '../App'

const skills = [
  {
    icon: '⚡',
    title: '基础技术',
    color: '#22c55e',
    items: ['HTML5 / CSS3 / JavaScript ES6+', 'DOM / BOM / 事件模型', '跨浏览器兼容性 (IE11+/现代)', '异步编程 (Promise / async-await)', '响应式设计 (Flex / Grid)'],
  },
  {
    icon: '⚛️',
    title: '主流框架',
    color: '#06b6d4',
    items: ['Vue 2/3 (Composition API)', 'Pinia / Vuex 状态管理', 'React / Redux / RTK', 'Angular 核心原理', 'TypeScript 类型系统'],
  },
  {
    icon: '🔧',
    title: '工程化',
    color: '#f59e0b',
    items: ['Vite / Webpack 构建优化', 'Git / SVN 版本控制', 'ESLint / Prettier / Husky', 'CI/CD 流水线搭建', '微前端架构设计'],
  },
  {
    icon: '📊',
    title: '组件与可视化',
    color: '#ec4899',
    items: ['Element Plus / Ant Design', 'ECharts / 大屏可视化', '虚拟滚动 / 分片加载', '通用组件库设计与封装', '20+ 金融级组件沉淀'],
  },
  {
    icon: '🤖',
    title: 'AI 技术',
    color: '#8b5cf6',
    items: ['AI 辅助编程工具应用', 'ChatGPT / Copilot 提效', 'AI 代码审查与优化', '自动化测试生成'],
  },
  {
    icon: '💡',
    title: '软实力',
    color: '#14b8a6',
    items: ['快速学习与技术迁移', '高并发高复杂度业务', '跨团队沟通协作', '技术文档与知识沉淀'],
  },
]

export default function Skills() {
  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        {/* 页面标题 */}
        <div style={styles.header}>
          <span style={styles.headerTag}>TECH STACK</span>
          <h1 style={styles.title}>技术栈</h1>
          <p style={styles.subtitle}>深耕前端技术多年，具备全链路工程化能力</p>
        </div>

        {/* 技能卡片 */}
        <div style={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.title} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={{ ...styles.icon, filter: `drop-shadow(0 0 8px ${skill.color})` }}>{skill.icon}</span>
                <h3 style={styles.cardTitle}>{skill.title}</h3>
                <div style={{ ...styles.accentLine, background: skill.color }} />
              </div>
              <ul style={styles.list}>
                {skill.items.map((item) => (
                  <li key={item} style={styles.listItem}>
                    <span style={{ ...styles.dot, background: skill.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部总结 */}
        <div style={styles.summary}>
          <div style={styles.summaryItem}>
            <span style={styles.summaryValue}>10+</span>
            <span style={styles.summaryLabel}>技术栈掌握</span>
          </div>
          <div style={styles.summaryDivider} />
          <div style={styles.summaryItem}>
            <span style={styles.summaryValue}>20+</span>
            <span style={styles.summaryLabel}>通用组件封装</span>
          </div>
          <div style={styles.summaryDivider} />
          <div style={styles.summaryItem}>
            <span style={styles.summaryValue}>5+</span>
            <span style={styles.summaryLabel}>年实战经验</span>
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
    maxWidth: '1200px',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    padding: '28px',
    transition: 'all 0.3s',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '28px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
    flex: 1,
  },
  accentLine: {
    width: '24px',
    height: '3px',
    borderRadius: '2px',
    marginLeft: 'auto',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
    color: '#94a3b8',
    lineHeight: 1.5,
  },
  dot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  summary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '48px',
    padding: '40px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(99, 102, 241, 0.2)',
  },
  summaryItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  summaryValue: {
    fontSize: '40px',
    fontWeight: 800,
    color: '#fff',
    fontFamily: 'monospace',
    letterSpacing: '-1px',
  },
  summaryLabel: {
    fontSize: '13px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  summaryDivider: {
    width: '1px',
    height: '48px',
    background: 'rgba(255, 255, 255, 0.1)',
  },
}
