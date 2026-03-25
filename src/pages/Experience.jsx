import { Navbar } from '../App'

const experiences = [
  {
    period: '2022.03 - 至今',
    company: '华为技术有限公司',
    role: '前端架构师 / 技术专家',
    level: 'P8 级别',
    project: '鸿蒙生态 · 企业级应用平台',
    color: '#ef4444',
    icon: '🏢',
    highlights: [
      '主导鸿蒙生态企业级应用前端架构设计，支撑千万级DAU产品落地，双11等大促零故障运行',
      '设计并实现跨端统一渲染引擎，一套代码覆盖鸿蒙/Android/Web三端，研发效率提升200%',
      '搭建前端微服务架构，支持20+团队并行开发，交付效率提升300%，代码冲突率降低90%',
      '建立前端性能监控体系，核心指标P99从3s优化至800ms，用户体验评分提升40%',
      '主导前端技术选型与团队技术规划，指导50+前端工程师成长，培养3名技术专家',
      '落地低代码搭建平台，支持运营配置化上线，节省研发成本80%，月均上线活动50+',
      '制定前端开发规范与代码Review机制，团队代码质量评分从B提升至A',
    ],
    tech: ['Vue3', 'TypeScript', 'ArkUI', '微前端', 'Node.js', '低代码平台', 'DevOps'],
    achievements: ['千万DAU支撑', '零故障运行', '效率提升300%'],
  },
  {
    period: '2019.06 - 2022.03',
    company: '阿里巴巴集团',
    role: '高级前端技术专家',
    level: 'P7 级别',
    project: '淘宝/天猫 · 核心交易链路',
    color: '#f59e0b',
    icon: '🛒',
    highlights: [
      '负责淘宝核心交易链路前端架构，支撑双11峰值54万QPS，零故障运行',
      '主导交易链路前端重构，页面性能提升40%，转化率提升12%，直接带来GMV增长',
      '设计并实现多端统一架构，覆盖小程序/H5/APP多端场景，一套代码多端复用',
      '建设前端监控告警体系，线上问题发现时间从小时级缩短至分钟级，故障恢复时间降低70%',
      '主导团队基础设施建设，沉淀20+通用组件与工具库，团队开发效率提升50%',
      '技术分享与团队培养，指导20+初中级工程师晋升，培养2名P7技术专家',
      '参与集团前端技术委员会，主导3项技术规范制定，影响集团前端开发规范',
    ],
    tech: ['React', 'TypeScript', 'Rax', 'Node.js', 'Webpack', '监控体系', '性能优化'],
    achievements: ['双11零故障', '54万QPS支撑', '转化率+12%'],
  },
  {
    period: '2017.07 - 2019.06',
    company: '字节跳动',
    role: '高级前端工程师',
    level: '2-2 级别',
    project: '抖音 · 创作者平台',
    color: '#06b6d4',
    icon: '🎵',
    highlights: [
      '参与抖音创作者平台从0到1建设，支撑百万创作者日常使用',
      '主导视频编辑器前端模块开发，实现高性能实时预览，渲染延迟低于100ms',
      '优化大文件上传方案，断点续传成功率从85%提升至99.9%，上传速度提升3倍',
      '建设前端自动化测试体系，核心功能测试覆盖率达85%，线上bug率降低60%',
      '主导移动端H5性能优化，首屏加载时间从3s降至1.2s，用户留存提升15%',
    ],
    tech: ['React', 'TypeScript', 'FFmpeg', 'WebAssembly', '自动化测试', '性能优化'],
    achievements: ['百万创作者', '99.9%成功率', '留存+15%'],
  },
  {
    period: '2015.07 - 2017.07',
    company: '美团点评',
    role: '前端工程师',
    level: 'L5 级别',
    project: '美团外卖 · 商家端',
    color: '#22c55e',
    icon: '📱',
    highlights: [
      '负责美团外卖商家端管理系统开发，支撑百万商家日常运营',
      '优化移动端H5性能，首屏加载时间从4s降至1.5s，用户满意度提升25%',
      '建设前端组件库，沉淀30+通用组件，团队开发效率提升50%',
      '主导前端技术分享，组织10+场技术分享会，提升团队技术氛围',
    ],
    tech: ['Vue2', 'JavaScript', 'Webpack', '移动端优化', '组件库'],
    achievements: ['百万商家', '性能+62%', '效率+50%'],
  },
]

export default function Experience() {
  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        {/* 页面标题 */}
        <div style={styles.header}>
          <span style={styles.headerTag}>EXPERIENCE</span>
          <h1 style={styles.title}>工作经历</h1>
          <p style={styles.subtitle}>8年一线互联网大厂，从工程师到架构师的成长之路</p>
          <div style={styles.headerLine} />
        </div>

        {/* 时间线 */}
        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.company} style={styles.timelineItem}>
              {/* 时间线节点 */}
              <div style={styles.timelineLeft}>
                <div style={{ ...styles.timelineDot, background: exp.color, boxShadow: `0 0 0 4px ${exp.color}30` }}>
                  <span style={styles.timelineIcon}>{exp.icon}</span>
                </div>
                {index < experiences.length - 1 && <div style={styles.timelineLine} />}
              </div>

              {/* 内容卡片 */}
              <div style={styles.card}>
                {/* 卡片顶部 */}
                <div style={{ ...styles.cardTop, background: `linear-gradient(90deg, ${exp.color}20, transparent)` }} />
                
                <div style={styles.cardHeader}>
                  <div style={styles.headerLeft}>
                    <span style={styles.period}>{exp.period}</span>
                    <div style={styles.companyRow}>
                      <h3 style={styles.company}>{exp.company}</h3>
                      <span style={{ ...styles.levelBadge, borderColor: exp.color, color: exp.color }}>
                        {exp.level}
                      </span>
                    </div>
                    <div style={styles.roleRow}>
                      <h4 style={styles.role}>{exp.role}</h4>
                      <span style={styles.projectDot}>·</span>
                      <span style={styles.project}>{exp.project}</span>
                    </div>
                  </div>
                </div>

                {/* 成就标签 */}
                <div style={styles.achievementTags}>
                  {exp.achievements.map((a) => (
                    <span key={a} style={{ ...styles.achievementTag, background: `${exp.color}15`, color: exp.color }}>
                      ✓ {a}
                    </span>
                  ))}
                </div>

                {/* 工作内容 */}
                <div style={styles.sectionTitle}>核心职责与成果</div>
                <ul style={styles.highlights}>
                  {exp.highlights.map((item, i) => (
                    <li key={i} style={styles.highlightItem}>
                      <span style={{ ...styles.bullet, background: exp.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* 技术栈 */}
                <div style={styles.sectionTitle}>技术栈</div>
                <div style={styles.techTags}>
                  {exp.tech.map((t) => (
                    <span key={t} style={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 教育背景 */}
        <div style={styles.education}>
          <div style={styles.eduIcon}>🎓</div>
          <div style={styles.eduContent}>
            <h4 style={styles.eduTitle}>教育背景</h4>
            <p style={styles.eduText}>北京理工大学 · 计算机科学与技术（本科）· 2011.09 - 2015.07</p>
            <p style={styles.eduExtra}>GPA: 3.8/4.0 · 优秀毕业生 · 国家奖学金</p>
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
    maxWidth: '960px',
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
  timeline: {
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    gap: '36px',
    marginBottom: '48px',
  },
  timelineLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    width: '60px',
  },
  timelineDot: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineIcon: {
    fontSize: '20px',
  },
  timelineLine: {
    width: '2px',
    flex: 1,
    background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), transparent)',
    marginTop: '12px',
  },
  card: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  cardTop: {
    height: '4px',
  },
  cardHeader: {
    padding: '28px 28px 0 28px',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  period: {
    fontSize: '12px',
    color: '#6366f1',
    fontFamily: 'monospace',
    fontWeight: 600,
    letterSpacing: '0.5px',
  },
  companyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  company: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
  },
  levelBadge: {
    padding: '4px 10px',
    border: '1px solid',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 600,
    fontFamily: 'monospace',
  },
  roleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  role: {
    fontSize: '15px',
    color: '#94a3b8',
    margin: 0,
    fontWeight: 500,
  },
  projectDot: {
    color: '#64748b',
  },
  project: {
    fontSize: '14px',
    color: '#64748b',
  },
  achievementTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '20px 28px',
  },
  achievementTag: {
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 600,
  },
  sectionTitle: {
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '0 28px',
    marginBottom: '12px',
    fontWeight: 600,
  },
  highlights: {
    listStyle: 'none',
    margin: '0 0 20px 0',
    padding: '0 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    fontSize: '14px',
    color: '#cbd5e1',
    lineHeight: 1.7,
  },
  bullet: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    marginTop: '8px',
    flexShrink: 0,
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '0 28px 28px 28px',
  },
  techTag: {
    padding: '6px 12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '6px',
    fontSize: '12px',
    color: '#94a3b8',
    fontFamily: 'monospace',
  },
  education: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '28px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    marginTop: '32px',
  },
  eduIcon: {
    fontSize: '40px',
  },
  eduContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  eduTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  eduText: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0,
  },
  eduExtra: {
    fontSize: '12px',
    color: '#64748b',
    margin: 0,
  },
}
