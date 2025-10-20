import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Zoom } from 'swiper/modules'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../../features/productToCart'
import { ToastContainer, toast } from 'react-toastify'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'
import '../../assets/css/single-product-swiper.css'


function ProductDetail({
    productId,
    productImage1,
    productImage2,
    productImage3,
    productTitle,
    sellingPrice,
    productType,
    categorySlug,
    description,
    imgClass = "",
    productNameClass = "",
    productParaClass = "",
    productDetailClass = "",
    productDescClass = "",
    sellingPriceClass = "",
}) {

    const [quantity, setQuantity] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productSize, setProductSize] = useState([]);
    const images = [productImage1, productImage2, productImage3].filter(Boolean);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (productType === "Clothes") {
            setProductSize(['S', 'M', 'L', 'XL']);
        } else if (productType === "Shoes") {
            setProductSize([5, 6, 7, 8, 9, 10, 11, 12]);
        } else if (productType === "Furniture") {
            setProductSize(["Normal"]);
        } else if (productType === "Electronics") {
            setProductSize([""]);
        }
    }, [productType])

    const btnTimeout = () => {
        setTimeout(() => {
            navigate('/checkout')
        }, 500);
    }

    const decQutantityHandler = () => {
        quantity > 1;
        setQuantity(prev => prev - 1);
    }

    const incQutantityHandler = () => {
        quantity >= 1;
        setQuantity(prev => prev + 1);
    }

    const notify = () => toast("Added to cart!", { type: "success" });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className='w-full py-6 sm:py-8 lg:py-12'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Product Images */}
                    <div className='w-full lg:w-1/2'>
                        <div className='bg-gray-100 p-4 rounded-lg'>
                            {/* Main Swiper */}
                            <Swiper
                                modules={[Navigation, Thumbs, Zoom]}
                                navigation
                                thumbs={{ swiper: thumbsSwiper }}
                                zoom={true}
                                className={`single-product-swiper h-[300px] sm:h-[400px] md:h-[500px] rounded-lg ${imgClass}`}>
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiper-zoom-container h-full">
                                            <img
                                                src={img}
                                                alt={`Product view ${index + 1}`}
                                                className="w-full h-full object-contain"
                                                loading='lazy'
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Thumbs Swiper */}
                            <Swiper
                                modules={[Thumbs]}
                                watchSlidesProgress
                                onSwiper={setThumbsSwiper}
                                slidesPerView={3}
                                breakpoints={{
                                    640: { slidesPerView: 4 },
                                    768: { slidesPerView: 4 },
                                }}
                                spaceBetween={10}
                                className="single-product-swiper mt-4 h-[80px] sm:h-[100px]"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover cursor-pointer rounded-md"
                                            loading='lazy'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className='w-full lg:w-1/2 space-y-6'>
                        <div className="space-y-4">
                            <h1 className={`text-2xl  sm:text-3xl lg:text-4xl font-bold ${productNameClass}`}>{productTitle}</h1>
                            <div className="flex items-center justify-between">
                                <span className={`text-xl sm:text-2xl text-teal-900 font-semibold ${sellingPriceClass}`}>${sellingPrice}</span>
                                <span className="text-gray-500">⭐⭐⭐⭐</span>
                            </div>
                            <p className={`text-gray-700 text-sm sm:text-base ${productParaClass}`}>{productType}</p>
                        </div>

                        {/* Size Selection */}
                        {
                            productType === "Electronics" || productType === "" ? null :
                                (
                                    <div className="space-y-3">
                                        <h2 className="font-semibold text-lg">Size</h2>
                                        <div className='flex flex-wrap gap-3'>
                                            {productSize.map(size => (
                                                <button

                                                    key={size}
                                                    className="px-4 py-2 border rounded-md hover:border-teal-600 hover:text-teal-600 transition-colors">
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )
                        }

                        {/* Quantity and Buttons */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h2 className="font-semibold text-lg">Quantity</h2>
                                <div className='inline-flex items-center border border-gray-300 rounded-md'>
                                    <button
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                                        onClick={decQutantityHandler}
                                    >
                                        -
                                    </button>
                                    <span className="px-5 py-2 border-x">{quantity}</span>
                                    <button
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                                        onClick={incQutantityHandler}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => dispatch(addProduct({
                                        id: { productId },
                                        image: { productImage1 },
                                        name: { productTitle },
                                        qty: { quantity },
                                        price: { sellingPrice }
                                    })) && notify()}
                                    className="flex-1 cursor-pointer bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition-colors">
                                    Add to Cart
                                </button>
                                <ToastContainer
                                    role='status'
                                    position='top-center'
                                    autoClose={1000}
                                    pauseOnHover={false}
                                    hideProgressBar={true}
                                    toastStyle={{
                                        backgroundColor: '#FFF8E1',
                                        color: '#065f46',
                                        border: '1px solid teal',
                                    }}
                                />
                                <button
                                    onClick={() => dispatch(addProduct({
                                        id: { productId },
                                        image: { productImage1 },
                                        name: { productTitle },
                                        qty: { quantity },
                                        price: { sellingPrice }
                                    })) && btnTimeout()}
                                    className="flex-1 cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                                    Buy Now
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="border-t border-gray-200 pt-10 ">
                                <ul className="grid grid-cols-1 gap-4 text-sm lg:w-1/4 w-2/4">
                                    <li className='flex justify-between'>
                                        <span className="text-gray-500">SKU :</span>
                                        <span className={`font-medium ${productDetailClass}`}>{productId}</span>
                                    </li>
                                    <li className='flex justify-between w-full'>
                                        <span className="text-gray-500">Category :</span>
                                        <span className={`font-medium w-4 ${productDetailClass}`}>{productType}</span>
                                    </li>
                                    <li className='flex justify-between'>
                                        <span className="text-gray-500">Tags :</span>
                                        <span className={`font-medium w-4 ${productDetailClass}`}>{categorySlug}</span>
                                    </li>
                                    <li className='flex justify-between'>
                                        <span className="text-gray-500">Share :</span>
                                        <span className={`font-medium  w-4 ${productDetailClass}`}>NA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description */}
            <div className="border-t border-gray-200 py-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <div className=" max-w-none">
                    <p className={`text-gray-700 ${productDescClass}`}>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
