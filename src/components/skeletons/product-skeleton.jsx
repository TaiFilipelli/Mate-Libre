import React from 'react'
import { Skeleton } from 'keep-react'

const ProductSkeleton = () => {
  return (
    <Skeleton className='w-full space-y-2.5 xl:max-w-md'>
        <Skeleton.Line className='h-52 w-full'/>
    </Skeleton>
  )
}

export default ProductSkeleton
