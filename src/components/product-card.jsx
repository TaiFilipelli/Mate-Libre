import Skeleton from "react-loading-skeleton";
const ProductCard = ({producto}) => {

  return (
      <section className='h-80 w-auto text-slate-50 bg-slate-900 rounded-lg flex flex-col justify-between p-2 ml-7'>
        <h1 className='font-semibold text-s'>{producto.title||<Skeleton/>}</h1>
        <img src={producto.thumbnail || <Skeleton/>} alt="Product"></img>
        <h2 className="text-sm">${producto.price||<Skeleton/>}</h2>
        <a href={`/products/${producto.id}`} className='text-slate-50 hover:underline'>Ver más</a>
      </section>
  )
}

export default ProductCard;
