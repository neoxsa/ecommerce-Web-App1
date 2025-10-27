import ProductCard from '../ProductCard/ProductCard'
import { useGetProductsQuery, useGetProductBySlugQuery } from '../../api/productsApi'
import { Link } from 'react-router-dom'

function RelatedProducts({
  slug
}) {

  const { data: products, isLoading, isError, error } = useGetProductsQuery()
  const { data: product } = useGetProductBySlugQuery(slug)

  //Filter products by category
  const clothesProduct = products?.filter((product) => product.category.name === "Clothes")
  const shoesProduct = products?.filter((product) => product.category.name === "Shoes")
  const electronicsproduct = products?.filter((product) => product.category.name === "Electronics")
  const furnitureProduct = products?.filter((product) => product.category.name === "Furniture")

  return (
    <div>
      <section className='flex justify-center items-center flex-col text-gray-950 gap-15 my-10 lg:my-20'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>Related Products</h1>
          <p className='font-medium mt-4'>You may like these products also</p>
        </div>
        <div>
          {
            isError && <div className='text-red-500'>Something went wrong: {error.error}</div>
          }
          <div className='sm:grid flex justify-center flex-col sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4'>

            {
              isLoading &&
              Array.from({ length: 4 }).map((_, index) =>
              (<ProductCard
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
              ))
            }

            {
              product?.category?.name === "Clothes" &&
              clothesProduct?.slice(0, 4).map((product) => (
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
                    mrp="$100.00"

                  />
                </Link>
              ))
            }
            {
              product?.category?.name === "Furniture" &&
              furnitureProduct?.slice(0, 4).map((product) => (
                <Link
                  to={`/products/slug/${product.slug}`}
                  key={product.id}
                >
                  <ProductCard
                    key={product.id}
                    productImage={product.images}
                    productName={product.title}
                    productDesc={product.description}
                    sellingPrice={`$${product.price}`}
                    mrp="$100.00"
                  />
                </Link>
              ))
            }
            {
              product?.category?.name === "Shoes" &&
              shoesProduct?.slice(0, 4).map((product) => (
                <Link
                  to={`/products/slug/${product.slug}`}
                  key={product.id}
                >
                  <ProductCard
                    key={product.id}
                    productImage={product.images}
                    productName={product.title}
                    productDesc={product.description}
                    sellingPrice={`$${product.price}`}
                    mrp="$100.00"
                  />
                </Link>
              ))
            }

            {
              product?.category?.name === "Electronics" &&
              electronicsproduct?.slice(0, 4).map((product) => (
                <Link
                  to={`/products/slug/${product.slug}`}
                  key={product.id}
                >
                  <ProductCard
                    key={product.id}
                    productImage={product.images}
                    productName={product.title}
                    productDesc={product.description}
                    sellingPrice={`$${product.price}`}
                    mrp="$100.00"
                  />
                </Link>
              ))
            }

          </div>
        </div>
      </section>


    </div>
  )
}

export default RelatedProducts
