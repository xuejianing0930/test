import { useState, useRef } from 'react'
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
  input: {
    padding: '8px 12px',
    borderRadius: 6,
    border: '1px solid #ddd',
    fontSize: 14,
    width: '100%',
    boxSizing: 'border-box',
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
 * useRef - 创建可变的引用对象
 * - .current 属性存储值
 * - 改变 .current 不会触发重新渲染
 * - 常用于访问 DOM 元素、存储不触发渲染的值
 */
export default function RefModule() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const countRef = useRef(0)
  const [, forceRender] = useState(0)

  const focusInput = () => {
    inputRef.current.focus()
  }

  const incrementRef = () => {
    countRef.current += 1
    console.log('countRef.current:', countRef.current)
    forceRender(n => n + 1)
  }

  return (
    <div style={styles.module}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← 返回首页</button>
      <h2>🎯 useRef 引用</h2>

      <div style={styles.section}>
        <h3>基本用法</h3>
        <pre style={styles.code}>
{`const inputRef = useRef(null)
// inputRef.current 访问 DOM 元素
inputRef.current.focus()

// 存储持久化值
const countRef = useRef(0)
countRef.current += 1`}
        </pre>
      </div>

      <div style={styles.section}>
        <h3>聚焦输入框</h3>
        <div style={styles.demoBox}>
          <input ref={inputRef} style={styles.input} placeholder="点击下方按钮聚焦" />
          <button style={styles.btn} onClick={focusInput}>聚焦输入框</button>
        </div>
      </div>

      <div style={styles.section}>
        <h3>持久化计数器</h3>
        <div style={styles.demoBox}>
          <p>ref.current 值：{countRef.current}</p>
          <button style={styles.btn} onClick={incrementRef}>+1（看控制台）</button>
          <p style={{ fontSize: 12, color: '#666' }}>点击按钮，ref 更新但不自动渲染</p>
        </div>
      </div>

      <div style={styles.tip}>
        <h4>💡 关键点</h4>
        <ul>
          <li>useRef 返回一个 .current 对象</li>
          <li>修改 .current <strong>不会触发重新渲染</strong></li>
          <li>常用于：访问 DOM、存储上一次的值</li>
        </ul>
      </div>
    </div>
  )
}
