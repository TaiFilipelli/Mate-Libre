import { useEffect, useState } from 'react'
import { getProduct } from '../services/products';
import { Button } from 'keep-react';
import { useParams } from 'wouter';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

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
      }, 800);
    });
  },[id]);

  return (
    <main className='flex items-center justify-center h-screen'>
    <section className='text-slate-950 bg-white  flex flex-col justify-center items-center p-11 rounded-md'>
      <h1 className='text-3xl mb-8 font-black'>Detalles del producto:</h1>
      {loading ? <Skeleton height={250} width={250}/> : product?.pictures && product.pictures[0].url &&(
        <img src={product.pictures[0].url} alt="Product image" className='w-64 mb-4 max-h-96'/>
      )}
      <h1 className='text-xl font-bold mb-3'>{loading ? (<Skeleton width={300} />) : product?.title}</h1>
      <h2 className='font-semibold text-lg mb-3'>{loading? (<Skeleton width={100}/>) : `$${product.price}`}</h2>
      <h3 className='font-semibold text-base mb-6'>{loading ? <Skeleton width={200}/> : product.warranty? product.warranty:"No hay detalles de garantia."}</h3>
      <ul className='font-bold text-lg'>
          {loading ? Array(4).fill(<Skeleton width={300} />) : (
            product.attributes.slice(0, 4).map((attribute, index) => (
              <li key={index}>
                <strong>{attribute.name}:</strong> {attribute.value_name}
              </li>
            ))
          )}
        </ul>
      <a href="/products"><Button className='bg-gradient-to-r from-cyan-300 to-fuchsia-600 mt-6 '>Volver atrás</Button></a>
    </section>
    </main>
  )
}

export default ProductDetail
