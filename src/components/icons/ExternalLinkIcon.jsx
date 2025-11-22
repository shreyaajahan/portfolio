import React from 'react'

export default function ExternalLinkIcon({className='w-4 h-4', ...props}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7m0 0L10 14m11-11L10 14" />
    </svg>
  )
}
