import { useGetProductBySlugQuery } from '../api/productsApi'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail/ProductDetail';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

function SingleProduct() {

  const { slug } = useParams()
  const { data: product, isLoading, isError, error } = useGetProductBySlugQuery(slug)

  return (
    <>
      {
        isLoading ?
          (<ProductDetail
            imgClass="bg-gray-200 w-full animate-pulse rounded"
            productNameClass="bg-gray-200 w-full h-10 animate-pulse rounded"
            productParaClass="bg-gray-200 w-full h-8 animate-pulse rounded"
            productDetailClass="bg-gray-200 w-full h-8 animate-pulse rounded"
            productDescClass="bg-gray-200 w-full h-30 animate-pulse rounded"
            sellingPriceClass="bg-gray-200 w-full h-6 animate-pulse rounded"
          />)
          :
          (<div>
            <ProductDetail
              productId={product?.id}
              productImage1={product ? product.images[0] : ""}
              productImage2={product ? product.images[1] : ""}
              productImage3={product ? product.images[2] : ""}
              productTitle={product?.title}
              sellingPrice={product?.price}
              productType={product?.category?.name}
              categorySlug={product?.category?.slug}
              description={product?.description}
            />
          </div>)
      }
      {
        isError && <div className='text-red-500'>Something went wrong: {error.error}</div>
      }
      <div>
        <RelatedProducts
          slug={slug}
        />
      </div>
    </>
  )
}

export default SingleProduct