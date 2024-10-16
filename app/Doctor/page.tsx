'use client'
import React from 'react';
import { useState } from 'react';

const Doctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [Submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    }
  return (
    <main className='flex  justify-center h-screen items-center  text-white '>
        <div className='bg-black p-2 rounded-2xl  shadow-xl shadow-white  bg-gradient-to-r from-black to-orange-950 w-3/12'>
            <h1 className='text-center font-bold text-3xl'>Emergency Doctor Consultation Form</h1>
            {Submitted ? ( <div className='text-center text-2xl text-green-500'>
                <h1>Submitted Sucessfully</h1>
            </div>):(
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor="name">Name:</label>
                    <input type="text" className='rounded-2xl bg-neutral-300 text-black ' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="name">Email:</label>
                    <input type="email" className='rounded-2xl bg-neutral-300 text-black' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="name">Age:</label>
                    <input type="age" className='rounded-2xl bg-neutral-300 text-black' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="gneder">Gender:</label>
                    <select name="gender" id="gender" className='rounded-2xl text-black bg-neutral-300' value={gender} 
                onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='flex flex-col mb-4'>
                    <button className='bg-yellow-900 rounded-2xl hover:bg-yellow-950'>Submit</button>
                </div>
            </form>
  )}
        </div>
    </main>
  )
}

export default Doctor
