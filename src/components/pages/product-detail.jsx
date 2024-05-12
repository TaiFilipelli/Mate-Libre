import { useEffect, useState } from 'react'
import { getProduct } from '../services/products';
import { Button } from 'keep-react';
import { useParams } from 'wouter';
import ProductDetailSkeleton from '../skeletons/product-detail-skeleton'

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getProduct(id).then((data)=>{setProduct(data); setLoading(false)});
  },[id]);

  if(loading){
    return <ProductDetailSkeleton/>;
  }

  return (
    <main className='flex items-center justify-center h-screen'>
    <section className='text-slate-950 bg-white  flex flex-col justify-center items-center p-11 rounded-md'>
      <h1 className='text-3xl mb-8 font-black'>Detalles del producto:</h1>
      {product.pictures && product.pictures[0].url &&(
        <img src={product.pictures[0].url} alt="Product image" className='w-64 mb-4'/>
      )}
      <h1 className='text-xl font-bold mb-3'>{product.title}</h1>
      <h2 className='font-semibold'>${product.price}</h2>
      <p>{product.warranty}</p>
      <a href="/products"><Button className='bg-gradient-to-r from-cyan-300 to-fuchsia-600 mt-6'>Volver atrás</Button></a>
    </section>
    </main>
  )
}

export default ProductDetail
