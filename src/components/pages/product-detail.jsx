import React from 'react'

const ProductDetail = ({producto}) => {
  return (
    <section className='text-white flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>Detalles del producto:</h1>
      <img src={producto.pictures[0].url} alt="Product image" />
      <h1>{producto.title}</h1>
      <h2>${producto.price}</h2>
      <p>Garantia:{producto.warranty}</p>
    </section>
  )
}

export default ProductDetail
