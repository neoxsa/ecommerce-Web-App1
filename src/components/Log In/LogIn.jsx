import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import authService from '../../appwrite/auth';
import { logIn as authLogin } from '../../features/authSlice';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  email: yup.string().email("Invalid email or incorrect email").required("Email is required"),
  password: yup.string().required("Password is required")
})

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const authStatus = useSelector(state => state.auth.status)
  useEffect(() => {
    authStatus && navigate('/')
  }, [authStatus, navigate])

  // Login form handler
  const login = async (data) => {
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

  const passwordHandler = () => { setShowPassword((prev) => !prev) }

  console.log(errors);

  return (
    <>
      {!authStatus && (
        <div className=" flex-col space-y-3 inline-block rounded-md bg-amber-50 p-10 shadow-xl">
          <h2 className="mx-auto text-2xl md:text-3xl font-semibold text-center">
            Login
          </h2>
          <p className="text-right text-sm md:text-base mt-2">
            Don't have any account?&nbsp;
            <Link
              to="/sign-up"
              className=" font-medium text-blue-600 transition-all duration-200 hover:underline hover:text-blue-800 active:text-blue-800 active:underline"
            >
              Sign Up
            </Link>
          </p>
          {
            error && <div className='text-red-500 text-center font-medium  w-80 inline-flex flex-wrap mx-auto '>{error}</div>
          }
          <form onSubmit={handleSubmit(login)} className='flex flex-col gap-4'>
            <div className="flex flex-col gap-1">
              <label
                className="font-normal text-md  mt-2"
              >Email:</label>
              <input
                type="email"
                className={`w-60 md:w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800 ${error.includes('email') || errors.email ? 'outline-red-600 ' : 'outline-2'}`}
                {...register('email', {
                  required: true
                })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="font-normal"
              >Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                className={` w-60 md:w-80 rounded-lg p-2 font-medium outline-2 focus:outline-3 focus:outline-teal-800 ${error.includes('password') || errors.password ? 'outline-red-600 ' : 'outline-2'}`}
                {...register('password', {
                  required: true
                })}
              />
              <div className="text-sm cursor-pointer text-teal-600  hover:underline active:text-teal-800 w-fit" onClick={passwordHandler}>{showPassword ? "Hide" : "Show"}</div>

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
      )}
    </>

  )
}

export default LogIn
