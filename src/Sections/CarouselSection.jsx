import Carousel from '../Components/Carousel/Carousel'
import { images } from "../utils/Consts"

const CarouselSection = () =>
{
  return (
    <section className='container'>
      <h2>Gallery</h2>
      <Carousel images={images} />
    </section>
  )
}

export default CarouselSection