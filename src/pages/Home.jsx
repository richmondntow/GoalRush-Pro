import { motion } from 'framer-motion'\nimport React from 'react'
import { useNavigate } from 'react-router-dom'
import QuizCard from '../components/QuizCard'
import { QUIZZES } from '../data/quizzes'

export default function Home(){
  const navigate = useNavigate()
  return (\n    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.5,ease:'easeOut'}} >\n    <div className="fade-enter fade-enter-active">
    <div className="home-page">
      <aside className="left-panel">
        <h1>GoalRush</h1>
        <p className="lead">Gamified learning for basketball, football, and soccer.</p>
        <div className="cta">
          <button className="btn" onClick={() => navigate('/dashboard')}>View Dashboard</button>
        </div>
      </aside>

      <section className="content">
        <h2 className="section-title">Choose a sport</h2>
        <div className="card-grid">
          {Object.keys(QUIZZES).map(key => (
            <QuizCard
              key={key}
              sportKey={key}
              title={QUIZZES[key].title}
              description={QUIZZES[key].description}
              onStart={() => navigate(`/quiz/${key}`)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
\n</div>\n</motion.div>\n