import { Navbar } from '../App'

const skills = [
  {
    icon: '⚛️',
    title: '核心框架',
    color: '#6366f1',
    items: [
      { name: 'Vue 2/3 全家桶', desc: '深度定制，源码级理解' },
      { name: 'React 18+ 生态', desc: 'Hooks、Fiber架构' },
      { name: 'Next.js / Nuxt.js', desc: 'SSR/SSG/ISR全栈' },
      { name: 'Angular 企业级', desc: '大型项目架构' },
      { name: 'TypeScript', desc: '类型系统设计' },
    ],
  },
  {
    icon: '🏗️',
    title: '架构设计',
    color: '#06b6d4',
    items: [
      { name: '微前端架构', desc: 'qiankun、Module Federation' },
      { name: '大型应用拆分', desc: '模块化、组件化策略' },
      { name: '组件库设计', desc: '企业级组件库' },
      { name: '低代码平台', desc: '拖拽搭建' },
      { name: '前端监控', desc: '性能监控、错误追踪' },
    ],
  },
  {
    icon: '⚡',
    title: '性能优化',
    color: '#22c55e',
    items: [
      { name: '首屏优化', desc: 'FCP/LCP指标优化' },
      { name: '代码分割', desc: '路由懒加载、Tree Shaking' },
      { name: '大数据渲染', desc: '虚拟滚动、Web Worker' },
      { name: '缓存策略', desc: 'Service Worker' },
      { name: '性能分析', desc: 'Lighthouse、DevTools' },
    ],
  },
  {
    icon: '🔧',
    title: '工程化',
    color: '#f59e0b',
    items: [
      { name: 'Vite / Webpack', desc: '构建优化、插件开发' },
      { name: 'CI/CD 流水线', desc: 'GitHub Actions' },
      { name: 'Monorepo', desc: 'pnpm workspace、Turborepo' },
      { name: '自动化测试', desc: 'Jest、Cypress、Playwright' },
      { name: '代码规范', desc: 'ESLint、Prettier、Husky' },
    ],
  },
  {
    icon: '🌐',
    title: '全栈能力',
    color: '#ec4899',
    items: [
      { name: 'Node.js', desc: 'Express、Koa、Nest.js' },
      { name: 'BFF 层', desc: '接口聚合、权限控制' },
      { name: 'GraphQL', desc: 'Schema设计' },
      { name: 'Serverless', desc: '云函数、边缘计算' },
      { name: 'Docker / K8s', desc: '容器化部署' },
    ],
  },
  {
    icon: '👥',
    title: '团队管理',
    color: '#8b5cf6',
    items: [
      { name: '团队搭建', desc: '招聘、培训、晋升' },
      { name: '技术规划', desc: '技术选型、架构演进' },
      { name: '技术分享', desc: '代码Review机制' },
      { name: '跨团队协作', desc: '高效配合' },
      { name: '项目管理', desc: '敏捷开发、进度把控' },
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
    <>
      <style>{`
        .skills-page { min-height: 100vh; background: linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%); }
        .skills-container { max-width: 1200px; margin: 0 auto; padding: 100px 16px 40px; }
        .skills-header { text-align: center; margin-bottom: 48px; }
        .skills-header-tag { display: inline-block; padding: 6px 14px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 100px; font-size: 10px; color: #a5b4fc; letter-spacing: 2px; margin-bottom: 16px; font-family: monospace; text-transform: uppercase; }
        .skills-title { font-size: clamp(32px, 7vw, 48px); font-weight: 800; color: #fff; margin: 0 0 12px 0; letter-spacing: -1px; }
        .skills-subtitle { font-size: 15px; color: #64748b; margin: 0; }
        .skills-header-line { width: 60px; height: 2px; background: linear-gradient(90deg, #6366f1, #8b5cf6); margin: 16px auto 0; border-radius: 2px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 40px; }
        .skill-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 24px; }
        .skill-card-header { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
        .skill-icon-wrap { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; }
        .skill-title-wrap { flex: 1; }
        .skill-card-title { font-size: 17px; font-weight: 700; color: #fff; margin: 0 0 6px 0; }
        .skill-accent { width: 24px; height: 2px; border-radius: 2px; }
        .skill-content { display: flex; flex-direction: column; gap: 12px; }
        .skill-item { display: flex; align-items: flex-start; gap: 10px; }
        .skill-dot { width: 5px; height: 5px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
        .skill-info { display: flex; flex-direction: column; gap: 1px; }
        .skill-name { font-size: 13px; color: #e2e8f0; font-weight: 600; }
        .skill-desc { font-size: 11px; color: #64748b; }
        .cert-section { margin-bottom: 40px; }
        .cert-title { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 16px 0; text-align: center; }
        .cert-grid { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .cert-item { display: flex; align-items: center; gap: 10px; padding: 12px 18px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; }
        .cert-name { font-size: 13px; color: #e2e8f0; font-weight: 500; }
        .cert-year { font-size: 11px; color: #64748b; font-family: monospace; }
        .skills-summary { display: flex; justify-content: center; align-items: center; gap: 40px; padding: 36px; background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%); border-radius: 16px; border: 1px solid rgba(99, 102, 241, 0.15); }
        .summary-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .summary-value { font-size: clamp(28px, 6vw, 40px); font-weight: 800; color: #fff; font-family: monospace; letter-spacing: -1px; }
        .summary-label { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
        .summary-divider { width: 1px; height: 48px; background: rgba(255, 255, 255, 0.08); }
        @media (max-width: 640px) {
          .skills-container { padding: 80px 12px 32px !important; }
          .skills-summary { flex-direction: column; gap: 20px !important; padding: 24px !important; }
          .summary-divider { width: 60px !important; height: 1px !important; }
          .cert-item { padding: 10px 14px !important; }
        }
      `}</style>
      
      <div className="skills-page">
        <Navbar />
        <div className="skills-container">
          {/* 页面标题 */}
          <div className="skills-header">
            <span className="skills-header-tag">TECH STACK</span>
            <h1 className="skills-title">技术栈</h1>
            <p className="skills-subtitle">8年一线大厂实战，掌握前端全链路技术能力</p>
            <div className="skills-header-line" />
          </div>

          {/* 技能卡片 */}
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.title} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrap" style={{ background: `linear-gradient(135deg, ${skill.color}, ${skill.color}aa)` }}>
                    <span>{skill.icon}</span>
                  </div>
                  <div className="skill-title-wrap">
                    <h3 className="skill-card-title">{skill.title}</h3>
                    <div className="skill-accent" style={{ background: skill.color }} />
                  </div>
                </div>
                <div className="skill-content">
                  {skill.items.map((item) => (
                    <div key={item.name} className="skill-item">
                      <div className="skill-dot" style={{ background: skill.color }} />
                      <div className="skill-info">
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-desc">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 认证证书 */}
          <div className="cert-section">
            <h3 className="cert-title">🏆 专业认证</h3>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <div key={cert.name} className="cert-item">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 底部总结 */}
          <div className="skills-summary">
            <div className="summary-item">
              <span className="summary-value">50+</span>
              <span className="summary-label">大型项目</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-value">1000w+</span>
              <span className="summary-label">DAU产品</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-value">100+</span>
              <span className="summary-label">团队指导</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
