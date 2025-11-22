import React from 'react'

export default function LinkedInIcon({className='w-4 h-4', ...props}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.94v5.668H9.349V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.268 2.37 4.268 5.455v6.285zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM6.814 20.452H3.861V9h2.953v11.452z"/>
    </svg>
  )
}
