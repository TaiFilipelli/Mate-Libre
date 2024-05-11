import ProductCard from "../product-card";
import ProductSkeleton from '../skeletons/product-skeleton'
const ProductList = () => {
  return (
    <main className='bg-gradient-to-r from-cyan-300 to-fuchsia-600'>
      <section className="">
        <h1 className='text-white'>Esto será una lista de productos</h1>  
        <ProductCard/>
      </section>
    </main>
  )
}

export default ProductList;
