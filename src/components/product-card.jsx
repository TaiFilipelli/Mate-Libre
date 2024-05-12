
const ProductCard = ({producto}) => {

  return (
      <section className='h-64 text-white bg-slate-800 rounded-lg flex flex-col justify-between p-2'>
        <h1 className='text-lg font-semibold'>{producto.title}</h1>
        <div className="flex items-center justify-between">
          <h2 className="text-sm">${producto.price}</h2>
          <a href={`/products/${producto.id}`} className='text-slate-100 hover:underline'>Ver más</a>
        </div>
      </section>
  )
}

export default ProductCard;
