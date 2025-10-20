import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useGetProductsPagedQuery } from '../api/productsApi'
import ProductCard from '../components/ProductCard/ProductCard'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import FooterStripe from '../components/FooterStripe/FooterStripe'

function Shop() {

  const limit = 16
  const [page, setPage] = useState(1)

  const scrollTopOnClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const { data: products, isLoading, error, isError } = useGetProductsPagedQuery(page, limit)

  // previous Page
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
      scrollTopOnClick();
    }
    else {
      setPage(1)
    }
  }
  // next Page
  const handleNextPage = () => {
    page >= 1 && setPage(prevPage => prevPage + 1)

    if (page >= 4) {
      setPage(4)
    }
    scrollTopOnClick();
  }

  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [priceToggle, setPriceToggle] = useState(1);

  useEffect(() => {
    if (!products) {
      setFilterProducts([]);
      return;
    }

    let updatedProducts = [...products];

    if (selectedFilter === "clothesFilter") {
      updatedProducts = updatedProducts.filter((product) => product.category.name === "Clothes");
    } else if (selectedFilter === "shoesFilter") {
      updatedProducts = updatedProducts.filter((product) => product.category.name === "Shoes");
    } else if (selectedFilter === "electronicsFilter") {
      updatedProducts = updatedProducts.filter((product) => product.category.name === "Electronics");
    } else if (selectedFilter === "furnitureFilter") {
      updatedProducts = updatedProducts.filter((product) => product.category.name === "Furniture");
    }


    if (priceToggle === 2) {
      updatedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);
    } else if (priceToggle === 0) {
      updatedProducts = [...updatedProducts].sort((a, b) => a.price - b.price);
    }

    setFilterProducts(updatedProducts);

  }, [products, selectedFilter, priceToggle]);

  const handleSelectChange = (value) => {
    setSelectedFilter(value);

  };

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
            className='font-medium'>Price range:</label>
          <div className='flex items-center gap-2 text-sm'>
            <span name='price' >Low</span>
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

        <div>
          <label htmlFor='filter' className='font-medium'>Category :</label>
          <select
            id="filter"
            className='ml-4 border-2 border-green-600 rounded p-1'
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="clothesFilter">Clothes</option>
            <option value="shoesFilter">Shoes</option>
            <option value="electronicsFilter">Electronics</option>
            <option value="furnitureFilter">Furniture</option>
          </select>
        </div>

      </div>

      <div className='sm:grid flex justify-center items-center flex-col sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 mx-'>

        {
          isLoading || isError ?
            Array.from({ length: 16 }).map((_, index) =>
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
            filterProducts?.map((product) =>
              <Link
                to={`/products/slug/${product.slug}`}
                key={product.id}
              >
                <ProductCard
                  key={product.id}
                  productImage={product.images}
                  productName={product.title}
                  productDesc={product.description}
                  sellingPrice={`$${product.price}.00`}
                />
              </Link>
            )
        }
      </div>

      {/* Pagination */}
      <div>
        <div className='flex justify-center  flex-wrap items-center my-10 gap-3'>
          <button
            onClick={() => handlePreviousPage()}
            className={` px-2 py-1 lg:px-4 lg:py-2 cursor-pointer ${page === 1 ? 'text-gray-400 bg-gray-100' : 'text-gray-700 bg-gray-200'} rounded hover:bg-gray-300 transition`}>Previous</button>
          {
            Array.from({ length: 4 }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => {
                  setPage(pageNumber), scrollTopOnClick()
                }}
                className={`px-2 py-1 cursor-pointer lg:px-4 lg:py-2 rounded ${page === pageNumber ? 'bg-teal-800 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition`}
              >
                {pageNumber}
              </button>
            ))
          }
          <button
            onClick={() => handleNextPage()}
            className={` px-2 py-1 lg:px-4 lg:py-2 cursor-pointer  ${page === 4 ? 'text-gray-400 bg-gray-100' : 'text-gray-700 bg-gray-200'} rounded hover:bg-gray-300 transition`}>Next</button>
        </div>
      </div >
      <FooterStripe />
    </>
  )
}

export default Shop
