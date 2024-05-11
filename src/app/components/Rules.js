import { CornerDownRight } from 'lucide-react'
import React from 'react'

const Rules = () => {
  return (
    <div className='flex flex-col gap-2 items-start'>
     <span className='text-right font-semibold'> Reglerne er simple: </span>
      <div className='flex gap-2'>
        <CornerDownRight/>
        <span className='text-left'>
        Hvert minut ringer klokken, hvorefter i skåler i et shot øl. 
        </span>
      </div>
      <div className='flex gap-2'>
        <CornerDownRight/>
        <span className='text-left'>
        Når man ikke at drikke indenfor minuttet, får man et staf shot.
        </span>
      </div>
      <div className='flex gap-2'>
        <CornerDownRight/>
        <span className='text-left' >
        Indstil hvor mange runder du gerne vil spille for at starte. 
        </span>
      </div>
    </div>
  )
}

export default Rules