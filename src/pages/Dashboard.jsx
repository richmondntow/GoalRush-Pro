import { motion } from 'framer-motion'\nimport React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import { QUIZZES } from '../data/quizzes'

const STORAGE_KEY = 'goalrush_progress'

export default function Dashboard(){
  const [progress, setProgress] = useState({})

  useEffect(()=>{
    try { setProgress(JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')) } catch { setProgress({}) }
  },[])

  function resetSport(sport){
    const p = {...progress}; delete p[sport]; localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); setProgress(p)
  }

  return (\n    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.5,ease:'easeOut'}} >\n    <div className="fade-enter fade-enter-active">
    <div className="dashboard-page">
      <div className="dash-left">
        <h1>Dashboard</h1>
        <p className="lead">Overview of your mastery across sports.</p>

        <div className="cards">
          {Object.keys(QUIZZES).map(sport=>(
            <div className="card" key={sport}>
              <h3>{QUIZZES[sport].title}</h3>
              <ProgressBar value={progress[sport]||0} />
              <div style={{marginTop:8, display:'flex', gap:8}}>
                <Link to={`/quiz/${sport}`} className="btn">Retake</Link>
                <button className="btn ghost" onClick={()=>resetSport(sport)}>Reset</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="dash-right card">
        <h4>Recruiter-ready Notes</h4>
        <ul>
          <li>Dark, accessible UI with responsive layout.</li>
          <li>Local progress persistence; swap to backend for multi-device sync.</li>
          <li>Clean componentization and easy extension to more sports.</li>
        </ul>
      </aside>
    </div>
  )
}
\n</div>\n</motion.div>\n