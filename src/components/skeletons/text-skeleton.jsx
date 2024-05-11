import { Skeleton } from 'keep-react';
import React from 'react'

const TextSkeleton = () => {
  return (
    <Skeleton>
        <Skeleton.Line className='h-40 w-full'/>
        <Skeleton.Line className='h-40 w-full'/>
        <Skeleton.Line className='h-40 w-3/5'/>
    </Skeleton>
  )
}

export default TextSkeleton;
