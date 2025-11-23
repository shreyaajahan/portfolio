import React from 'react'
import { motion } from 'framer-motion'
import MailIcon from '../components/icons/MailIcon'
import LinkedInIcon from '../components/icons/LinkedInIcon'
import GithubIcon from '../components/icons/GithubIcon'

export default function Contact({contact}){
  const section = { hidden:{ opacity:0, y:8 }, visible:{ opacity:1, y:0, transition:{ duration:0.45 } } }

  function submitPlaceholder(e){
    e.preventDefault()
    alert('This is a front-end demo contact form. Replace with backend handling.')
  }

  return (
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.2}} variants={section} className="py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-6">
        <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold">Let's connect</h3>
          <p className="mt-3 text-slate-700">I'm open to collaboration, internships, and freelance work.</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon className="w-5 h-5 text-slate-600" />
              <a href={`mailto:${contact.email}`} className="text-primary-600">{contact.email}</a>
            </div>

            {/* Phone removed from contact section per request */}

            {contact.linkedin && (
              <div className="flex items-center gap-3">
                <LinkedInIcon className="w-5 h-5 text-blue-700" />
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-blue-700">LinkedIn</a>
              </div>
            )}

            {contact.github && (
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-slate-800" />
                <a href={contact.github} target="_blank" rel="noreferrer" className="text-slate-800">GitHub</a>
              </div>
            )}

            {contact.leetcode && (
              <div className="flex items-center gap-3">
                <span className="text-amber-600">🏆</span>
                <a href={contact.leetcode} target="_blank" rel="noreferrer" className="text-amber-700">LeetCode</a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
