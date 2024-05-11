import { Button } from "keep-react"
import { MagnifyingGlass } from "phosphor-react"

const ProductCard = () => {
  return (
    <section className='border'>
      <Button color="secondary" size="md">
        Buscar
        <MagnifyingGlass size={20} className='ml-1.5'/>
      </Button>
    </section>
  )
}

export default ProductCard
