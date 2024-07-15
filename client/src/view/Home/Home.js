import React from 'react'
import PatientForm from '../../components/Forms/PatientForm.js'

function Home() {
  return (
    <div className='flex h-screen max-h-screen'>

      <section className=' remove-scrollbar container ms-36'>
        <div className='sub-container max-w-[496px] '>
          <div className='h-screen flex flex-col justify-center'>
            <img
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              className='mb-12 h-10 w-fit'
            />

            <PatientForm />

            <div className=' text-14-regular mt-20 flex justify-between' >
              <p className='justify-items-end text-dark-600 xl:text-left' >
                © 2024 CarePulse
              </p>
            </div>

          </div>

        </div>

      </section>

      <img
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        className='side-img max-w-[50%]'
      />



    </div>
  )
}

export default Home
