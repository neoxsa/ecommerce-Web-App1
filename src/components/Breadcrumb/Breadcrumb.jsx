import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import heroImage from '../../assets/hero-img/heroImage.webp'

function Breadcrumb({
  toRoute = '',
  pageName = ''
}) {
  return (
    <>
      <div className='relative h-52 md:h-80 flex items-center justify-center w-full'>
        <img
          className=' w-full h-52 md:h-80 object-cover opacity-70 blur-[1.2px]'
          src={heroImage}
          alt="heroImage"
          loading='eager'
          fetchPriority='high'
        />

        <div className='absolute flex w-full h-full flex-col justify-center items-center'>
          <h1 className='text-5xl font-semibold'>{pageName}</h1>
          <div className='flex my-4 gap-5'>
            <span>
              <Link
                to='/'
                className='text-lg font-semibold'>
                Home
              </Link>
            </span>
            <ArrowRight />
            <span>
              <Link
                to={toRoute}
                className='text-lg'>
                {pageName}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
