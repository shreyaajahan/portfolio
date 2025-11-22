import React from 'react'
import { motion } from 'framer-motion'
import GithubIcon from '../components/icons/GithubIcon'
import LinkedInIcon from '../components/icons/LinkedInIcon'
import MailIcon from '../components/icons/MailIcon'

export default function Footer({contact}){
  const container = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  }

  return (
    <motion.footer initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={container} className="border-t border-slate-200 mt-12 bg-white">
      <div className="container py-6 flex items-center justify-between">
        <motion.div variants={item} className="text-sm flex items-center gap-3 text-slate-500">
          <span>© {new Date().getFullYear()} — All rights reserved.</span>
          <span aria-hidden className="h-4 w-px bg-slate-200" />
          <span className="font-merri text-sm font-medium text-slate-700">Shreyaa</span>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4">
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600"><LinkedInIcon className="w-4 h-4" /> <span className="hidden sm:inline">LinkedIn</span></a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-primary-600"><MailIcon className="w-4 h-4" /> <span className="hidden sm:inline">Email</span></a>
          )}
        </motion.div>
      </div>
    </motion.footer>
  )
}
