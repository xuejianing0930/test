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
      '支撑千万级DAU，双11等大促零故障运行',
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
    tech: ['Vue2', 'JavaScript', 'Webpack'],
    highlights: [
      '支撑百万商家日常运营管理',
      '移动端H5性能优化，首屏从4s降至1.5s',
      '组件库建设，团队开发效率提升50%',
    ],
  },
]

export default function Projects() {
  return (
    <>
      <style>{`
        .proj-page { min-height: 100vh; background: linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%); }
        .proj-container { max-width: 1000px; margin: 0 auto; padding: 100px 16px 40px; }
        .proj-header { text-align: center; margin-bottom: 48px; }
        .proj-header-tag { display: inline-block; padding: 6px 14px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 100px; font-size: 10px; color: #a5b4fc; letter-spacing: 2px; margin-bottom: 16px; font-family: monospace; text-transform: uppercase; }
        .proj-title { font-size: clamp(32px, 7vw, 48px); font-weight: 800; color: #fff; margin: 0 0 12px 0; letter-spacing: -1px; }
        .proj-subtitle { font-size: 15px; color: #64748b; margin: 0; }
        .proj-header-line { width: 60px; height: 2px; background: linear-gradient(90deg, #6366f1, #8b5cf6); margin: 16px auto 0; border-radius: 2px; }
        .proj-list { display: flex; flex-direction: column; gap: 24px; margin-bottom: 40px; }
        .proj-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; overflow: hidden; }
        .card-accent { height: 3px; }
        .card-content { padding: 20px; }
        .proj-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; flex-wrap: wrap; gap: 12px; }
        .proj-info { flex: 1; }
        .proj-name { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 4px 0; }
        .proj-subtitle-text { font-size: 13px; color: #94a3b8; margin: 0; }
        .proj-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .proj-period { font-size: 11px; color: #64748b; font-family: monospace; }
        .proj-role { padding: 4px 10px; border: 1px solid; border-radius: 4px; font-size: 11px; font-weight: 600; font-family: monospace; }
        .tech-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .tech-tag { padding: 4px 10px; border: 1px solid; border-radius: 4px; font-size: 11px; font-family: monospace; }
        .proj-highlights { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .proj-highlight { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #cbd5e1; line-height: 1.6; }
        .check-icon { flex-shrink: 0; margin-top: 2px; }
        .achievements { padding: 28px; background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 16px; }
        .ach-title { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 20px 0; text-align: center; }
        .ach-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
        .ach-item { display: flex; align-items: center; gap: 10px; padding: 14px; background: rgba(255, 255, 255, 0.03); border-radius: 10px; }
        .ach-icon { font-size: 20px; }
        .ach-text { font-size: 13px; color: #e2e8f0; font-weight: 500; }
        @media (max-width: 640px) {
          .proj-container { padding: 80px 12px 32px !important; }
          .card-content { padding: 16px !important; }
          .proj-header-row { flex-direction: column !important; }
          .proj-meta { align-items: flex-start !important; flex-direction: row !important; }
        }
      `}</style>
      
      <div className="proj-page">
        <Navbar />
        <div className="proj-container">
          {/* 页面标题 */}
          <div className="proj-header">
            <span className="proj-header-tag">PROJECTS</span>
            <h1 className="proj-title">项目经验</h1>
            <p className="proj-subtitle">主导50+大型项目，支撑千万级DAU产品落地</p>
            <div className="proj-header-line" />
          </div>

          {/* 项目卡片 */}
          <div className="proj-list">
            {projects.map((project) => (
              <div key={project.name} className="proj-card">
                <div className="card-accent" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
                <div className="card-content">
                  <div className="proj-header-row">
                    <div className="proj-info">
                      <h3 className="proj-name">{project.name}</h3>
                      <p className="proj-subtitle-text">{project.subtitle}</p>
                    </div>
                    <div className="proj-meta">
                      <span className="proj-period">{project.period}</span>
                      <span className="proj-role" style={{ borderColor: project.color, color: project.color }}>
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* 技术栈 */}
                  <div className="tech-stack">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag" style={{ borderColor: `${project.color}40`, color: project.color }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* 项目亮点 */}
                  <ul className="proj-highlights">
                    {project.highlights.map((item) => (
                      <li key={item} className="proj-highlight">
                        <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2">
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
          <div className="achievements">
            <h3 className="ach-title">核心成果</h3>
            <div className="ach-grid">
              {[
                { icon: '🏆', text: '双11零故障' },
                { icon: '💰', text: '千万级DAU' },
                { icon: '⚡', text: '性能+300%' },
                { icon: '📈', text: '效率翻倍' },
              ].map((ach) => (
                <div key={ach.text} className="ach-item">
                  <span className="ach-icon">{ach.icon}</span>
                  <span className="ach-text">{ach.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
