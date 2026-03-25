import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = {
  module: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '24px 16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  backBtn: {
    marginBottom: 16,
    padding: '8px 16px',
    borderRadius: 6,
    border: '1px solid #ddd',
    background: '#fff',
    cursor: 'pointer',
  },
  section: {
    marginBottom: 24,
  },
  demoBox: {
    background: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginTop: 12,
  },
  code: {
    background: '#2d2d2d',
    color: '#ccc',
    padding: 16,
    borderRadius: 8,
    overflow: 'auto',
    fontSize: 13,
    lineHeight: 1.5,
  },
  btn: {
    padding: '8px 16px',
    borderRadius: 6,
    border: '1px solid #ddd',
    background: '#fff',
    cursor: 'pointer',
    fontSize: 14,
  },
  tip: {
    background: '#e8f5e9',
    border: '1px solid #a5d6a7',
    borderRadius: 8,
    padding: 16,
    marginTop: 24,
  },
}

/**
 * useEffect - 处理副作用（数据获取、订阅、定时器等）
 * - 第二个参数是依赖数组，控制执行时机
 * - 返回函数用于清理副作用
 */
export default function EffectModule() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [width, setWidth] = useState(0)

  // 模拟数据获取（仅执行一次）
  useEffect(() => {
    setTimeout(() => {
      setData({ name: 'React', version: '18.x' })
    }, 1000)
  }, [])

  // 监听窗口宽度变化
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 依赖 count，每次 count 变化时执行
  useEffect(() => {
    document.title = `计数: ${count}`
  }, [count])

  return (
    <div style={styles.module}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← 返回首页</button>
      <h2>⚡ useEffect 副作用处理</h2>

      <div style={styles.section}>
        <h3>useEffect 的三种执行时机</h3>
        <pre style={styles.code}>
{`// 1. 每次渲染都执行
useEffect(() => { console.log('渲染了') })

// 2. 仅挂载时执行一次
useEffect(() => { fetchData() }, [])

// 3. 依赖项变化时执行
useEffect(() => { ... }, [count, name])`}
        </pre>
      </div>

      <div style={styles.section}>
        <h3>模拟数据获取</h3>
        <div style={styles.demoBox}>
          {data ? (
            <p>✅ 获取成功：{data.name} - {data.version}</p>
          ) : (
            <p>⏳ 加载中...</p>
          )}
        </div>
      </div>

      <div style={styles.section}>
        <h3>监听窗口宽度</h3>
        <div style={styles.demoBox}>
          <p>当前窗口宽度：<strong>{width}px</strong></p>
          <p style={{ fontSize: 12, color: '#666' }}>调整窗口大小试试</p>
        </div>
      </div>

      <div style={styles.section}>
        <h3>修改页面标题</h3>
        <div style={styles.demoBox}>
          <p>当前标题：<strong>{document.title}</strong></p>
          <button style={styles.btn} onClick={() => setCount(c => c + 1)}>
            +1（标题会同步变化）
          </button>
        </div>
      </div>

      <div style={styles.tip}>
        <h4>💡 关键点</h4>
        <ul>
          <li>第二个参数是<strong>依赖数组</strong>，控制 effect 执行时机</li>
          <li>返回<strong>清理函数</strong>用于取消订阅、清除定时器</li>
          <li>空数组 [] 表示只在挂载时执行一次</li>
        </ul>
      </div>
    </div>
  )
}
