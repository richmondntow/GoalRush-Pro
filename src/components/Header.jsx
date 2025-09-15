import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="header">
      <div className="brand">
        <Link to="/" className="brand-link">GoalRush</Link>
        <span className="tag">Sports Learning</span>
      </div>
      <nav className="nav">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/" className="nav-link">Learn</Link>
      </nav>
    </header>
  )
}
