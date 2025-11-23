import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function NavLink({href, children, onClick}){
  return (
    <a href={href} onClick={onClick} className="text-sm md:text-base font-semibold tracking-wide px-3 py-2 rounded-md hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500">{children}</a>
  )
}

export default function Header({nav}){
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    function onKey(e){
      if(e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[])

  const variants = {
    hidden: { y: -12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <motion.header initial="hidden" animate="visible" variants={variants} className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="container flex items-center justify-between h-20">
        <a href="#home" aria-label="Go to homepage" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">SJ</span>
          <span className="text-2xl md:text-3xl font-extrabold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 tracking-tight leading-none">Shreyaa J</span>
        </a>
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-2">
          {nav.map(item=> (
            <NavLink key={item.id} href={`#${item.id}`}>{item.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label={open ? 'Close mobile menu' : 'Open mobile menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="md:hidden px-3 py-2 rounded-md hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500">{open ? '✕' : '☰'}</button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.22}} className="md:hidden bg-white border-b border-slate-200">
            <div className="container py-4">
              <div className="flex flex-col gap-2">
                {nav.map(item=> (
                  <a key={item.id} href={`#${item.id}`} onClick={()=>setOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium hover:bg-primary-50">{item.label}</a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

    </motion.header>
  )
}
