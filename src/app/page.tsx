import { ModeToggle } from '@/components/ToggleMode'
import React from 'react'

const page = () => {
  return (
    <div className='flex min-h-screen flex-1 flex-col items-center justify-center'>
      <h1>Dark Mode setup</h1>
      <ModeToggle />
    </div>
  )
}

export default page