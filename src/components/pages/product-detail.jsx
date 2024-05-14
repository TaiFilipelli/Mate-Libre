import { useEffect, useState } from 'react'
import { getProduct } from '../services/products';
import { Button } from 'keep-react';
import { useParams } from 'wouter';
import Skeleton from 'react-loading-skeleton';
import { Fade } from 'react-awesome-reveal';

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    getProduct(id).then((data)=>{
      setTimeout(() => {
        setProduct(data);
        setLoading(false);
      }, 500);
    });
  },[id]);

  return (
    <main className='flex items-center justify-center h-screen'>
    <section className='text-slate-950 bg-white  flex flex-col justify-center items-center p-11 rounded-md'>
      <h1 className='text-3xl mb-8 font-black'>Detalles del producto:</h1>
      {loading ? <Skeleton height={200} width={200}/> : product?.pictures && product.pictures[0].url &&(
        <img src={product.pictures[0].url} alt="Product image" className='w-64 mb-4'/>
      )}
      <h1 className='text-xl font-bold mb-3'>{loading? <Skeleton baseColor='#575757' highlightColor='#444' width={300}/>:product?.title}</h1>
      <h2 className='font-semibold'>{loading? <Skeleton baseColor='#575757' highlightColor='#444' width={100}/> : `$${product.price}`}</h2>
      <p>{loading ?  <Skeleton width={300}/> : product.warranty}</p>
      <a href="/products"><Button className='bg-gradient-to-r from-cyan-300 to-fuchsia-600 mt-6'>Volver atrás</Button></a>
    </section>
    </main>
  )
}

export default ProductDetail
