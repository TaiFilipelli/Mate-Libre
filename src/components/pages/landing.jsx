import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
const Landing = () => {
  const [showLogo, setShowLogo]=useState(false);

  const spring = useSpring({
    opacity:showLogo? 1:0,
  });

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    return () => clearTimeout(timeout);
  })

  return (
    <main className='max-w-full h-screen bg-gradient-to-b from-slate-950 to{#432061} animate-gradient'>
        <section className='text-white h-screen flex flex-col justify-center'>
          <div className='left-auto' >
            <animated.div style={spring}>
            <img src="/public/logoMate.png" alt="Logo Mate" className='h-48 bg-gradient-to-r from-cyan-300 to-fuchsia-600 rounded-md p-6'/>
            <h1 className='text-6xl font-bold p-8 px-0 pb-5'>Bienvenido a Mate Libre </h1>
            <h3 className='text-2xl mb-14'>El hogar de todo argentino...y con mate incluido!</h3>
            <a href="/products" className='bg-gradient-to-r from-cyan-300 to-fuchsia-600 rounded-md w-60 p-5 font-bold px-16'>Poné el agua!</a>
            </animated.div>
          </div>
        </section>
    </main>
  )
}
export default Landing;