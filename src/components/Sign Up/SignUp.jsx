import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { logIn as authLogin } from '../../features/authSlice'
import authService from '../../appwrite/auth'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email must be a valid email").required("Email is required"),
  password: yup.string().required("Password is required")
})

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signUp = async (data) => {
    console.log(data);

    setError("");
    try {
      const session = await authService.createUser(data);

      if (session) {
        const user = await authService.getCurrentUser();

        if (user) dispatch(authLogin({ user }));
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }


  const passwordHandler = () => { setShowPassword((prev) => !prev) }

  console.log(error);

  return (

    <div className=" flex-col space-y-3 inline-block rounded-md bg-amber-50 p-10 shadow-xl">
      <h2 className="mx-auto text-2xl md:text-3xl  font-semibold text-center">
        Sign Up
      </h2>
      <p className="text-right text-sm md:text-base mt-2">
        Already have an account then &nbsp;
        <Link
          to="/login"
          className=" font-medium text-blue-600 transition-all duration-200 hover:underline hover:text-blue-800 active:text-blue-800 active:underline"
        >
          Log In
        </Link>
      </p>

      {
        error && <div className='text-red-500 text-center font-medium  w-100 '>{error}</div>
      }
      <form onSubmit={handleSubmit(signUp)} className='flex flex-col gap-4 justify-center items-center'>
        <div className="flex flex-col gap-1">
          <label
            className="font-normal"
          >Full Name:</label>
          <input
            type="text"
            className={`w-60 md:w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800 ${errors.fullName ? 'outline-red-600 ' : 'outline-2'}`}
            {...register('name', {
              required: true
            })}
          />
          {errors.fullName && <div className='text-red-500'>{errors.fullName.message}</div>}

        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-normal"
          >Email:</label>
          <input
            type="email"
            className={`w-60 md:w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800 ${error.includes('email') || errors.email ? 'outline-red-600 ' : 'outline-2'}`}
            {...register('email', {
              required: true
            })}
          />
          {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-normal"
          >Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            className={`w-60 md:w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800 ${error.includes('password') || errors.password ? 'outline-red-600 ' : 'outline-2'}`}
            {...register('password', {
              required: true
            })}
          />
          <div className="text-sm cursor-pointer text-teal-600  hover:underline active:text-teal-800 w-fit" onClick={passwordHandler}>{showPassword ? "Hide" : "Show"}</div>

          {errors.password && <div className='text-red-500'>{errors.password.message}</div>}

        </div>
        <div className='flex self-end'>
          <button
            type="submit"
            className="mx-auto my-5 w-20 rounded-lg bg-teal-700 py-2 text-lg text-white">
            Sign Up
          </button>
        </div>
      </form>
    </div>

  )
}

export default SignUp
