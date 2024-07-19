import React from 'react'

const PatientForm = () => {
    return (
        <div>

            <section className='mb-12 space-y-12'>
                <h1 className='text-4xl font-semibold'>Hi there 👋</h1>
                <p className=' text-gray-500'>Get started with Appointments.</p>

            </section>
            <form className=' space-y-6 flex-1'>
                <div>
                    <p className='pb-3'>Full Name</p>
                    <div className='flex bg-[#1A1D21] px-4 w-full border-gray-50 rounded-md'>
                        <img src='/assets/icons/user.svg ' />
                        <input className='ms-2 w-full bg-transparent py-3 border-none' type='text' placeholder='John Doe' />
                    </div>

                </div>
                <div>
                    <p>Email</p>
                    <div className='flex bg-[#1A1D21] px-4 w-full border-gray-50 rounded-md'>
                        <img src='/assets/icons/email.svg' />
                        <input className='ms-2 w-96 py-3 bg-transparent' type='email' placeholder='johndoe@gmail.com' />
                    </div>
                </div>
                <div>
                    <p>Phone number</p>
                    <div className='flex bg-[#1A1D21] px-4 w-full border-gray-50 rounded-md'>
                        
                        <input className='w-96 py-3 bg-transparent' type='tel' placeholder='23249798439' />
                    </div>
                </div>

                <button className='bg-[#24AE7C] w-full p-2'>Get Started</button>
            </form>


        </div>
    )
}

export default PatientForm
