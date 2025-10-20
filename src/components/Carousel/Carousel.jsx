import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { useMemo } from 'react'

const images = useMemo(() => [
  "https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828620.jpg?t=st=1755783923~exp=1755787523~hmac=ef510ff942d90b39abfad46d7090ff7f6a4c6d650cf22869089f38bbeeab5777&w=1060",
  "https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478984.jpg?t=st=1755784039~exp=1755787639~hmac=7fecf7905dc1cde777a2c6213ccab0baceaf4d077db5a8bd283ed534b1f241ca&w=1060",
  "https://img.freepik.com/free-photo/pair-brown-leather-boots_1150-6005.jpg?t=st=1755784108~exp=1755787708~hmac=0d17bc4ad68af7ce82ef826dd04e56286445fac2d614c24cfee48f4082f01728&w=1060",
  "https://img.freepik.com/free-photo/man-grey-sweatshirt-black-pants_23-2151982086.jpg?t=st=1755784322~exp=1755787922~hmac=be8ff3d5d2b600bc2379e3c387555ec522ceddc54c66f7dbbfc851c2096ddf89&w=1060"
])

function Carousel() {

  const navigate = useNavigate()

  return (
    <section className='bg-amber-50 min-h-[80vh] w-full flex justify-center items-center lg:justify-between flex-col lg:flex-row gap-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-16'>
      {/* Left Content */}
      <div className='w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 animate-fadeIn'>
        <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left leading-tight'>
          Discover Our <span className='text-teal-800'>Featured</span> Collection
        </h1>
        <p className='text-lg text-gray-600 max-w-md text-center lg:text-left'>
          Explore our curated selection of premium products designed for your lifestyle.
        </p>
        <button
          onClick={() => navigate('/products')}
          className='group cursor-pointer relative overflow-hidden rounded-lg bg-gray-900 px-8 py-4 transition-all duration-300 ease-out hover:bg-teal-800'>
          <span className='relative z-10 text-white text-lg font-semibold'>
            Shop Now
          </span>
          <span className='absolute inset-0 h-full w-0 bg-teal-700 transition-all duration-300 ease-out group-hover:w-full'></span>
        </button>
      </div>

      {/* Right Carousel */}
      <div className='w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px]'>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className='w-full h-full rounded-xl shadow-2xl'
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className='relative w-full h-full'>
              <img
                src={src}
                alt={`Featured Product ${index + 1}`}
                className='absolute inset-0 w-full h-full object-cover object-center rounded-xl transition-transform duration-300'
                loading="lazy"
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl'></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Carousel
