import { useState, useEffect } from 'react'
import { useGetProductsQuery } from '../api/productsApi'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import FooterStripe from '../components/FooterStripe/FooterStripe'
import { useSelector } from 'react-redux'

function CategoryProducts() {
    const { data: products, isLoading, error, isError } = useGetProductsQuery()
    const [filteredProducts, setFilteredProducts] = useState([])
    const [priceToggle, setPriceToggle] = useState(1)
    const items = useSelector(state => state.category)


    useEffect(() => {
        if (!products) {
            setFilteredProducts([]);
            return;
        }

        let updatedProducts = products;

        if (items.category === "All") {
            setFilteredProducts(products);
        } else if (items.category === "Clothes") {
            updatedProducts = updatedProducts.filter((product) => product.category.name === "Clothes");
        } else if (items.category === "Shoes") {
            updatedProducts = updatedProducts.filter((product) => product.category.name === "Shoes");
        } else if (items.category === "Electronics") {
            updatedProducts = updatedProducts.filter((product) => product.category.name === "Electronics");
        }

        if (priceToggle === 2) {
            updatedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);
        } else if (priceToggle === 0) {
            updatedProducts = [...updatedProducts].sort((a, b) => a.price - b.price);
        }

        setFilteredProducts(updatedProducts);

    }, [products, priceToggle, items.category]);


    return (
        <>
            <Breadcrumb
                toRoute='/products'
                pageName='Shop'
            />

            {/* Filter */}
            <div className='w-full bg-amber-50 h-20 flex gap-2 sm:text-center justify-between items-center px-5 md:px-10'>

                <div className='flex items-center flex-wrap  gap-3'>
                    <label
                        htmlFor="priceFilter"
                        className='font-medium'>Price range:
                    </label>
                    <div className='flex items-center gap-2 text-sm'>
                        <span>Low</span>
                        <input
                            className='w-10'
                            value={priceToggle}
                            onChange={(e) => {
                                setPriceToggle(e.target.valueAsNumber);
                            }}
                            type="range"
                            id='price'
                            name='price'
                            min="0"
                            step="1"
                            max="2"
                        />
                        <span>High</span>
                    </div>
                </div>

            </div>

            <div className='sm:grid flex justify-center items-center flex-col sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 mx-'>

                {
                    isError && (
                        <div className="text-red-500">Something went wrong: {error.error}</div>
                    )
                }
                {
                    isLoading || isError ?
                        Array.from({ length: 10 }).map((_, index) =>
                            <ProductCard
                                key={index}
                                productName=""
                                productDesc=""
                                sellingPrice=""
                                mrp=""
                                cardClass='flex flex-col justify-center items-center '
                                imgClass="  w-75 h-75 md:w-80 md:h-80 bg-gray-500 animate-pulse rounded-t-lg"
                                productNameClass="w-auto h-6 bg-gray-300 animate-pulse rounded"
                                productDescClass="w-auto h-4 bg-gray-300 animate-pulse rounded"
                                sellingPriceClass="w-30 h-8 bg-gray-300 animate-pulse rounded text-none"
                                mrpClass="w-auto h-4 bg-gray-300 animate-pulse rounded"
                            />
                        )
                        :
                        filteredProducts?.map((product) =>
                            <Link
                                to={`/products/slug/${product.slug}`}
                                key={product.id}
                            >
                                <ProductCard
                                    key={product.id}
                                    productImage={product.images}
                                    productName={product.title}
                                    productDesc={product.description}
                                    sellingPrice={`$${product.price.toFixed(2)}`}
                                />
                            </Link>
                        )
                }
            </div>
            <FooterStripe />
        </>
    )
}

export default CategoryProducts