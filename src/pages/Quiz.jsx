import { motion } from 'framer-motion'\nimport React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { QUIZZES } from '../data/quizzes'
import ProgressBar from '../components/ProgressBar'\nimport { launchConfetti } from '../utils/confetti'

const STORAGE_KEY = 'goalrush_progress'

function loadProgress(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}') } catch { return {} } }
function saveProgress(p){ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)) }

export default function Quiz(){
  const { sport } = useParams()
  const navigate = useNavigate()
  const quiz = QUIZZES[sport]
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [progress, setProgress] = useState(loadProgress())

  useEffect(()=>{ if(!quiz) navigate('/') }, [quiz, navigate])

  if(!quiz) return null
  const q = quiz.questions[index]
  const total = quiz.questions.length

  function submitAnswer(){
    if(selected === null) return
    const correct = selected === q.answer
    const newScore = score + (correct?1:0)
    setScore(newScore)
    const next = index + 1
    setSelected(null)
    if(next >= total){
      setFinished(true)
      const percent = Math.round((newScore/total)*100)
      const updated = {...progress, [sport]: Math.max(progress[sport]||0, percent)}
      setProgress(updated); saveProgress(updated);\n      // launch confetti for a short celebration\n      setTimeout(()=> launchConfetti(), 120);
    } else {
      setIndex(next)
    }
  }

  function restart(){
    setIndex(0); setSelected(null); setScore(0); setFinished(false)
  }

  return (\n    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.5,ease:'easeOut'}} >\n    <div className="quiz-page fade-enter fade-enter-active">
      <div className="quiz-panel card">
        <div className="quiz-header">
          <h2>{quiz.title}</h2>
          <Link to="/dashboard" className="muted">Back to Dashboard</Link>
        </div>

        {!finished ? (
          <>
            <div className="question">
              <div className="q-meta">Question {index+1} / {total}</div>
              <h3 className="q-text">{q.q}</h3>
              <div className="choices">
                {q.choices.map((c,i)=> (
                  <button key={i} className={`choice ${selected===i?'selected':''}`} onClick={()=>setSelected(i)}>{c}</button>
                ))}
              </div>
              <div className="controls">
                <ProgressBar value={(index/total)*100} />
                <div style={{display:'flex', gap:12}}>
                  <button className="btn" onClick={submitAnswer}>Submit</button>
                  <button className="btn ghost" onClick={()=>navigate('/')}>Exit</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <h3>Results</h3>
            <p className="lead">Score: {score} / {total} — {Math.round((score/total)*100)}%</p>
            <div style={{display:'flex', gap:10}}>
              <button className="btn" onClick={restart}>Retry</button>
              <Link to="/dashboard" className="btn ghost">Dashboard</Link>
            </div>
          </div>
        )}
      </div>

      <aside className="aside card">
        <h4>Your Best</h4>
        <ProgressBar value={progress[sport]||0} />
        <p className="muted">Best score for this sport (saved locally).</p>
      </aside>
    </div>
  )
}\n</motion.div>\n