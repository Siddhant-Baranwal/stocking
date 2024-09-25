import React from 'react'
import { useForm } from 'react-hook-form';

const Resetpassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins bg-[url('/bg.png')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/65"></div>
            <div className="rounded-lg border-white border-opacity-10 border-2 py-6 px-5 max-w-lg w-full backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] mx-4">
                <h2 className="text-2xl text-center mb-5 text-white font-bold">
                    Reset Password
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-5 mt-8">
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className={`peer w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-400'} rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold`}
                        placeholder="New Password"
                    />
                    <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
                        New Password {errors.password && <span className="text-red-500">*</span>}
                    </label>
                </div>
                <div className="relative mb-5 mt-4">
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className={`peer w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-400'} rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold`}
                        placeholder="Confirm New Password"
                    />
                    <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
                        Confirm New Password {errors.password && <span className="text-red-500">*</span>}
                    </label>
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="mb-6 text-red-500 text-sm">
                        <p><span className="text-red-500">*</span> This is a required field</p>
                    </div>
                )}

                <button type='submit' className="w-full bg-blue-800 text-white p-3 rounded-xl hover:bg-blue-950 transform duration-300 shadow-xl font-semibold">
                    Submit
                </button>
            </form>

            </div>
        </div>
  )
}

export default Resetpassword

