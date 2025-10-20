import { BadgeCheck, Headphones, Trophy, Truck } from 'lucide-react'

function FooterStripe() {
    return (
        <div className='bg-amber-50 w-full h-auto py-10 '>

            <div className='h-auto mx-10 py-5 px-2 gap-6 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 '>
                <span className='flex flex-row items-center gap-4 w-full sm:w-auto'>
                    <Trophy className='w-10 h-10 lg:w-14 lg:h-14 text-gray-900' />
                    <div>
                        <h1 className='text-xl lg:text-2xl font-semibold text-gray-900'>High Quality</h1>
                        <p className='text-gray-500 font-medium text-sm lg:text-lg'>crafted from top materials</p>
                    </div>
                </span>
                <span className='flex flex-row  items-center gap-4 w-full sm:w-auto'>
                    <BadgeCheck className='w-10 h-10 lg:w-14 lg:h-14 text-gray-900' />
                    <div>
                        <h1 className='text-xl lg:text-2xl font-semibold text-gray-900'>Warranty Protection</h1>
                        <p className='text-gray-500 font-medium text-sm lg:text-lg'>Over 2 years</p>
                    </div>
                </span>
                <span className='flex flex-row  items-center gap-4 w-full sm:w-auto'>
                    <Truck className='w-10 h-10 lg:w-14 lg:h-14 text-gray-900' />
                    <div>
                        <h1 className='text-xl lg:text-2xl font-semibold text-gray-900'>Free Delivery</h1>
                        <p className='text-gray-500 font-medium text-sm lg:text-lg'>Order over 150 $</p>
                    </div>
                </span>
                <span className='flex flex-row items-center gap-4 w-full sm:w-auto'>
                    <Headphones className='w-10 h-10 lg:w-14 lg:h-14 text-gray-900' />
                    <div>
                        <h1 className='text-xl lg:text-2xl font-semibold text-gray-900'>24 / 7 Support</h1>
                        <p className='text-gray-500 font-medium text-sm lg:text-lg'>Dedicated support</p>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default FooterStripe