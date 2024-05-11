import { Button } from "keep-react"
import { MagnifyingGlass } from "phosphor-react"


const ProductCard = () => {

  return (
    <section className='w-50%'>

      <Button color="secondary" size="md">
        Buscar
        <MagnifyingGlass size={20} className='ml-1.5'/>
      </Button>

    </section>
  )
}

export default ProductCard
