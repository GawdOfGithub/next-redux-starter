'use client'
import React from 'react'
import Loader from './components/Loader'
const loading = () => {
  return (
    <>
    <div className="z-10 absolute">
     <Loader/>
     </div>
    </>
     )
}

export default loading