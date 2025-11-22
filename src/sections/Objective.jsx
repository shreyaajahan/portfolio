import React from 'react'
import { motion } from 'framer-motion'

export default function Objective({text}){
  return (
    <motion.section id="objective" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="py-12">
      <h2 className="text-2xl font-semibold">Objective</h2>
      <p className="mt-4 text-slate-700">{text}</p>
    </motion.section>
  )
}
