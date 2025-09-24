import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import authService from '../../appwrite/auth';
import { logIn as authLogin } from '../../features/authSlice';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required")
})

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [error, setError] = useState("");

  const login = async (data) => {
    console.log(data);
    setError("");
    try {
      const session = await authService.logIn(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData))
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className=" flex-col space-y-3 inline-block rounded-md bg-amber-50 p-10 shadow-xl">
      <h2 className="mx-auto text-3xl font-semibold text-center">
        Login
      </h2>
      <p className="text-right mt-2">
        Don't have any account?&nbsp;
        <Link
          to="/sign-up"
          className=" font-medium text-primary text-blue-600 transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      {
        error && <p className="text-red-600 text-center mt-8  ">Something went wrong.</p>
      }
      <form onSubmit={handleSubmit(login)} className='flex flex-col gap-4'>
        <div className="flex flex-col gap-1">
          <label
            className="font-normal"
          >Email:</label>
          <input
            type="email"
            {...register('login', {
              required: true
            })}
            className="w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800" />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>
        <div className="flex self-end">
          <button
            type="submit"
            className="mx-auto cursor-pointer hover:bg-teal-800 active:bg-teal-800 transition-all duration-200 my-5 w-20 rounded-lg bg-teal-700 py-2 text-lg text-white">
            Login
          </button>
        </div>
      </form>

    </div>

  )
}

export default LogIn
