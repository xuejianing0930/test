import { Navbar } from '../App'

const experiences = [
  {
    period: '2025.05 - 至今',
    company: '金锐软件技术有限公司',
    role: '高级前端开发工程师',
    project: '中国银行 · 投资管理系统',
    color: '#6366f1',
    highlights: [
      '基于 Vue3 + TypeScript 构建金融级前端应用，支撑资金管理、证券投资核心业务',
      '搭建金融通用组件库：虚拟滚动表格、行编辑、自定义校验等 20+ 组件',
      '工程化体系建设：Vite + Vue3 + TS 统一开发模板，多环境自动打包',
      '性能优化：表格虚拟滚动解决 10万+ 条交易明细卡顿问题',
      '封装统一请求库：接口加密、超时重试、错误统一捕获，异常率下降 60%',
    ],
    tech: ['Vue3', 'TypeScript', 'Vite', 'Pinia', 'ECharts', 'Element Plus'],
  },
  {
    period: '2022.07 - 2025.05',
    company: '上海中科软科技有限公司',
    role: '前端开发组长',
    project: '建信人寿 · 敏捷项目组',
    color: '#06b6d4',
    highlights: [
      '从 0 到 1 搭建前端架构，统一技术规范与项目模板',
      '主导建信人寿电商系统、微前端改造、性能优化',
      '大模型数据平台：实时文本定位、热度词云图等 AI 可视化',
      '数字货币支付系统对接，多渠道 API 拓展',
      '团队人员调度与进度把控，保障项目按时交付',
    ],
    tech: ['React', 'TypeScript', 'Ant Design', 'ECharts', 'Webpack'],
  },
  {
    period: '2020.02 - 2022.06',
    company: '北京知新树科技有限公司',
    role: '前端开发工程师',
    project: '智慧医疗管理系统',
    color: '#22c55e',
    highlights: [
      '负责前端页面搭建与交互实现，优化多浏览器兼容性',
      'ECharts 统计图表开发，高德地图 API 接入',
      '项目上线支持与生产问题维护',
    ],
    tech: ['Vue2', 'ECharts', '高德地图 API', 'CSS3'],
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
          <p style={styles.subtitle}>深耕企业级前端开发，参与多个大型金融保险项目</p>
        </div>

        {/* 时间线 */}
        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.company} style={styles.timelineItem}>
              {/* 时间线节点 */}
              <div style={styles.timelineLeft}>
                <div style={styles.timelineDot} />
                {index < experiences.length - 1 && <div style={styles.timelineLine} />}
              </div>

              {/* 内容卡片 */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <div>
                    <span style={styles.period}>{exp.period}</span>
                    <h3 style={styles.company}>{exp.company}</h3>
                    <h4 style={styles.role}>{exp.role}</h4>
                  </div>
                  <div style={{ ...styles.projectBadge, borderColor: exp.color, color: exp.color }}>
                    {exp.project}
                  </div>
                </div>

                <ul style={styles.highlights}>
                  {exp.highlights.map((item) => (
                    <li key={item} style={styles.highlightItem}>
                      <span style={{ ...styles.bullet, background: exp.color }} />
                      {item}
                    </li>
                  ))}
                </ul>

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
          <div>
            <h4 style={styles.eduTitle}>教育背景</h4>
            <p style={styles.eduContent}>陕西国际商贸学院 · 计算机科学与技术（本科）2017.09 - 2021.07</p>
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
    maxWidth: '900px',
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
  timeline: {
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    gap: '32px',
    marginBottom: '40px',
  },
  timelineLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '8px',
  },
  timelineDot: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: '#6366f1',
    boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
    flexShrink: 0,
  },
  timelineLine: {
    width: '2px',
    flex: 1,
    background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), transparent)',
    marginTop: '8px',
  },
  card: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    padding: '28px',
    marginBottom: '24px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px',
  },
  period: {
    fontSize: '12px',
    color: '#6366f1',
    fontFamily: 'monospace',
    fontWeight: 600,
    letterSpacing: '0.5px',
  },
  company: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#fff',
    margin: '4px 0 2px 0',
  },
  role: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0,
    fontWeight: 500,
  },
  projectBadge: {
    padding: '6px 12px',
    border: '1px solid',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: 'monospace',
    whiteSpace: 'nowrap',
  },
  highlights: {
    listStyle: 'none',
    margin: '0 0 20px 0',
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
  bullet: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    marginTop: '7px',
    flexShrink: 0,
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techTag: {
    padding: '4px 10px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#94a3b8',
    fontFamily: 'monospace',
  },
  education: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '24px 28px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '12px',
    marginTop: '24px',
  },
  eduIcon: {
    fontSize: '32px',
  },
  eduTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#fff',
    margin: '0 0 4px 0',
  },
  eduContent: {
    fontSize: '13px',
    color: '#64748b',
    margin: 0,
  },
}
