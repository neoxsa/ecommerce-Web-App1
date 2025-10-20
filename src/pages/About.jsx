import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ecommerce_design from '../assets/banner/ecommerce_design.webp'

function About() {
  return (
    <>
      <Breadcrumb
        toRoute='/about'
        pageName='About'
      />

      <section className="flex flex-col gap-8 justify-center items-center px-4 sm:px-8 lg:px-20 py-10 bg-amber-50 min-h-[60vh]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-800 text-center mb-4">
          About Us
        </h1>
        <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <div>
            <img src={ecommerce_design} alt="ecommerce_design_illustration" />
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to our E-Commerce platform! We are passionate about delivering high-quality products and an exceptional shopping experience. Our curated selection features the latest trends in fashion, electronics, furniture, and more—each item carefully chosen for quality and value.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is to make online shopping easy, enjoyable, and secure. With fast delivery, warranty protection, and dedicated support, we strive to exceed your expectations every time you visit.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Thank you for choosing us. We look forward to serving you and helping you discover products that fit your lifestyle!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl mt-8">
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            <span className="text-teal-700 text-3xl font-bold mb-2">1500+</span>
            <span className="text-gray-600 font-medium">Products</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            <span className="text-teal-700 text-3xl font-bold mb-2">500+</span>
            <span className="text-gray-600 font-medium">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            <span className="text-teal-700 text-3xl font-bold mb-2">24/7</span>
            <span className="text-gray-600 font-medium">Support</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            <span className="text-teal-700 text-3xl font-bold mb-2">2 Years</span>
            <span className="text-gray-600 font-medium">Warranty</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
