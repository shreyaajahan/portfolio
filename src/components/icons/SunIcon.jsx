import React from 'react'

export default function SunIcon({className='w-5 h-5', ...props}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 6.636L5.636 5.222m12.728 0l-1.414 1.414M7.05 17.364l-1.414 1.414M12 7a5 5 0 100 10 5 5 0 000-10z" />
    </svg>
  )
}
