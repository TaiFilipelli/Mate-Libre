
const ProductCard = ({producto}) => {

  return (
    <section className='w-50% text-white h-48'>
      <h1>Datos producto</h1>
      <h1 className='h-4'>{producto.title}</h1>
      <h2>${producto.price}</h2>
      <h4>{producto.description}</h4>
      <a href={`/products/${producto.id}`}>Ver más</a>
    </section>
  )
}

export default ProductCard;
