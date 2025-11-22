import React from 'react'
import { motion } from 'framer-motion'

export default function Resume({data}){
  const section = { hidden:{ opacity:0, y:8 }, visible:{ opacity:1, y:0, transition:{ duration:0.5 } } }

  return (
    <motion.section id="resume" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.15}} variants={section} className="py-12">
      <h2 className="text-2xl font-semibold">Resume</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Education</h3>
              <div className="mt-3 space-y-4 text-sm text-slate-700">
                {data.education.map((edu, idx)=> (
                  <div key={idx}>
                    <div className="font-medium">{edu.title}</div>
                    <div className="text-slate-600">{edu.school} {edu.cgpa ? `• CGPA: ${edu.cgpa}` : ''} {edu.percent ? `• ${edu.percent}` : ''}</div>
                    <div className="text-xs text-slate-500">{edu.years}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Objective</h3>
              <p className="mt-3 text-sm text-slate-700">{data.objective}</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Certifications</h3>
              <ul className="mt-3 list-disc pl-5 text-sm">
                {data.certifications.map((c,i)=> <li key={i}>{c}</li>)}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Areas of Interest</h3>
              <ul className="mt-3 list-disc pl-5 text-sm">
                {data.areasOfInterest.map((a,i)=> <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">Responsibilities</h3>
            <ul className="mt-3 list-disc pl-5 text-sm">
              {data.responsibilities.map((r,i)=> <li key={i}>{r}</li>)}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">Achievements</h3>
            <ul className="mt-3 list-disc pl-5 text-sm">
              {data.achievements.map((a,i)=> <li key={i}>{a}</li>)}
            </ul>
          </div>
        </div>

        <aside className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Quick Info</h3>
          <div className="mt-3 text-sm text-slate-700">
            <p><span className="font-medium">Phone:</span> 9842484828</p>
            <p className="mt-2"><span className="font-medium">Email:</span> shreyaajahan@gmail.com</p>
            <p className="mt-2"><span className="font-medium">LinkedIn:</span> <a href="https://www.linkedin.com/in/shreyaa-j-357128295/" className="text-primary-600">View</a></p>
            <p className="mt-2"><span className="font-medium">GitHub:</span> <a href="https://github.com/shreyaajahan" className="text-primary-600">View</a></p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Node.js','MongoDB','Firebase','HTML & CSS','JavaScript','React.js','C','JAVA','C++'].map(s=> (
                <span key={s} className="px-3 py-1 bg-slate-100 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.section>
  )
}
