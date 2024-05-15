import { useState } from "react";
import ProductCard from "../product-card";
import { Button } from "keep-react"
import { MagnifyingGlass } from "phosphor-react"
import { getProducts } from "../services/products";
import { Fade } from "react-awesome-reveal";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productos, setProductos] = useState([]);
  const [loading, setLoading]=useState(false);

  const handleSearch= async () =>{
    setLoading(true);
    try {
      const data= await getProducts(searchTerm);
      setTimeout(()=>{
        setProductos(data);
        setLoading(false);
      },500);
    } catch (error) {
      console.error("Se produjo un error buscando productos:",error);
      setLoading(false);
    };
  };

  return (
    <main>
      <section className='text-white h-screen flex flex-col justify-center items-center'>
      <Fade cascade>
        <h2 className='text-3xl mb-4'>Busca el producto que desees en la barra! </h2> 
        <form onSubmit={(e)=>{e.preventDefault(); handleSearch();}} className='items-center flex justify-center'>
          <input type="search" placeholder="Buscar..." className='bg-slate-700 w-60 h-10 rounded-md text-center mb-4 mr-4 mt-4' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} /> 
          <Button size='sm' className='bg-gradient-to-r from-cyan-300 to-fuchsia-600'>Buscar<MagnifyingGlass size={20} className='ml-1.5'/></Button>
        </form>
        <a href="/" className='mb-12 hover:underline'>Volver al inicio</a>
      </Fade>
        <div className="max-w-screen-lg max-h-32 mx-auto p-4 flex flex-wrap justify-center my-11">
        {loading ? Array(10).fill(<Skeleton height={300} width={150} className='m-5'/>) : productos.map((producto)=>(
            <ProductCard key={producto?.id} producto={producto}/>
        ))}
        </div>
      </section>
    </main>
  )
}

export default ProductList;
