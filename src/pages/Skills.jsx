import { Navbar } from '../App'

const skills = [
  {
    icon: '⚛️',
    title: '核心框架',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    items: [
      { name: 'Vue 2/3 全家桶', desc: '深度定制，源码级理解' },
      { name: 'React 18+ 生态', desc: 'Hooks、Fiber架构、Concurrent Mode' },
      { name: 'Next.js / Nuxt.js', desc: 'SSR/SSG/ISR全栈渲染方案' },
      { name: 'Angular 企业级', desc: '大型项目架构经验' },
      { name: 'TypeScript', desc: '类型体操、泛型编程、类型系统设计' },
    ],
  },
  {
    icon: '🏗️',
    title: '架构设计',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    items: [
      { name: '微前端架构', desc: 'qiankun、Module Federation、无界' },
      { name: '大型应用拆分', desc: '模块化、组件化、服务化策略' },
      { name: '组件库设计', desc: '从0到1搭建企业级组件库' },
      { name: '低代码平台', desc: '拖拽搭建、可视化配置、Schema驱动' },
      { name: '前端监控', desc: '性能监控、错误追踪、用户行为分析' },
    ],
  },
  {
    icon: '⚡',
    title: '性能优化',
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    items: [
      { name: '首屏优化', desc: 'FCP/LCP指标优化，首屏<1s' },
      { name: '代码分割', desc: '路由懒加载、组件预加载、Tree Shaking' },
      { name: '大数据渲染', desc: '虚拟滚动、分片渲染、Web Worker' },
      { name: '缓存策略', desc: 'Service Worker、HTTP缓存、本地存储' },
      { name: '性能分析', desc: 'Lighthouse、Chrome DevTools、性能监控' },
    ],
  },
  {
    icon: '🔧',
    title: '工程化',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    items: [
      { name: 'Vite / Webpack', desc: '构建优化、插件开发、配置定制' },
      { name: 'CI/CD 流水线', desc: 'GitHub Actions、GitLab CI、Jenkins' },
      { name: 'Monorepo', desc: 'pnpm workspace、Turborepo、Nx' },
      { name: '自动化测试', desc: 'Jest、Vitest、Cypress、Playwright' },
      { name: '代码规范', desc: 'ESLint、Prettier、Husky、Commitlint' },
    ],
  },
  {
    icon: '🌐',
    title: '全栈能力',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
    items: [
      { name: 'Node.js', desc: 'Express、Koa、Nest.js后端开发' },
      { name: 'BFF 层', desc: '接口聚合、数据转换、权限控制' },
      { name: 'GraphQL', desc: 'Schema设计、Apollo Server/Client' },
      { name: 'Serverless', desc: '云函数、边缘计算、SSR部署' },
      { name: 'Docker / K8s', desc: '容器化部署、服务编排' },
    ],
  },
  {
    icon: '👥',
    title: '团队管理',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    items: [
      { name: '团队搭建', desc: '招聘、培训、晋升体系设计' },
      { name: '技术规划', desc: '技术选型、架构演进、技术债务管理' },
      { name: '技术分享', desc: '定期技术分享、代码Review机制' },
      { name: '跨团队协作', desc: '与产品、设计、后端高效配合' },
      { name: '项目管理', desc: '敏捷开发、需求评审、进度把控' },
    ],
  },
]

const certifications = [
  { name: '华为云开发者认证', year: '2023' },
  { name: '阿里云 ACP 认证', year: '2022' },
  { name: 'Google Cloud 认证', year: '2021' },
  { name: 'AWS 认证开发者', year: '2020' },
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
          <p style={styles.subtitle}>8年一线大厂实战，掌握前端全链路技术能力</p>
          <div style={styles.headerLine} />
        </div>

        {/* 技能卡片 */}
        <div style={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.title} style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{ ...styles.iconWrap, background: skill.gradient }}>
                  <span style={styles.icon}>{skill.icon}</span>
                </div>
                <div style={styles.cardTitleWrap}>
                  <h3 style={styles.cardTitle}>{skill.title}</h3>
                  <div style={{ ...styles.accentLine, background: skill.color }} />
                </div>
              </div>
              <div style={styles.cardContent}>
                {skill.items.map((item) => (
                  <div key={item.name} style={styles.skillItem}>
                    <div style={{ ...styles.skillDot, background: skill.color }} />
                    <div style={styles.skillInfo}>
                      <span style={styles.skillName}>{item.name}</span>
                      <span style={styles.skillDesc}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 认证证书 */}
        <div style={styles.certSection}>
          <h3 style={styles.certTitle}>🏆 专业认证</h3>
          <div style={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert.name} style={styles.certItem}>
                <span style={styles.certName}>{cert.name}</span>
                <span style={styles.certYear}>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 底部总结 */}
        <div style={styles.summary}>
          <div style={styles.summaryItem}>
            <span style={styles.summaryValue}>50+</span>
            <span style={styles.summaryLabel}>大型项目主导</span>
          </div>
          <div style={styles.summaryDivider} />
          <div style={styles.summaryItem}>
            <span style={styles.summaryValue}>1000w+</span>
            <span style={styles.summaryLabel}>DAU产品经验</span>
          </div>
          <div style={styles.summaryDivider} />
          <div style={styles.summaryItem}>
            <span style={styles.summaryValue}>100+</span>
            <span style={styles.summaryLabel}>团队成员指导</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 24px 60px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '72px',
  },
  headerTag: {
    display: 'inline-block',
    padding: '8px 18px',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '100px',
    fontSize: '11px',
    color: '#a5b4fc',
    letterSpacing: '2px',
    marginBottom: '24px',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 'clamp(40px, 7vw, 64px)',
    fontWeight: 800,
    color: '#fff',
    margin: '0 0 16px 0',
    letterSpacing: '-2px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#64748b',
    margin: '0 0 24px 0',
  },
  headerLine: {
    width: '80px',
    height: '3px',
    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '28px',
    marginBottom: '64px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
    padding: '28px',
    transition: 'all 0.3s',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  },
  iconWrap: {
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '26px',
  },
  cardTitleWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#fff',
    margin: '0 0 8px 0',
  },
  accentLine: {
    width: '32px',
    height: '3px',
    borderRadius: '2px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  skillDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    marginTop: '6px',
    flexShrink: 0,
  },
  skillInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  skillName: {
    fontSize: '14px',
    color: '#e2e8f0',
    fontWeight: 600,
  },
  skillDesc: {
    fontSize: '12px',
    color: '#64748b',
  },
  certSection: {
    marginBottom: '64px',
  },
  certTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#fff',
    margin: '0 0 24px 0',
    textAlign: 'center',
  },
  certGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  certItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 24px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
  },
  certName: {
    fontSize: '14px',
    color: '#e2e8f0',
    fontWeight: 500,
  },
  certYear: {
    fontSize: '12px',
    color: '#64748b',
    fontFamily: 'monospace',
  },
  summary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '56px',
    padding: '48px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)',
    borderRadius: '20px',
    border: '1px solid rgba(99, 102, 241, 0.15)',
  },
  summaryItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  summaryValue: {
    fontSize: '44px',
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
    height: '56px',
    background: 'rgba(255, 255, 255, 0.08)',
  },
}
