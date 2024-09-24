import React from 'react'
import { useForm } from 'react-hook-form'

const Login = ({ toggleForm }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="rounded-lg border-white border-opacity-10 border-2 p-6 max-w-lg w-full backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <h2 className="text-2xl text-center mb-10 text-white font-bold">
                Login to your account
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-4">
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            }
                        })}
                        className={`peer w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold`}
                        placeholder="Enter your email"
                    />
                    <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
                        Enter your Email {errors.email && <span className="text-red-500">*</span>}
                    </label>
                </div>

                <div className="relative mb-4">
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className={`peer w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-400'} rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold`}
                        placeholder="Enter your password"
                    />
                    <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
                        Enter your Password {errors.password && <span className="text-red-500">*</span>}
                    </label>
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="mb-4 text-red-500 text-sm">
                        <p><span className="text-red-500">*</span> This is a required field</p>
                    </div>
                )}

                <button type='submit' className="w-full bg-blue-800 text-white p-3 rounded-xl hover:bg-blue-950 transform duration-300 shadow-xl font-semibold">
                    Login
                </button>
            </form>

            <div className="mt-4 flex justify-between text-sm mx-2">
                <p className='text-zinc-300 underline hover:text-blue-500'> Forgot Password</p>
                <p className="text-zinc-300">
                    Don't have an account?
                    <span
                        onClick={toggleForm}
                        className="text-blue-400 cursor-pointer hover:text-red-600 underline transition-colors duration-300 ml-1">
                        Sign Up
                    </span>
                </p>
            </div>

            <div className="my-4 flex items-center">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-4 text-gray-400">or</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            <button className="w-full bg-sky-950 border border-gray-500 text-gray-100 p-2 rounded-lg hover:bg-blue-900 transform duration-300 shadow-2xl font-semibold">
                <span className='flex justify-center items-center gap-2'>
                    <img src='/google.svg' alt="Google Icon" />Continue with Google
                </span>
            </button>

        </div>
    )
}

export default Login;
