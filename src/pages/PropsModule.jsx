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
  tip: {
    background: '#e8f5e9',
    border: '1px solid #a5d6a7',
    borderRadius: 8,
    padding: 16,
    marginTop: 24,
  },
}

/**
 * Props（属性）是父组件向子组件传递数据的方式
 * - Props 是只读的，不可修改
 * - 可以传递任何类型的数据
 * - 解构赋值让代码更简洁
 */
function UserCard({ name, email, age }) {
  return (
    <div style={styles.demoBox}>
      <h4>👤 用户卡片</h4>
      <p>姓名：{name}</p>
      <p>邮箱：{email}</p>
      <p>年龄：{age} 岁</p>
    </div>
  )
}

export default function PropsModule() {
  const navigate = useNavigate()

  return (
    <div style={styles.module}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← 返回首页</button>
      <h2>📦 Props 传递</h2>
      
      <div style={styles.section}>
        <h3>什么是 Props？</h3>
        <p>Props（Properties）是 React 中父子组件通信的主要方式。数据从父组件流向子组件。</p>
        <pre style={styles.code}>
{`// 父组件传递 Props
<UserCard name="小明" email="xiaoming@example.com" age={18} />

// 子组件接收 Props
function UserCard({ name, email, age }) {
  return (
    <div>
      <p>姓名：{name}</p>
      <p>邮箱：{email}</p>
      <p>年龄：{age} 岁</p>
    </div>
  )
}`}
        </pre>
      </div>

      <div style={styles.section}>
        <h3>实际示例</h3>
        <UserCard name="小明" email="xiaoming@example.com" age={18} />
        <UserCard name="小红" email="xiaohong@example.com" age={20} />
      </div>

      <div style={styles.tip}>
        <h4>💡 关键点</h4>
        <ul>
          <li>Props 是<strong>只读</strong>的，子组件不能修改 Props</li>
          <li>使用解构赋值更简洁</li>
          <li>可以传递函数实现子→父通信</li>
        </ul>
      </div>
    </div>
  )
}
