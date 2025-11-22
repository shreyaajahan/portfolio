import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Hero({data}){
  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // subtle transforms for parallax layers
  const bgX = useTransform(x, v => `${v / 20}px`)
  const bgY = useTransform(y, v => `${v / 30}px`)
  // note: image removed; keep bg transforms for subtle parallax

  function handleMove(e){
    const rect = containerRef.current?.getBoundingClientRect()
    if(!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const nx = e.clientX - cx
    const ny = e.clientY - cy
    x.set(nx)
    y.set(ny)
  }

  const heading = { hidden:{ y: 12, opacity:0 }, visible:{ y:0, opacity:1, transition:{ duration:0.6 } } }
  const nameVariant = { hidden: { scale: 0.96, y: 8, opacity: 0 }, visible: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } } }

  return (
    <motion.section id="home" ref={containerRef} onMouseMove={handleMove} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative overflow-hidden py-20">
      {/* Parallax background */}
      <motion.div style={{ x: bgX, y: bgY }} className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70 -z-10 transform-gpu" />
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 variants={heading} className="text-5xl md:text-7xl font-extrabold leading-tight">
          <motion.span variants={nameVariant} className="font-playfair text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-rose-500 tracking-tight">{data.name}</motion.span>
        </motion.h1>
        <motion.p variants={heading} transition={{delay:0.06}} className="mt-4 text-lg md:text-xl text-slate-600">B.TECH-IT</motion.p>

        <motion.div variants={heading} transition={{delay:0.12}} className="mt-8 flex justify-center gap-4">
          {data.ctas.map((c,i)=> (
            <a key={i} href={c.href} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-500 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500">{c.label}</a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
