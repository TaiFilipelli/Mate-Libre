import { useState } from 'react'
import { Drawer, Button } from 'keep-react'
import { Info } from 'phosphor-react';

const DrawerMoreInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>  
        <Button onClick={()=> setIsOpen(!isOpen)} className='w-48 bg-slate-500 hover:bg-slate-400'>About Us<Info size={20}/></Button>

        <Drawer position='right' isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            <Drawer.Content className='flex items-center justify-center bg-slate-800 text-white'>
                <div className='mx-4'>
                    <h1 className='text-4xl'>Esto es MateLibre!</h1> <br />
                    <p className='text-xl'>MateLibre es un proyecto personal que busca emular una página de despliegue de productos usando
                    la API de Mercado Libre. La idea es crear una aplicación simple, fluida y sencilla que permita al usuario buscar productos
                    mediante una barra de búsqueda y ver detalles del producto que desee. </p>
                    <br />  <br />
                    <h2 className='text-2xl mb-3'>Caracteristicas:</h2>
                    <ul className="list-disc">
                        <li className="text-body-3">Barra de búsqueda de productos en tiempo real</li>
                        <li className="text-body-3">Despliegue de información detallada del producto elegido</li>
                        <li className="text-body-3">Animaciones fluidas y ordenadas</li>
                        <li className="text-body-3">Implementación de nuevas tecnologías</li>
                    </ul>
                </div>
            </Drawer.Content>
        </Drawer>
    </>
  )
}
export default DrawerMoreInfo;
