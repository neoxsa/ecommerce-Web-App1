import { useEffect, useState } from "react"
import LogoutBtn from "../components/Logout Btn/LogoutBtn"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import authService from '../appwrite/auth'


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string(),
  currentPassword: yup.string(),
  birthday: yup.string(),
  street: yup.string(),
  city: yup.string(),
  state: yup.string(),
  postalCode: yup.string()
})

function Profile() {

  const authStatus = useSelector((state) => state.auth.status)
  const user = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.userData?.name || '',
      email: user?.userData?.email || '',
      phone: user?.userData?.phone || '',
      birthday: user?.userData?.prefs.birthday || '',
      street: user?.userData?.prefs.street || '',
      city: user?.userData?.prefs.city || '',
      state: user?.userData?.prefs.state || '',
      postalCode: user?.userData?.prefs.postalCode || ''


    }
  })
  const watchEmail = watch('email');
  const watchPhone = watch('phone')

  const dataChange = (watchEmail !== user?.userData?.email) || (watchPhone !== user?.userData?.phone)

  useEffect(() => {
    !authStatus && navigate('/login')

  }, [authStatus, navigate])

  const onSubmit = async (data) => {
    try {
      await authService.updateUserProfile({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.currentPassword,
        prefs: {
          birthday: data.birthday,
          street: data.street,
          city: data.city,
          state: data.state,
          postalCode: data.postalCode
        }
      })

      alert('Profile updated successfully!');

      window.location.reload();

    } catch (error) {
      console.log('Update failed:', error);
      alert('Failed to update profile');
    }
  }

  console.log("user", user)
  console.log("change :", dataChange)


  return (
    <>
      {authStatus && (

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-6xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
            <div className='flex items-center gap-4'>
              <div className='w-16 h-16 p-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl md:text-2xl font-semibold'>
                {user?.userData?.name[0]}
              </div>
              <div>
                <h1 className='text-xl md:text-2xl font-bold'>Your Profile</h1>
                <p className=' text-gray-500'>Manage your account information and preferences</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <LogoutBtn
                type="button"
                buttonText="Sign out"
              />

              <button
                type="submit"
                className='px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 text-sm'>
                Save changes
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Account Details */}
            <div className='lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6'>
              <h2 className='text-lg font-semibold mb-4'>Account details</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className="sm:col-span-2">
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                  />
                  {errors.name && (
                    <span className='text-red-500 text-sm mt-1'>{errors.name.message}</span>
                  )}
                </div>

                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Email address</label>
                  <input
                    {...register('email')}
                    type='email'
                    className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                  />
                  {errors.email && (<span className="text-red-500 text-sm mt-1">{errors.email.message}</span>)}
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Phone</label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                  />
                  {errors.phone && (<span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>)}

                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Birthday</label>
                  <input
                    {...register('birthday')}
                    type='date'
                    className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500' />

                </div>
                {
                  dataChange &&
                  (<div className="sm:col-span-2">
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Current Password (For email or phone changes) <span className="text-red-400">*</span></label>
                    <input
                      {...register('currentPassword')}
                      type="password"
                      className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    />
                    {errors.password && (
                      <span className='text-red-500 text-sm mt-1'>{errors.password.message}</span>
                    )}
                  </div>)
                }
              </div>

              <div className='mt-6'>
                <h3 className='text-md font-semibold mb-3'>Address</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Street</label>
                    <input
                      {...register('street')}
                      className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>City</label>
                    <input
                      {...register('city')}
                      className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500' />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>State/Province</label>
                    <input
                      {...register('state')}
                      className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Postal Code</label>
                    <input
                      {...register('postalCode')}
                      className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='space-y-6'>


              <div className='bg-white rounded-lg border border-gray-200 p-6'>
                <h2 className='text-lg font-semibold mb-4'>Recent orders</h2>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium'>Order #1024</p>
                      <p className='text-sm text-gray-500'>2 items • $78.50</p>
                    </div>
                    <button className='text-teal-600 hover:text-teal-700 text-sm'>View</button>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium'>Order #1023</p>
                      <p className='text-sm text-gray-500'>1 item • $24.00</p>
                    </div>
                    <button className='text-teal-600 hover:text-teal-700 text-sm'>View</button>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium'>Order #1022</p>
                      <p className='text-sm text-gray-500'>3 items • $142.99</p>
                    </div>
                    <button className='text-teal-600 hover:text-teal-700 text-sm'>View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  )
}

export default Profile
