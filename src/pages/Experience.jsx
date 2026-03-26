import { Navbar } from '../App'

const experiences = [
  {
    period: '2022.03 - 至今',
    company: '华为技术有限公司',
    role: '前端架构师 / 技术专家',
    level: 'P8',
    project: '鸿蒙生态 · 企业级应用平台',
    color: '#ef4444',
    icon: '🏢',
    highlights: [
      '主导鸿蒙生态企业级应用前端架构，支撑千万级DAU产品落地',
      '设计跨端统一渲染引擎，一套代码覆盖鸿蒙/Android/Web三端',
      '搭建微服务架构，支持20+团队并行开发，交付效率提升300%',
      '建立前端性能监控体系，P99从3s优化至800ms',
      '主导技术选型与团队规划，指导50+前端工程师成长',
      '落地低代码搭建平台，节省研发成本80%',
    ],
    tech: ['Vue3', 'TypeScript', 'ArkUI', '微前端', 'Node.js', '低代码'],
    achievements: ['千万DAU', '零故障', '效率+300%'],
  },
  {
    period: '2019.06 - 2022.03',
    company: '阿里巴巴集团',
    role: '高级前端技术专家',
    level: 'P7',
    project: '淘宝/天猫 · 核心交易链路',
    color: '#f59e0b',
    icon: '🛒',
    highlights: [
      '负责淘宝核心交易链路前端架构，支撑双11峰值54万QPS',
      '主导交易链路重构，页面性能提升40%，转化率提升12%',
      '设计多端统一架构，覆盖小程序/H5/APP多端场景',
      '建设监控告警体系，问题发现从小时级缩短至分钟级',
      '沉淀20+通用组件与工具库，团队效率提升50%',
    ],
    tech: ['React', 'TypeScript', 'Rax', 'Node.js', 'Webpack'],
    achievements: ['双11零故障', '54万QPS', '转化+12%'],
  },
  {
    period: '2017.07 - 2019.06',
    company: '字节跳动',
    role: '高级前端工程师',
    level: '2-2',
    project: '抖音 · 创作者平台',
    color: '#06b6d4',
    icon: '🎵',
    highlights: [
      '参与抖音创作者平台从0到1建设，支撑百万创作者日常使用',
      '主导视频编辑器前端模块，实时预览延迟低于100ms',
      '优化大文件上传，断点续传成功率99.9%',
      '建设自动化测试体系，核心功能覆盖率85%',
    ],
    tech: ['React', 'TypeScript', 'FFmpeg', 'WebAssembly'],
    achievements: ['百万创作者', '99.9%成功率'],
  },
  {
    period: '2015.07 - 2017.07',
    company: '美团点评',
    role: '前端工程师',
    level: 'L5',
    project: '美团外卖 · 商家端',
    color: '#22c55e',
    icon: '📱',
    highlights: [
      '负责商家端管理系统开发，支撑百万商家日常运营',
      '优化移动端H5性能，首屏从4s降至1.5s',
      '建设前端组件库，团队开发效率提升50%',
    ],
    tech: ['Vue2', 'JavaScript', 'Webpack'],
    achievements: ['百万商家', '性能+62%'],
  },
]

export default function Experience() {
  return (
    <>
      <style>{`
        .exp-page { min-height: 100vh; background: linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%); }
        .exp-container { max-width: 960px; margin: 0 auto; padding: 100px 16px 40px; }
        .exp-header { text-align: center; margin-bottom: 48px; }
        .exp-header-tag { display: inline-block; padding: 6px 14px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 100px; font-size: 10px; color: #a5b4fc; letter-spacing: 2px; margin-bottom: 16px; font-family: monospace; text-transform: uppercase; }
        .exp-title { font-size: clamp(32px, 7vw, 48px); font-weight: 800; color: #fff; margin: 0 0 12px 0; letter-spacing: -1px; }
        .exp-subtitle { font-size: 15px; color: #64748b; margin: 0; }
        .exp-header-line { width: 60px; height: 2px; background: linear-gradient(90deg, #6366f1, #8b5cf6); margin: 16px auto 0; border-radius: 2px; }
        .timeline { position: relative; }
        .timeline-item { display: flex; gap: 24px; margin-bottom: 32px; }
        .timeline-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 48px; }
        .timeline-dot { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .timeline-line { width: 2px; flex: 1; background: linear-gradient(to bottom, rgba(99, 102, 241, 0.3), transparent); margin-top: 8px; }
        .exp-card { flex: 1; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; overflow: hidden; }
        .card-top { height: 3px; }
        .card-body { padding: 20px; }
        .exp-period { font-size: 11px; color: #6366f1; font-family: monospace; font-weight: 600; letter-spacing: 0.5px; }
        .company-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 4px; }
        .exp-company { font-size: 18px; font-weight: 700; color: #fff; margin: 0; }
        .level-badge { padding: 3px 8px; border: 1px solid; border-radius: 4px; font-size: 10px; font-weight: 600; font-family: monospace; }
        .role-row { display: flex; align-items: center; gap: 6px; margin-top: 4px; flex-wrap: wrap; }
        .exp-role { font-size: 13px; color: #94a3b8; margin: 0; font-weight: 500; }
        .project-dot { color: #64748b; }
        .exp-project { font-size: 12px; color: #64748b; }
        .achievement-tags { display: flex; flex-wrap: wrap; gap: 6px; padding: 16px 0; }
        .achievement-tag { padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; }
        .section-title { font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: 600; }
        .exp-highlights { list-style: none; margin: 0 0 16px 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .highlight-item { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #cbd5e1; line-height: 1.6; }
        .bullet { width: 4px; height: 4px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .tech-tag { padding: 4px 10px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 4px; font-size: 11px; color: #94a3b8; font-family: monospace; }
        .education { display: flex; align-items: center; gap: 16px; padding: 20px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; margin-top: 24px; }
        .edu-icon { font-size: 32px; }
        .edu-content { display: flex; flex-direction: column; gap: 2px; }
        .edu-title { font-size: 14px; font-weight: 600; color: #fff; margin: 0; }
        .edu-text { font-size: 13px; color: #94a3b8; margin: 0; }
        .edu-extra { font-size: 11px; color: #64748b; margin: 0; }
        @media (max-width: 640px) {
          .exp-container { padding: 80px 12px 32px !important; }
          .timeline-item { gap: 16px !important; }
          .timeline-left { width: 36px !important; }
          .timeline-dot { width: 32px !important; height: 32px !important; font-size: 14px !important; }
          .card-body { padding: 16px !important; }
          .education { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
      
      <div className="exp-page">
        <Navbar />
        <div className="exp-container">
          {/* 页面标题 */}
          <div className="exp-header">
            <span className="exp-header-tag">EXPERIENCE</span>
            <h1 className="exp-title">工作经历</h1>
            <p className="exp-subtitle">8年一线互联网大厂，从工程师到架构师的成长之路</p>
            <div className="exp-header-line" />
          </div>

          {/* 时间线 */}
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="timeline-item">
                {/* 时间线节点 */}
                <div className="timeline-left">
                  <div className="timeline-dot" style={{ background: `${exp.color}30`, boxShadow: `0 0 0 3px ${exp.color}20` }}>
                    <span>{exp.icon}</span>
                  </div>
                  {index < experiences.length - 1 && <div className="timeline-line" />}
                </div>

                {/* 内容卡片 */}
                <div className="exp-card">
                  <div className="card-top" style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />
                  
                  <div className="card-body">
                    <span className="exp-period">{exp.period}</span>
                    <div className="company-row">
                      <h3 className="exp-company">{exp.company}</h3>
                      <span className="level-badge" style={{ borderColor: exp.color, color: exp.color }}>
                        {exp.level}
                      </span>
                    </div>
                    <div className="role-row">
                      <p className="exp-role">{exp.role}</p>
                      <span className="project-dot">·</span>
                      <span className="exp-project">{exp.project}</span>
                    </div>

                    {/* 成就标签 */}
                    <div className="achievement-tags">
                      {exp.achievements.map((a) => (
                        <span key={a} className="achievement-tag" style={{ background: `${exp.color}15`, color: exp.color }}>
                          ✓ {a}
                        </span>
                      ))}
                    </div>

                    {/* 工作内容 */}
                    <div className="section-title">核心职责与成果</div>
                    <ul className="exp-highlights">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="highlight-item">
                          <span className="bullet" style={{ background: exp.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* 技术栈 */}
                    <div className="section-title">技术栈</div>
                    <div className="tech-tags">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 教育背景 */}
          <div className="education">
            <div className="edu-icon">🎓</div>
            <div className="edu-content">
              <h4 className="edu-title">教育背景</h4>
              <p className="edu-text">北京理工大学 · 计算机科学与技术（本科）</p>
              <p className="edu-extra">2011.09 - 2015.07 · GPA: 3.8/4.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
