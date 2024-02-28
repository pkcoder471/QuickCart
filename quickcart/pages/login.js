import React from 'react'
import Link from 'next/link'

const login = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="/quickcart_logo.png" alt="Your Company"/>
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form   method="POST">
          
            <div className="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  rounded-b-none sm:text-sm sm:leading-6 px-2" placeholder='Email address'/>
            </div>

          <div>
              
            <div >
              <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md rounded-t-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-2" placeholder='Password'/>
            </div>
            <div className="text-sm my-4 text-end">
                <Link href={'/forgot'} className="font-semibold text-orange-600 hover:text-orange-500 ">Forgot password?</Link>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <Link href={'/signUp'} className="font-semibold leading-6 text-orange-600 hover:text-orange-500 ml-1">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default login
