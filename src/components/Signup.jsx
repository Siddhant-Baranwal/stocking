import React from 'react'
const Signup = ({ toggleForm }) => {
    return (
        <div className="rounded-lg border-white border-opacity-10 border-2 shadow-2xl p-6 max-w-lg w-full backdrop-blur-xl" style={{ backgroundImage: 'radial-gradient(circle 500px at 50% 50%, #134074, #00072d)' }}>
            <h2 className="text-2xl text-center mb-10 text-white font-bold">
                Create a new account
            </h2>
            <form action='#'>
                <div className="relative mb-4">
                    <input
                        type="text"
                        className="peer w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold"
                        placeholder="Enter your username"
                        required
                    />
                    <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white">
                        Enter your Username
                    </label>
                </div>
                <div className="relative mb-4">
                    <input
                        type="email"
                        className="peer w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold"
                        placeholder="Enter your email"
                        required
                    />
                    <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white">
                        Enter your Email
                    </label>
                </div>
                <div className="relative mb-4">
                    <input
                        type="password"
                        className="peer w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold"
                        placeholder="Enter your password"
                        required
                    />
                    <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white">
                        Enter your Password
                    </label>
                </div>
                
                <button type='submit' className="w-full bg-blue-700 text-white p-3 rounded-xl hover:bg-sky-800 transform duration-300 shadow-xl font-semibold">
                    Register
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-zinc-400">
                    Already have an account?
                    <span
                        onClick={toggleForm}
                        className="text-blue-400 cursor-pointer hover:text-red-600 hover:underline transition-colors duration-300 ml-2">
                        Login
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
                <img src='/google.svg' />Continue with Google
                </span>
            </button>
        </div>

    )
}

export default Signup
