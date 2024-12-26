import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-blue-800 to-purple-500 flex justify-center items-center'>
            <div className="container pt-10 pb-10 md:pt-0 md:pb-0">

                <div className='flex flex-col md:flex-row md:justify-center'>
                    <div className='w-full py-20 flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-800 rounded-tl-[16px] rounded-tr-[16px] md:rounded-tl-[16px] md:rounded-bl-[16px] md:rounded-tr-[0px]'>
                        <div className='rounded-full bg-white w-[13rem] h-[13rem] flex justify-center items-center'>
                            <div className=''>
                                <p className='text-5xl'>SL</p>
                                <p className='text-2xl'>DEV</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-10 py-20 bg-white rounded-bl-[16px] rounded-br-[16px] md:rounded-bl-[0px] md:rounded-tr-[16px]'>
                        <h2 className='text-2xl md:text-4xl pb-3'>Login</h2>
                        <p className='pb-8'>Enter the below details to login</p>

                        <form className='md:px-[10px]'>
                            <div className="mb-4">
                                <div className="flex items-center border rounded-md mb-5 p-2 bg-gray-50">
                                    <span><FaRegUser /></span>
                                    <input
                                        type="text"
                                        id="userId"
                                        className="flex-1 outline-none bg-transparent ml-2"
                                        placeholder="User Id"
                                    />
                                </div>
                                <div className="flex items-center border rounded-md p-2 bg-gray-50">
                                    <span><RiLockPasswordLine /></span>
                                    <input
                                        type="text"
                                        id="userId"
                                        className="flex-1 outline-none bg-transparent ml-2"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>



                            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                                <a href="#" className="hover:underline">Having Trouble in sign in?</a>
                                <a href="#" className="hover:underline">Forget Password</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md transition duration-300"
                            >
                                Login In
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginPage