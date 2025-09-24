import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { logIn as authLogin } from '../../features/authSlice'
import authService from '../../appwrite/auth'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required")
})

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [error, setError] = useState("");

  const signUp = async (data) => {
    console.log(data);

    setError("");
    try {
      const session = await authService.createUser(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(authLogin(userData));
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }
  console.log(error);

  return (

    <div className=" flex-col space-y-3 inline-block rounded-md bg-amber-50 p-10 shadow-xl">
      <h2 className="mx-auto text-3xl font-semibold text-center">
        Sign Up
      </h2>
      <p className="text-right my-5">
        Already have an account then &nbsp;
        <Link
          to="/sign-in"
          className=" font-medium text-primary text-blue-600 transition-all duration-200 hover:underline"
        >
          Log In
        </Link>
      </p>

      {
        error && <div className='text-red-500 text-center font-medium '>Something went wrong</div>
      }
      <form onSubmit={handleSubmit(signUp)} className='flex flex-col gap-4'>
        <div className="flex flex-col gap-1">
          <label
            className="font-normal"
          >Full Name:</label>
          <input
            type="text"
            {...register('fullName', {
              required: true
            })}
            className="w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800" />
          {errors.fullName && <div>{errors.fullName.message}</div>}

        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-normal"
          >Email:</label>
          <input
            type="email"
            {...register('email', {
              required: true
            })}
            className="w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800" />
          {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-normal"
          >Password:</label>
          <input
            type="password"
            {...register('password', {
              required: true
            })}
            className="w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800" />
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
