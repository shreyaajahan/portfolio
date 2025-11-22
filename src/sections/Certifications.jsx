import React from 'react'
import { motion } from 'framer-motion'

export default function Certifications({items}){
  return (
    <motion.section id="certifications" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="py-12">
      <h2 className="text-2xl font-semibold">Certifications</h2>
      <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
        {items.map((c,i)=> <li key={i}>{c}</li>)}
      </ul>
    </motion.section>
  )
}
