import { Box, Footprints, Shirt, Speaker } from "lucide-react";
import { setCategory } from "../../features/categorySlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function CategoriesBtns() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <section className="flex justify-center items-center flex-col my-10 lg:my-0 text-gray-950 gap-15">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Browse Category</h1>
                <p className="font-medium">Wide Range of Products</p>
            </div>
            <div className=" grid grid-cols-2 grid-rows-2 md:flex gap-7 lg:gap-20">
                <span
                    onClick={() => navigate("/products/category") && dispatch(setCategory("clothes"))}
                    className="flex flex-col w-24 h-24 md:w-[7.5rem] md:h-[7.5rem] justify-center cursor-pointer items-center bg-amber-100 py-4 px-3.5 rounded-full border-amber-200 border">
                    <Shirt
                        className="md:w-14 md:h-14 w-10 h-10" />
                    <h2 className="md:text-lg text-md ">Clothes</h2>
                </span>
                <span
                    onClick={() => navigate("/products/category") && dispatch(setCategory("shoes"))}
                    className="flex flex-col w-24 h-24 md:w-[7.5rem] md:h-[7.5rem] justify-center cursor-pointer items-center bg-amber-100 py-4 px-5 rounded-full border-amber-200 border">
                    <Footprints className="md:w-14 md:h-14 w-10 h-10" />
                    <h2 className=" md:text-lg text-md">Shoes</h2>
                </span>
                <span
                    onClick={() => navigate("/products/category") && dispatch(setCategory("electronics"))}
                    className="flex flex-col w-24 h-24 md:w-[7.5rem] md:h-[7.5rem] justify-center cursor-pointer items-center bg-amber-100 py-4 px-3.5  rounded-full border-amber-200 border">
                    <Speaker className="md:w-14 md:h-14 w-10 h-10" />
                    <h2 className="md:text-lg text-md">Gadgets</h2>
                </span>
                <span
                    onClick={() => navigate("/products/category") && dispatch(setCategory("all"))}
                    className="flex flex-col w-24 h-24 md:w-[7.5rem] md:h-[7.5rem] justify-center cursor-pointer items-center bg-amber-100 py-4 px-4.5  rounded-full border-amber-200 border">
                    <Box className="md:w-14 md:h-14 w-10 h-10" />
                    <h2 className="md:text-lg text-md">Others</h2>
                </span>
            </div>
        </section>
    )
}

export default CategoriesBtns
