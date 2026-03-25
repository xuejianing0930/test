import { Link } from 'react-router-dom'

// 模块配置
const modules = [
  { path: '/props', title: '📦 Props 传递', desc: '父子组件数据通信' },
  { path: '/state', title: '🔢 useState', desc: '函数式组件状态管理' },
  { path: '/effect', title: '⚡ useEffect', desc: '副作用处理与生命周期' },
  { path: '/ref', title: '🎯 useRef', desc: '引用 DOM 元素与持久化值' },
  { path: '/context', title: '🌍 useContext', desc: '跨组件层级共享数据' },
  { path: '/reducer', title: '🔄 useReducer', desc: '复杂状态逻辑管理' },
  { path: '/memo', title: '💾 useMemo', desc: '计算结果缓存' },
  { path: '/callback', title: '📞 useCallback', desc: '回调函数缓存' },
  { path: '/custom', title: '🛠️ 自定义 Hook', desc: '封装可复用的逻辑' },
]

const styles = {
  container: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '24px 16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 32,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 16,
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    background: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    height: '100%',
  },
  cardTitle: {
    margin: '0 0 8px 0',
    color: '#333',
  },
  cardDesc: {
    margin: 0,
    color: '#888',
    fontSize: 14,
  },
}

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚛️ React 核心 Hook 教程</h1>
      <p style={styles.subtitle}>点击下方模块进入学习</p>
      
      <div style={styles.grid}>
        {modules.map((mod) => (
          <Link key={mod.path} to={mod.path} style={styles.cardLink}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>{mod.title}</h3>
              <p style={styles.cardDesc}>{mod.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
