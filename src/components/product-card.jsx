import Skeleton from "react-loading-skeleton";
const ProductCard = ({producto}) => {
  const title=producto.title;
  const maxLength=40;

  const limitedTitle= title.length > maxLength ? title.substring(0,maxLength) + '...' : title;

  return (
      <section className='w-40 h-90 text-slate-950 bg-white rounded-lg flex flex-col justify-between items-center p-3 ml-7 mb-16'>
        <h1 className='font-semibold text-s text-center'>{limitedTitle||<Skeleton/>}</h1>
        <img src={producto.thumbnail || <Skeleton/>} alt="Product" className="w-64 object-cover"></img>
        <h2 className='text-base'>${producto.price||<Skeleton/>}</h2>
        <a href={`/products/${producto.id}`} className='text-slate-950 hover:underline my-1.5'>Ver más</a>
      </section>
  );
};
export default ProductCard;
