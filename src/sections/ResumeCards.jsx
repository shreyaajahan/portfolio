import React from 'react'
import { motion } from 'framer-motion'

function Card({title, children}){
  return (
    <motion.div whileHover={{ y: -8 }} className="p-8 bg-white rounded-xl shadow-lg min-h-[220px]">
      <div className="font-extrabold text-xl md:text-2xl">{title}</div>
      <div className="mt-4 text-base text-slate-700 leading-relaxed">{children}</div>
    </motion.div>
  )
}

export default function ResumeCards({data}){
  return (
    <section id="summary" className="py-12">
      <p className="mt-2 text-sm md:text-base text-slate-600 font-merri italic">A compact summary of education, certifications, areas of interest, responsibilities and achievements.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card title="Education">
          <div className="space-y-3 font-merri">
            {data.education.map((e, i)=> (
              <div key={i}>
                <div className="font-medium">{e.title}</div>
                <div className="text-xs text-slate-600">{e.school} {e.cgpa ? `• CGPA: ${e.cgpa}` : ''} {e.percent ? `• ${e.percent}` : ''}</div>
                <div className="text-xs text-slate-500">{e.years}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Certifications">
          <ul className="list-disc pl-5 space-y-1">
            {data.certifications.map((c,i)=> <li key={i}>{c}</li>)}
          </ul>
        </Card>

        <Card title="Areas of Interest">
          <ul className="list-disc pl-5 space-y-1">
            {data.areasOfInterest.map((a,i)=> <li key={i}>{a}</li>)}
          </ul>
        </Card>

        <Card title="Responsibilities">
          <ul className="list-disc pl-5 space-y-1">
            {data.responsibilities.map((r,i)=> <li key={i}>{r}</li>)}
          </ul>
        </Card>

        <Card title="Achievements">
          <ul className="list-disc pl-5 space-y-1">
            {data.achievements.map((a,i)=> <li key={i}>{a}</li>)}
          </ul>
        </Card>
      </div>
    </section>
  )
}
