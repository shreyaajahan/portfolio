import React from 'react'
import { motion } from 'framer-motion'

export default function About({about}){
  const section = { hidden:{ opacity:0, y:10 }, visible:{ opacity:1, y:0, transition:{ duration:0.5 } } }

  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.2}} variants={section} className="py-12">
      <motion.h2 className="text-2xl font-semibold">About Me</motion.h2>
      <div className="mt-6">
        <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-6 md:p-8 rounded-xl shadow-md text-slate-700 font-merri">
          <p className="leading-relaxed">{about.intro}</p>

          <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-600">
            <li>Full-stack developer with strong problem-solving skills.</li>
            <li>Strong fundamentals in JavaScript, data structures, and backend development.</li>
            <li>Soft skills: effective communicator, team player, adaptable learner.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
