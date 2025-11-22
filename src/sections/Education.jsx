import React from 'react'
import { motion } from 'framer-motion'

export default function Education({items}){
  return (
    <motion.section id="education" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="py-12">
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="mt-4 space-y-6">
        {items.map((e,idx)=> (
          <div key={idx} className="p-4 bg-white rounded shadow-sm">
            <div className="font-medium">{e.title}</div>
            <div className="text-sm text-slate-600">{e.school} {e.cgpa ? `• CGPA: ${e.cgpa}` : ''} {e.percent ? `• ${e.percent}` : ''}</div>
            <div className="text-xs text-slate-500 mt-1">{e.years}</div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
