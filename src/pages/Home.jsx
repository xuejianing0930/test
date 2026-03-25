import { Link } from "react-router-dom";

const techTags = [
  "Vue.js",
  "React",
  "TypeScript",
  "Vite",
  "ECharts",
  "前端架构",
  "微前端",
  "性能优化",
];

export default function Home() {
  return (
    <div style={styles.container}>
      {/* 背景装饰 */}
      <div style={styles.bgGrid} />
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      <div style={styles.hero}>
        {/* 状态标签 */}
        <div style={styles.statusBadge}>
          <span style={styles.statusDot} />
          Available for Opportunities
        </div>

        {/* 头像占位 */}
        <div style={styles.avatarWrap}>
          <div style={styles.avatar}>
            <span style={styles.avatarText}>李</span>
          </div>
          <div style={styles.avatarRing} />
        </div>

        {/* 主标题 */}
        <h1 style={styles.name}>薛嘉宁</h1>
        <div style={styles.titleWrap}>
          <span style={styles.titleDash}>—</span>
          <h2 style={styles.title}>高级前端开发工程师</h2>
          <span style={styles.titleDash}>—</span>
        </div>

        {/* 简介 */}
        <p style={styles.bio}>
          5年+金融级前端开发经验，深度参与多个大型企业级项目。
          <br />
          擅长大数据可视化、工程化架构设计与性能优化，主导过10万+数据渲染优化。
        </p>

        {/* 技术栈标签 */}
        <div style={styles.tagCloud}>
          {techTags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* 按钮组 */}
        <div style={styles.btnGroup}>
          <Link to="/projects" style={styles.btnPrimary}>
            <span>查看项目</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/contact" style={styles.btnSecondary}>
            联系我
          </Link>
        </div>

        {/* 数据展示 */}
        <div style={styles.stats}>
          {[
            { value: "5+", label: "年开发经验" },
            { value: "10+", label: "大型项目" },
            { value: "20+", label: "通用组件" },
            { value: "10w+", label: "数据处理" },
          ].map((stat) => (
            <div key={stat.label} style={styles.statItem}>
              <span style={styles.statValue}>{stat.value}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "calc(100vh - 72px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    position: "relative",
    overflow: "hidden",
  },
  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    maskImage:
      "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
  },
  bgGlow1: {
    position: "absolute",
    top: "10%",
    left: "20%",
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
    filter: "blur(80px)",
  },
  bgGlow2: {
    position: "absolute",
    bottom: "20%",
    right: "15%",
    width: "400px",
    height: "400px",
    background:
      "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
    filter: "blur(80px)",
  },
  hero: {
    textAlign: "center",
    maxWidth: "720px",
    position: "relative",
    zIndex: 1,
  },
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    background: "rgba(99, 102, 241, 0.1)",
    border: "1px solid rgba(99, 102, 241, 0.3)",
    borderRadius: "100px",
    fontSize: "12px",
    color: "#a5b4fc",
    marginBottom: "32px",
    letterSpacing: "0.5px",
  },
  statusDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 8px #22c55e",
    animation: "pulse 2s infinite",
  },
  avatarWrap: {
    position: "relative",
    width: "120px",
    height: "120px",
    margin: "0 auto 32px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    fontWeight: 700,
    color: "#fff",
  },
  avatarText: {
    fontFamily: '"Noto Sans SC", sans-serif',
  },
  avatarRing: {
    position: "absolute",
    inset: "-4px",
    borderRadius: "50%",
    border: "2px solid transparent",
    borderTopColor: "#6366f1",
    animation: "spin 3s linear infinite",
  },
  name: {
    fontSize: "clamp(48px, 8vw, 72px)",
    fontWeight: 800,
    color: "#fff",
    margin: "0 0 16px 0",
    letterSpacing: "-2px",
    lineHeight: 1.1,
  },
  titleWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "24px",
  },
  titleDash: {
    color: "#6366f1",
    fontSize: "20px",
  },
  title: {
    fontSize: "clamp(16px, 3vw, 20px)",
    fontWeight: 500,
    color: "#94a3b8",
    margin: 0,
    letterSpacing: "2px",
  },
  bio: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#94a3b8",
    margin: "0 0 40px 0",
  },
  tagCloud: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "48px",
  },
  tag: {
    padding: "6px 14px",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "6px",
    fontSize: "13px",
    color: "#e2e8f0",
    fontFamily: '"SF Mono", monospace',
    letterSpacing: "0.3px",
  },
  btnGroup: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginBottom: "64px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
    transition: "all 0.3s",
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    padding: "14px 28px",
    background: "transparent",
    color: "#e2e8f0",
    textDecoration: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    border: "1px solid rgba(255, 255, 255, 0.15)",
    transition: "all 0.3s",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "32px",
    padding: "32px",
    background: "rgba(255, 255, 255, 0.02)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  statValue: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#fff",
    fontFamily: '"SF Mono", monospace',
    letterSpacing: "-1px",
  },
  statLabel: {
    fontSize: "12px",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};
