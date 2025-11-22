import React from 'react'
import { motion } from 'framer-motion'

function SkillCard({title, items}){
  return (
    <div className="p-8 bg-white dark:bg-[#07182a] rounded-xl shadow-lg min-h-[180px]">
      <div className="text-lg md:text-xl font-extrabold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {items.map(s=> (
          <span key={s} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-sm md:text-base">{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills({items}){
  // Organize skills into logical groups for clarity
  const groups = [
    { title: 'Frontend', items: ['HTML & CSS','JavaScript','React.js'] },
    { title: 'Backend & DB', items: ['Node.js','MongoDB','Firebase'] },
    { title: 'Languages', items: ['C','C++','JAVA'] }
  ]

  const section = { hidden:{ opacity:0, y:8 }, visible:{ opacity:1, y:0, transition:{ staggerChildren: 0.06 } } }

  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.15}} variants={section} className="py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="mt-2 text-sm md:text-base text-slate-600 font-merri">A focused selection of technologies and programming languages I regularly use to design, build, and maintain responsive modern web applications, combined with strong problem-solving skills.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(g=> (
          <motion.div key={g.title} className=""> 
            <SkillCard title={g.title} items={g.items} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
