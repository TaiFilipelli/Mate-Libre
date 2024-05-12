import { useEffect, useState } from 'react'
import { getProduct } from '../services/products';
import { Button } from 'keep-react';
import { useParams } from 'wouter';

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    getProduct(id).then((data)=>setProduct(data));
  },[id]);

  return (
    <section className='text-white bg-gradient-to-r from-cyan-300 to-fuchsia-600 flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>Detalles del producto:</h1>
      {product.pictures && product.pictures[0].url &&(
        <img src={product.pictures[0].url} alt="Product image" className='w-64 h-64'/>
      )}
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <p>{product.warranty}</p>
      <a href="/products"><Button color='primary'>Volver atrás</Button></a>
    </section>
  )
}

export default ProductDetail
