import React from 'react'

export default function MailIcon({className='w-4 h-4', ...props}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10z" />
    </svg>
  )
}
