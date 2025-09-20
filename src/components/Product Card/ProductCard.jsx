import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import '../../assets/css/product-swiper.css'

function ProductCard(
  {
    productImage,
    productName,
    productDesc,
    sellingPrice,
    mrp,
    cardClass ="",
    imgClass = "",
    productNameClass = "",
    productDescClass = "",
    sellingPriceClass = "",
    mrpClass = ""
  }
) {
  return (
    <div className={`bg-gray-100 w-80 h-auto  rounded-lg shadow-md transform transition-transform hover:scale-102 ${cardClass}`}>
      <div className={` aspect-w-1 aspect-h-1 overflow-hidden ${imgClass}`}>
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation
          effect="fade"
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          className="product-swiper w-full h-full rounded-t-lg"
        >
          {Array.isArray(productImage) && productImage.map((img, index) => (
            <SwiperSlide
              key={index}>
              <img
                className={`w-80 h-90 object-cover object-center `}
                src={img}
                alt={productName}
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      <div className='flex w-80 flex-col gap-2 p-4'>
        <h1 className={`text-sm flex flex-wrap w-70 md:w-50 lg:w-60 xl:w-auto  sm:text-base md:text-lg font-medium line-clamp-2 ${productNameClass}`}>{productName}</h1>
        <p className={`text-md lg:text-lg text-gray-600 line-clamp-2 truncate w-48  lg:w-55 ${productDescClass}`}>{productDesc}</p>
        <div className='flex items-center gap-3'>
          <span className={` text-md lg:text-2xl font-semibold text-teal-900  ${sellingPriceClass}`}>{sellingPrice}</span>
          <span className={`text-md line-through text-gray-500 ${mrpClass}`}>{mrp}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard