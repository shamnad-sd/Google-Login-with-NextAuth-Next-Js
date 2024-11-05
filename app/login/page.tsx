'use client'


import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function Login() {

    const {data : session} = useSession()

  return (
    <div className='flex flex-col items-center justify-center'>
        
        {!session ? (
            <button onClick={()=> signIn()} className='p-2 font-bold border-2'>Login</button>
        ):
        <button onClick={()=> signOut()} className='p-2 font-bold border-2'>Login Out</button>
    }



        {session && (
        <div>
        <h2>Name : {session?.user?.name}</h2>
        <img src={session?.user?.image} alt="" />
        </div>
    )
    }
    </div>
  )
}

export default Login