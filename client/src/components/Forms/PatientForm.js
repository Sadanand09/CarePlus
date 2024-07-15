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
                    <p>Full Name</p>
                    <input className='w-96 p-2' type='text' placeholder='John Doe' />
                </div>
                <div>
                    <p>Email</p>
                    <input className='w-96 p-2' type='email' placeholder='johndoe@gmail.com' />
                </div>
                <div>
                    <p>Phone number</p>
                    <input className='w-96 p-2' type='tel' placeholder='John Doe' />
                </div>

                <button className='bg-[#24AE7C] w-96 p-2'>Get Started</button>
            </form>


        </div>
    )
}

export default PatientForm
