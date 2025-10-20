import { useState } from "react"
import { XCircle } from "lucide-react"

function TopDiscountBar() {

  const [close, setClose] = useState(false)
  const [visible, setVisible] = useState(true)


  const closeHandler = () => {
    setClose(prev => !prev);
    setTimeout(() => {
      setVisible(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <>
      <div className={`flex  px-5 border-b border-gray-300 transition-opacity duration-300 w-full ${close ? 'opacity-0' : 'opacity-100'}`}>
        <section className=" w-full h-10 flex justify-center items-center my-2 sm:my-0 ">
          <p className="flex text-sm md:text-base text-teal-800 font-sans font-semibold text-center ">
            🛍️ Shop More, Save More – 🚚 Free Delivery Above $150 🎉
          </p>
        </section>
        <button
          onClick={closeHandler}
          type="button"
          aria-label="Close"
          className="my-auto rounded-full cursor-pointer"
        >
          <XCircle className="text-gray-500 hover:text-red-400 active:text-red-500" />
        </button>
      </div>

    </>
  )
}

export default TopDiscountBar
