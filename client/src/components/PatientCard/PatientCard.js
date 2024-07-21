import React from 'react';
import './PatientCard.css'; // Import your CSS file

function PatientCard({
  _id,
  name,
  email,
  mob_no,
  dob,
  gender,
  address,
  occupation,
  emergencyname,
  emergencynum,
  physician,
  ins_prov,
  ins_num,
  allergy,
  current_med,
  family_med_his,
  past_med_his,
  id_type,
  id_num,
  index // Add index as a prop
}) {
  const [modal, setModal] = React.useState(false);

  const rowClass = index % 2 === 0 ? 'table-row-even' : 'table-row-odd';

  return (
    <>
      <tr className={`w-200vw overflow-x-auto ${rowClass}`}>
        <td className="px-5 py-1">{name}</td>
        <td className="px-5 py-1">{dob}</td>
        <td className="px-5 py-1">{mob_no}</td>
        <td className="px-5 py-1">{email}</td>
        <td className="px-5 py-1">{physician}</td>
        <td className="px-5 py-1">{gender}</td>
        <td className="px-5 py-1">{address}</td>
        <td className="px-5 py-1">{occupation}</td>
        <td className="px-5 py-1">{emergencyname}</td>
        <td className="px-5 py-1">{emergencynum}</td>
        <td className="px-5 py-1">{ins_prov}</td>
        <td className="px-5 py-1">{ins_num}</td>
        <td className="px-5 py-1">{allergy}</td>
        <td className="px-5 py-1">{current_med}</td>
        <td className="px-5 py-1">{family_med_his}</td>
        <td className="px-5 py-1">{past_med_his}</td>
        <td className="px-5 py-1">{id_type}</td>
        <td className="px-5 py-1">{id_num}</td>
        <div className='flex my-auto text-sm'>
          <button className=' text-green-500 border border-gray-400 rounded-full  m-2 p-2 text-center'>
            Schedule
          </button>

          <button className=' text-red-500 border border-gray-400 rounded-full m-2 p-2 text-center'>
            Cancle
          </button>


          <button
            onClick={() => setModal(!modal)}
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Toggle modal
          </button>

            {modal && (
                <div
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div
                          className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Sign in to our platform
                        </h3>
                        <button
                            onClick={() => setModal(false)}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                          <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                              email</label>
                            <input type="email" name="email" id="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="name@company.com" required/>
                          </div>
                          <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                              password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   required/>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                       required/>
                              </div>
                              <label htmlFor="remember"
                                     className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                me</label>
                            </div>
                            <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                              Password?</a>
                          </div>
                          <button type="submit"
                                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                            to your account
                          </button>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create
                            account</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            )}

        </div>
      </tr>
    </>
  );
}

export default PatientCard;
