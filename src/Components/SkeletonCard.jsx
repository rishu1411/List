import React from 'react'
import Skeleton from 'react-loading-skeleton'

function SkeletonCard() {
  return (
      <div className='border-b p-4 card space-x-4'>
          <Skeleton circle height={90} width={90} borderRadius={100} className='' />
          <div className='space-y-1'>
              <h4><Skeleton height={40} /></h4>
              <p><Skeleton height={20}/></p>
              <p><Skeleton height={20}/></p>
              
          </div>
         
              
              
        
          </div>
  )
}

export default SkeletonCard