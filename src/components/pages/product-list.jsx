import { useState } from "react";
import ProductCard from "../product-card";
import ProductSkeleton from '../skeletons/product-skeleton'
import { Button } from "keep-react"
import { MagnifyingGlass } from "phosphor-react"
import { getProducts } from "../services/products";
const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productos, setProductos] = useState([]);

  const handleSearch= async () =>{
    try {
      const data= await getProducts(searchTerm);
      setProductos(data);
    } catch (error) {
      throw console.error("Se produjo un error buscando productos:",error)
    };
  };

  return (
    <main>
      <section className='text-white h-screen flex flex-col justify-center items-center'>
        <h2 className='text-3xl mb-4'>Busca el producto que desees en la barra! </h2> 
        <form onSubmit={(e)=>{e.preventDefault(); handleSearch();}} className='items-center flex justify-center'>
          <input type="search" placeholder="Buscar..." className='bg-slate-700 w-60 h-10 rounded-md text-center mb-4 mr-4 mt-4' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} /> 
          <Button size='sm' className='bg-gradient-to-r from-cyan-300 to-fuchsia-600'>Buscar<MagnifyingGlass size={20} className='ml-1.5'/></Button>
        </form>
        <a href="/" className="">Volver al inicio</a>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex justify-center">
        {productos.map((producto)=>(
            <ProductCard key={producto?.id} fallback={<ProductSkeleton />} producto={producto}/>
        ))}
        </div>
      </section>
    </main>
  )
}

export default ProductList;
