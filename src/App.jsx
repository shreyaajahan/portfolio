import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import ResumeCards from './sections/ResumeCards'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import data from './data/site'

export default function App(){
  return (
    <div className={`min-h-screen transition-colors duration-500 bg-white text-slate-900`}>
      <Header nav={data.nav} />
      <main className="container py-16">
        <Hero data={data.hero} />
        <About about={data.about} />
        <Projects items={data.projects} />
        <Skills items={data.skills} />
        <ResumeCards data={data.resume} />
        <Contact contact={data.contact} />
      </main>
      <Footer contact={data.contact} />
    </div>
  )
}
