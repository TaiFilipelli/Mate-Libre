
const Landing = () => {
  return (
    <main className='max-w-full '>
        <section className='text-white h-screen flex flex-col justify-center items-center'>
            <img src="/public/logoMate.png" alt="Logo Mate" className='h-40 object-cover bg-gradient-to-r from-cyan-300 to-fuchsia-600 p-5 rounded-2xl'/>
            <h1 className='text-5xl font-bold p-8'>Bienvenido a Mate Libre!</h1>
            <h3 className='text-xl'>El hogar de todo argentino...y con mate incluido!</h3>
            <a href="/products" className='bg-gradient-to-r from-cyan-300 to-fuchsia-600 rounded-md w-60 p-5 font-bold my-9'>Poné el agua!</a>
        </section>
    </main>
  )
}

export default Landing;
