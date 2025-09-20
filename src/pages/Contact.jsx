import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { Clock, LocateIcon, Phone } from 'lucide-react'

function Contact() {

  const submitHandler = () => {
    console.log('Sent Successfully')
  }

  return (
    <>
      <Breadcrumb
        toRoute='/contact'
        pageName='Contact'
      />

      <div className=' flex flex-col gap-10 justify-center items-center'>
        <div className='text-center w-1/2 mt-10'>
          <h1 className='text-3xl font-semibold'>Get in Touch</h1>
          <p className='text-gray-500 mt-1.5 '>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className='w-full flex lg:flex-row flex-col md:justify-center md:items-center md:gap-5 my-5'>
          <div className='w-full justify-center flex items-center lg:w-1/2  lg:px-10'>
            <ul className='grid grid-cols-1 md:grid-cols-3 mx-10   lg:flex lg:flex-col gap-5  lg:justify-self-end '>
              <li className='flex flex-col gap-3'>
                <LocateIcon className='w-8 h-8' />
                <div className='flex flex-col gap-2 text-base lg:text-md'>
                  <h1 className='lg:text-xl font-medium'>Address</h1>
                  <p className='flex flex-wrap'>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </li>
              <li className='flex flex-col gap-3'>
                <Phone
                  className='w-8 h-8'
                />
                <div
                  className='flex flex-col gap-3 text-base lg:text-md'
                >
                  <h1
                    className='lg:text-xl  font-medium'
                  >Phone</h1>
                  <p>Mobile: +(84)546-6789</p>
                  <p>Hotline: +(84)546-6789</p>
                </div>
              </li>
              <li className='flex flex-col gap-3'>
                <Clock
                  className='w-8 h-8'
                />
                <div
                  className='flex flex-col gap-2 text-base lg:text-md'
                >
                  <h1
                    className=' lg:text-xl  font-medium'
                  >Working Time</h1>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          <form onSubmit={submitHandler}
            className='w-full lg:w-1/2 flex flex-col justify-center gap-5 mx-auto mt-10 pr-0 lg:pr-15 lg:justify-self-start'
          >
            <div className='flex flex-col gap-2 px-10'>
              <label htmlFor="name">Full Name</label>
            <input
              className='px-4 py-2 border-teal-800 rounded-lg border w-full xl:w-3/5  ' type="text"
              placeholder='Enter your Name'
              required
            />
            </div>
            <div className='flex flex-col gap-2 px-10'>
            <label htmlFor="email">Email Address</label>
            <input
              className='px-4 py-2 border-teal-800 rounded-lg border w-full xl:w-3/5 ' type="email"
              placeholder='Enter your email'
              required
            />
            </div>
            <div className='flex flex-col gap-2 px-10'>
            <label htmlFor="subject">Subject</label>
            <input
              className='px-4 py-2 border-teal-800 rounded-lg border w-full xl:w-3/5 ' type="text"
              placeholder='Enter message title'
            />
            </div>
            <div className='flex flex-col gap-2 px-10'>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder='Type your message here'
              className='px-4 py-2 border-teal-800 rounded-lg border w-full xl:w-3/5 '
              required
            ></textarea>
            </div>

            <div className='flex flex-col gap-2 px-10'>
              <button
              type='submit'
              className='cursor-pointer w-full md:w-50  rounded text-base sm:text-lg md:text-lg font-semibold border-1 bg-teal-700 border-teal-800  py-3 px-15 mt-2 hover:bg-teal-800 text-white'
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
