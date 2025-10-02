import { useState, useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    createdOn: yup.date().default(() => new Date()),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    companyName: yup.string(),
    countryOrRegion: yup.string().required('Country/Region is required'),
    streetAddress: yup.string().required('Street Address is required'),
    townCity: yup.string().required('Town/City is required'),
    postalCode: yup.string().required('Postal Code required').matches(/^\d{6}$/, 'Postal Code must be in 6 digits'),
    phone: yup.string().matches(/^\d{10}$/, 'Phone Number must be in 10 digits').required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email Required')
})

function Checkout() {
    const [shippingCharge, setShippingCharge] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState('')

    const products = useSelector(state => state.ProductToCart.products)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submitHandler = (data) => {
        console.log(data)
    }

    const subTotal =
        products.reduce((total, item) =>
            total + (item.price.sellingPrice * item.qty.quantity), 0);

    useEffect(() => {
        setShippingCharge(products.length > 0 ? 15 : 0);
        subTotal >= 150 && setShippingCharge(0)
    }, [products])

    const grandTotal = subTotal + shippingCharge

    const labelClass = `text-sm sm:text-md font-medium text-gray-700`
    const inputClass = `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-700 focus:border-transparent outline-none`

    return (
        <>
            <Breadcrumb
                toRoute='/checkout'
                pageName='Checkout'
            />

            <div className='w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12'>
                <div className='flex flex-col-reverse lg:flex-row gap-8'>
                    {/* Left */}
                    <section className='w-full lg:w-[40%]'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8'>Billing Details</h1>
                        <form onSubmit={handleSubmit(submitHandler)} className='space-y-4 sm:space-y-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='space-y-2'>
                                    <label className={labelClass}>First Name <span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className={inputClass}
                                        {...register('firstName')}
                                    />
                                    {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                                </div>
                                <div className='space-y-2'>
                                    <label className={labelClass}>Last Name <span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className={inputClass}
                                        {...register('lastName')}
                                    />
                                    {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}

                                </div>
                            </div>
                            <div className='space-y-2'>
                                <label className={labelClass}>Company Name (Optional)</label>
                                <input
                                    type="text"
                                    className={inputClass}
                                    {...register('companyName')}
                                />
                                {errors.companyName && <p className='text-red-500'>{errors.companyName.message}</p>}

                            </div>

                            <div className='space-y-2'>
                                <label className={labelClass}>Country/Region <span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className={inputClass}
                                    {...register('countryOrRegion')}
                                />
                                {errors.countryOrRegion && <p className='text-red-500'>{errors.countryOrRegion.message}</p>}

                            </div>

                            <div className='space-y-2'>
                                <label className={labelClass}>Street address <span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className={inputClass}
                                    {...register('streetAddress')}
                                />
                                {errors.streetAddress && <p className='text-red-500'>{errors.streetAddress.message}</p>}

                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='space-y-2'>
                                    <label className={labelClass}>Town/City <span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className={inputClass}
                                        {...register('townCity')}
                                    />
                                    {errors.townCity && <p className='text-red-500'>{errors.townCity.message}</p>}

                                </div>
                                <div className='space-y-2'>
                                    <label className={labelClass}>Postal Code <span className='text-red-500'>*</span></label>
                                    <input
                                        type="number"
                                        className={inputClass}
                                        {...register('postalCode')}
                                    />
                                    {errors.postalCode && <p className='text-red-500'>{errors.postalCode.message}</p>}

                                </div>
                            </div>

                            <div className='space-y-2'>
                                <label className={labelClass}>Phone <span className='text-red-500'>*</span></label>
                                <input
                                    type="tel"
                                    className={inputClass}
                                    {...register('phone')}
                                />
                                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                            </div>

                            <div className='space-y-2'>
                                <label className={labelClass}>Email address <span className='text-red-500'>*</span></label>
                                <input
                                    type="email"
                                    className={inputClass}
                                    {...register('email')}
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                            </div>

                            <div className='mt-8 space-y-6'>
                                <div>
                                    <h2 className='text-2xl font-medium mb-4 text-teal-900'>Payment Method</h2>
                                    <div className='space-x-4 mb-4'>
                                        <input
                                            className='cursor-pointer accent-teal-600'
                                            type="radio"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            name="paymentMethod"
                                            id="dbt"
                                            value="dbt"
                                            checked={paymentMethod === 'dbt'}
                                        />
                                        <label
                                            htmlFor="dbt"
                                            className='font-medium'
                                        >Direct Bank Transfer</label>
                                        <p
                                            className='mt-2 text-gray-400'
                                        >
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                        </p>
                                    </div>
                                    <div className='space-x-4 mb-4'>
                                        <input
                                            className='cursor-pointer accent-teal-600'
                                            type="radio"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            name="paymentMethod"
                                            id="cod"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                        />
                                        <label
                                            htmlFor="cod"
                                            className='font-medium'
                                        >Cash On Delivery</label>
                                        <p
                                            className='mt-2 text-gray-400'
                                        >
                                            Pay with cash upon delivery.
                                        </p>
                                    </div>
                                    <p
                                        className='mt-5 text-sm'>
                                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                    </p>
                                </div>
                            </div>

                            <div className='flex justify-end'>
                                <button
                                    type='submit'
                                    className='w-full sm:w-auto px-6 py-3 bg-teal-700 text-white rounded-lg
                                        hover:bg-teal-800 transition-all duration-200 font-medium
                                        disabled:bg-gray-300 disabled:cursor-not-allowed'
                                    disabled={!products.length || !paymentMethod}
                                >
                                    Save & Place Order
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* Right */}
                    <section className='w-full lg:w-[60%]'>
                        <div className='bg-white rounded-lg shadow-md border border-amber-100'>
                            <div className='p-4 sm:p-6'>
                                <div className='flex justify-between items-center mb-6'>
                                    <h2 className='text-xl sm:text-2xl font-medium'>Product</h2>
                                    <h2 className='text-xl sm:text-2xl font-medium'>Total</h2>
                                </div>

                                {!products.length ? (
                                    <div className='text-gray-400 font-medium text-xl text-center py-8'>
                                        No product in cart
                                    </div>
                                ) : (
                                    <div className='space-y-4 px-4 sm:px-6'>
                                        {products?.map((product) => {
                                            const totalPrice = product.price.sellingPrice * product.qty.quantity
                                            return (
                                                <div className='flex justify-between items-center text-sm sm:text-base' key={product.id.productId}>
                                                    <span className='text-gray-600 flex-1 pr-4'>
                                                        {product.name.productTitle}
                                                        <span className='ml-2 text-teal-800 font-medium'>
                                                            × {product.qty.quantity}
                                                        </span>
                                                    </span>
                                                    <span className='font-medium'>${totalPrice}</span>
                                                </div>
                                            )
                                        })}

                                        <div className='space-y-3 pt-4 border-t border-gray-200'>
                                            <div className='flex justify-between items-center'>
                                                <span>Subtotal</span>
                                                <span>${subTotal}</span>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <span>Delivery Charges</span>
                                                {shippingCharge === 0 ? (<p className='text-green-600 '>
                                                    Free
                                                </p>) : (<span >${shippingCharge}</span>)}

                                            </div>
                                            <div className='flex justify-between items-center pt-3 border-t border-gray-200'>
                                                <span className='text-lg font-medium'>Grand Total</span>
                                                <span className='text-xl text-teal-800 font-medium'>
                                                    ${grandTotal}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>


                    </section>
                </div>
            </div>
        </>
    )
}

export default Checkout
