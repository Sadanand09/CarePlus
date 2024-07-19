import React from 'react'
import PatientData from '../../components/Forms/PatientData'

function Form() {
  return (
    <div className='flex'>
      <div className='w-4/5 ps-52'>
        <section className='remove-scrollbar container'>
          <div>

            <div className='h-screen flex flex-col justify-between mt-14'>
              <img
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                className='mb-12 h-10 w-fit'
              />
              <h1 className='header font-semibold text-4xl'>Welcome 👋</h1>
              <p>
                Let us know about yourself.
              </p>
              <PatientData />

            </div>
            
            
          </div>


        </section>

      </div>
      <img
        src="assets/images/register-img.png"
        height={1000}
        width={1000}
        className='side-img max-w-[25%]'
      />
    </div>
  )
}

export default Form
