import { useState } from 'react'
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
  btnGroup: {
    display: 'flex',
    gap: 8,
    marginTop: 8,
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
 * useState - 函数式组件的状态管理 Hook
 * - 返回 [state, setState] 数组
 * - state 更新触发组件重新渲染
 * - Updater 函数形式更安全：setCount(c => c + 1)
 */
export default function StateModule() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello React!')
  const [todos, setTodos] = useState(['学习 React', '写代码'])

  const addTodo = () => {
    const newTodo = `任务 ${todos.length + 1}`
    setTodos([...todos, newTodo])
  }

  return (
    <div style={styles.module}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← 返回首页</button>
      <h2>🔢 useState 状态管理</h2>

      <div style={styles.section}>
        <h3>基本用法</h3>
        <pre style={styles.code}>
{`const [count, setCount] = useState(0)
// count: 当前状态值
// setCount: 更新状态的函数`}
        </pre>
      </div>

      <div style={styles.section}>
        <h3>计数器示例</h3>
        <div style={styles.demoBox}>
          <p>当前计数：<strong style={{ fontSize: 24 }}>{count}</strong></p>
          <div style={styles.btnGroup}>
            <button style={styles.btn} onClick={() => setCount(c => c - 1)}>-1</button>
            <button style={styles.btn} onClick={() => setCount(0)}>重置</button>
            <button style={styles.btn} onClick={() => setCount(c => c + 1)}>+1</button>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h3>表单输入示例</h3>
        <div style={styles.demoBox}>
          <input 
            style={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="输入消息..."
          />
          <p>实时显示：{message}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h3>数组状态示例</h3>
        <div style={styles.demoBox}>
          <ul>{todos.map((t, i) => <li key={i}>{t}</li>)}</ul>
          <button style={styles.btn} onClick={addTodo}>添加任务</button>
        </div>
      </div>

      <div style={styles.tip}>
        <h4>💡 关键点</h4>
        <ul>
          <li>useState 返回 [值, 更新函数] 的数组</li>
          <li>推荐使用 Updater 函数避免闭包问题</li>
          <li>状态更新是异步的，批量处理</li>
        </ul>
      </div>
    </div>
  )
}
