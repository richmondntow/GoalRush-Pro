import React from 'react'
import { motion } from 'framer-motion'

export default function QuizCard({ sportKey, title, description, onStart }){
  return (
    <motion.div
      className="card quiz-card"
      whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="card-head">
        <h3>{title}</h3>
        <span className="sport-key">{sportKey}</span>
      </div>
      <p className="muted">{description}</p>
      <div className="card-footer">
        <motion.button
          className="btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
        >
          Start Quiz
        </motion.button>
      </div>
    </motion.div>
  )
}
