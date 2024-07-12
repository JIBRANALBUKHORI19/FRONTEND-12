import { useState } from "react";
import {Link, useNavigate } from "react-router-dom"
import auth from "../../api/auth";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()

        if(!username || !password) {
            alert('isian tidak boleh kosong')
        }
        else{
            const userBaru = {username, password}
            try{
                const response = await auth.register(userBaru)
            if (response.data.username){
                navigate('/')
            }
            else {
                alert('registrasi gagal')
            }
            } catch (error){
                console.error(error)
            } 
        }
    }

    return(
        <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2x1 font-semibold text-gray-900 dark:text-white">
                REGISTRASI
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:textwhite">REGISTRASI AKUN</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    username = {username}
                                </label>
                                <input type="text" name="username" id="username" value={username}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-500" placeholder="user123" required onChange={(e) =>{setUsername(e.target.value)}} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    password = {password}
                                </label>
                                <input type="password" name="password" id="password" value={password}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-500" placeholder="*********" required onChange={(e) =>{setPassword(e.target.value)}} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirm Password
                                </label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-500" placeholder="*********" required onChange={(e) =>{setConfirmPassword(e.target.value)}} />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input type="checkbox" id="terms" aria-describedby="terms"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark :focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms"
                                    className="font-light text-gray-500 dark:text-gray-300">I accept teh
                                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                            dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                buat akun
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link to="/"
                             className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Register