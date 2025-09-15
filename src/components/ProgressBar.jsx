import React from 'react'
import { motion } from 'framer-motion'

export default function ProgressBar({ value=0 }){
  const pct = Math.max(0, Math.min(100, Math.round(value)))
  return (
    <div className="progress-wrap" aria-hidden>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: pct + '%' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <div className="progress-label">{pct}%</div>
    </div>
  )
}
