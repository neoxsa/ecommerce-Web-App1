import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero img/heroImage.webp";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center  justify-center text-gray-800">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={heroImage}
          alt="hero image"
          loading="lazy"
        />

        <div className="relative rounded-md w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 bg-orange-100 p-4 sm:p-6 md:p-8 lg:p-10 mx-auto lg:mx-0 lg:mr-10 mt-10 lg:mt-0 flex flex-col gap-3 sm:gap-4 md:gap-5 xl:absolute xl:right-10">
          <span className="tracking-wider font-medium text-sm sm:text-base">
            New Arrival
          </span>
          <h1 className="text-teal-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Discover Our New Collection
          </h1>
          <p className="font-medium tracking-wide text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laborum quo ad facilis voluptas deleniti!
          </p>

          <button
            onClick={() => navigate("/products")}
            className="cursor-pointer text-base sm:text-lg md:text-xl font-semibold text-white bg-gray-900 py-3 px-6 mt-2 hover:bg-teal-800 transition-colors duration-300"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
