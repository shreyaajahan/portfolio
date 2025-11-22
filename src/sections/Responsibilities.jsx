import React from 'react'
import { motion } from 'framer-motion'

export default function Responsibilities({items}){
  return (
    <motion.section id="responsibilities" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="py-12">
      <h2 className="text-2xl font-semibold">Responsibilities</h2>
      <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
        {items.map((r,i)=> <li key={i}>{r}</li>)}
      </ul>
    </motion.section>
  )
}
