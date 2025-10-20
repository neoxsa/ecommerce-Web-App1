import { lazy } from "react";
const HeroSection = lazy(() => import("../components/HeroSection/HeroSection"));
import ProductCard from "../components/ProductCard/ProductCard";
import Carousel from "../components/Carousel/Carousel";
import FooterStripe from "../components/FooterStripe/FooterStripe";
import { useGetProductsQuery } from "../api/productsApi";
import { Link, useNavigate } from "react-router-dom";
import product_banner from "../assets/banner/product_banner.webp";
import CategoriesBtns from "../components/CategoriesBtns/CategoriesBtns";

function Home() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-0 md:gap-20 ">
        <HeroSection />
        <CategoriesBtns />

        {/* Products */}
        <section className="flex justify-center items-center flex-col text-gray-950 gap-15 mb-10">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <div className="sm:grid flex justify-center flex-col sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4">

            {isError && (
              <div className="text-red-500">
                Something went wrong: {error?.error || error?.message || "failed to load"}
              </div>
            )}

            {isLoading || isError
              ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCard
                  key={index}
                  productName=""
                  productDesc=""
                  sellingPrice=""
                  mrp=""
                  cardClass="flex flex-col justify-center items-center "
                  imgClass="  w-75 h-75 md:w-80 md:h-80 bg-gray-500 animate-pulse rounded-t-lg"
                  productNameClass="w-auto h-6 bg-gray-300 animate-pulse rounded"
                  productDescClass="w-auto h-4 bg-gray-300 animate-pulse rounded"
                  sellingPriceClass="w-30 h-8 bg-gray-300 animate-pulse rounded text-none"
                  mrpClass="w-auto h-4 bg-gray-300 animate-pulse rounded"
                />
              ))
              : products?.slice(0, 8).map((product) => (
                <Link
                  to={`/products/slug/${product.slug}`}
                  key={product.id}>
                  <ProductCard
                    productImage={product.images}
                    productName={product.title}
                    productDesc={product.description}
                    sellingPrice={`$${product.price}`}
                  />
                </Link>
              ))}
          </div>

          <button
            onClick={() => navigate("/products")}
            className="cursor-pointer min-w-32 text-base sm:text-lg md:text-xl font-semibold text-teal-800 border-1 border-teal-800  py-3 px-15 mt-2 hover:bg-teal-800 hover:text-white transition-colors duration-300"
          >
            Show More
          </button>
        </section>
        {/* Carousel */}
        <Carousel />

        <section>
          <FooterStripe />
          <section className="flex justify-center items-center flex-col text-gray-950 gap-15">
            <img
              className="w-full h-100 object-cover lg:h-190"
              src={product_banner}
              alt="product_collage"
              loading="lazy"
            />
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;
