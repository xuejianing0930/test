import { Link } from "react-router-dom";
import { Navbar } from "../App";

export default function Contact() {
  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        {/* 背景装饰 */}
        <div style={styles.bgGlow} />

        {/* 标题区域 */}
        <div style={styles.header}>
          <span style={styles.headerTag}>CONTACT</span>
          <h1 style={styles.title}>联系我</h1>
          <p style={styles.subtitle}>期待与您交流合作</p>
        </div>

        {/* 主要联系方式卡片 */}
        <div style={styles.mainCard}>
          <div style={styles.cardIcon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6366f1"
              strokeWidth="1.5"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 style={styles.cardTitle}>薛嘉宁</h2>
          <p style={styles.cardRole}>高级前端开发工程师</p>
          <div style={styles.divider} />
          <a href="mailto:wlyliyang@163.com" style={styles.emailLink}>
            wlyliyang@163.com
          </a>
        </div>

        {/* 联系方式列表 */}
        <div style={styles.contactList}>
          {[
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              ),
              label: "邮箱",
              value: "wlyliyang@163.com",
              href: "mailto:wlyliyang@163.com",
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: "地点",
              value: "上海",
              href: null,
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              ),
              label: "状态",
              value: "在职 · 看机会",
              href: null,
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              ),
              label: "意向",
              value: "高级前端 / 技术专家 / 架构师",
              href: null,
            },
          ].map((item) => (
            <div key={item.label} style={styles.contactItem}>
              <div style={styles.contactIcon}>{item.icon}</div>
              <div style={styles.contactInfo}>
                <span style={styles.contactLabel}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} style={styles.contactValueLink}>
                    {item.value}
                  </a>
                ) : (
                  <span style={styles.contactValue}>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 快捷链接 */}
        <div style={styles.quickLinks}>
          <h3 style={styles.quickTitle}>快捷链接</h3>
          <div style={styles.quickGrid}>
            {[
              { label: "GitHub", href: "#", color: "#e2e8f0" },
              { label: "掘金", href: "#", color: "#1e7fff" },
              { label: "简历 PDF", href: "#", color: "#ef4444" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  ...styles.quickBtn,
                  borderColor: `${link.color}40`,
                  color: link.color,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* 返回首页 */}
        <div style={styles.backWrap}>
          <Link to="/" style={styles.backBtn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050507",
    position: "relative",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "80px 24px",
    position: "relative",
    zIndex: 1,
  },
  bgGlow: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  headerTag: {
    display: "inline-block",
    padding: "6px 14px",
    background: "rgba(99, 102, 241, 0.1)",
    border: "1px solid rgba(99, 102, 241, 0.3)",
    borderRadius: "100px",
    fontSize: "11px",
    color: "#a5b4fc",
    letterSpacing: "2px",
    marginBottom: "20px",
    fontFamily: "monospace",
  },
  title: {
    fontSize: "clamp(36px, 6vw, 56px)",
    fontWeight: 800,
    color: "#fff",
    margin: "0 0 12px 0",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#64748b",
    margin: 0,
  },
  mainCard: {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    padding: "48px 32px",
    textAlign: "center",
    marginBottom: "32px",
  },
  cardIcon: {
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#fff",
    margin: "0 0 6px 0",
    letterSpacing: "-0.5px",
  },
  cardRole: {
    fontSize: "14px",
    color: "#94a3b8",
    margin: 0,
    fontWeight: 500,
  },
  divider: {
    width: "40px",
    height: "2px",
    background: "#6366f1",
    margin: "24px auto",
    borderRadius: "1px",
  },
  emailLink: {
    fontSize: "18px",
    color: "#6366f1",
    textDecoration: "none",
    fontFamily: "monospace",
    fontWeight: 600,
    transition: "all 0.2s",
  },
  contactList: {
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: "16px",
    padding: "8px",
    marginBottom: "32px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    borderRadius: "10px",
    transition: "background 0.2s",
  },
  contactIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  contactLabel: {
    fontSize: "12px",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  contactValue: {
    fontSize: "15px",
    color: "#e2e8f0",
    fontWeight: 500,
  },
  contactValueLink: {
    fontSize: "15px",
    color: "#6366f1",
    fontWeight: 500,
    textDecoration: "none",
  },
  quickLinks: {
    textAlign: "center",
    marginBottom: "48px",
  },
  quickTitle: {
    fontSize: "14px",
    color: "#64748b",
    margin: "0 0 16px 0",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  quickGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },
  quickBtn: {
    padding: "10px 20px",
    background: "transparent",
    border: "1px solid",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.2s",
  },
  backWrap: {
    textAlign: "center",
  },
  backBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    color: "#64748b",
    textDecoration: "none",
    fontSize: "14px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "8px",
    transition: "all 0.2s",
  },
};
