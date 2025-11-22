import React from 'react'
import { motion } from 'framer-motion'
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon'
import GithubIcon from '../components/icons/GithubIcon'

function TechPill({text}){
  return (
    <span className="text-xs md:text-sm px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full">{text}</span>
  )
}

export default function Projects({items}){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.12}} variants={{hidden:{}, visible:{transition:{staggerChildren:0.07}}}} className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((p)=> (
          <motion.div key={p.id} variants={{hidden:{y:18,opacity:0,scale:0.98},visible:{y:0,opacity:1,scale:1,transition:{duration:0.45}}}} whileHover={{ y: -8, scale: 1.02 }} className="group block rounded-xl p-8 bg-white shadow-lg hover:shadow-2xl transition-transform will-change-transform border-l-4 border-primary-600" tabIndex={0} onKeyDown={(e)=>{
              if(e.key === 'Enter'){
                // open demo if available, otherwise github
                if(p.demo){ window.open(p.demo, '_blank') }
                else if(p.github){ window.open(p.github, '_blank') }
              }
            }}>
            <h3 className="font-extrabold text-xl md:text-2xl text-primary-600">{p.title}</h3>
            <p className="mt-3 text-base text-slate-700 leading-relaxed">{p.desc}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {p.tech.map(t=> <TechPill key={t} text={t} />)}
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-3">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} - Live Demo`} title="Live Demo" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white hover:bg-primary-500 transition focus:outline-none focus:ring-2 focus:ring-primary-300">
                  <ExternalLinkIcon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )}

              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} - GitHub`} title="GitHub" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition focus:outline-none focus:ring-2 focus:ring-slate-300">
                  <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
