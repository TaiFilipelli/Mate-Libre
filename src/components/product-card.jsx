
const ProductCard = ({producto}) => {

  return (
      <section className='h-64 text-slate-50 bg-slate-900 rounded-lg flex flex-col justify-between p-2'>
        <h1 className='font-semibold text-s'>{producto.title}</h1>
        <img src={producto.thumbnail}></img>
        <h2 className="text-sm">${producto.price}</h2>
        <a href={`/products/${producto.id}`} className='text-slate-50 hover:underline'>Ver más</a>
      </section>
  )
}

export default ProductCard;
