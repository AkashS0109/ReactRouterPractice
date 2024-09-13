import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
  const {userid} =useParams()
  return (
    <div className='flex justify-center text-3xl bg-cyan-700 '>
       user:{userid}
    </div>
  )
}

export default user
