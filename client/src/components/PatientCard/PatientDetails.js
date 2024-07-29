import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import './PatientCard.css';

function PatientDetails({
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
  index
}) {
  const [cancelModal, setCancelModal] = React.useState(false);
  const [scheduleModal, setScheduleModal] = React.useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  const deleteAppointment = async(patientId) => {
    const response = await axios.delete(`http://localhost:${process.env.REACT_APP_PORT}/careplus/${patientId}`)

    toast.success(response.data.message)
    reloadPage();
  }

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
          <button
            onClick={() => setScheduleModal(!scheduleModal)}
            className=' text-green-500 hover:border border-gray-400 rounded-full  m-2 p-2 text-center'>
            Schedule
          </button>

          <button
            onClick={() => setCancelModal(!cancelModal)}
            className=' text-[#F24E43] hover:border border-gray-400 rounded-full m-2 p-2 text-center'>
            Cancel
          </button>


          {/*Cancel Modal*/}

          {cancelModal && (
            <div
              className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-4/12">
                <div className="relative bg-white pt-4 pb-4 rounded-lg shadow dark:bg-gray-800">
                  <div
                    className="flex items-center justify-between p-4 md:p-5 b rounded-t ">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Cancle Appointment
                      </h3>
                      <p>Are you sure you want to cancle your appointment?</p>
                    </div>

                    <button
                      onClick={() => setCancelModal(false)}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-4 md:p-5">
                    <form className="space-y-4" action="#">
                      <div>
                        <label htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason for cancelation</label>
                        <textarea type="text" rows="3" cols="50"
                          className="text-white text-sm  block w-full p-2.5 bg-transparent outline-none rounded-lg border border-gray-600 "
                          placeholder="ex: Urgent meeting came up" required />
                      </div>

                      <button type="submit"
                        className="w-full text-white bg-[#F24E43]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        onClick={()=>{
                          deleteAppointment(_id)
                        }}>
                        Cancel appointment
                      </button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*Schedule Modal*/}

          {scheduleModal && (
            <div
              className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-4/12">
                <div className="relative bg-white pt-4 pb-4 rounded-lg shadow dark:bg-gray-800">
                  <div
                    className="flex items-center justify-between p-4 md:p-5 b rounded-t ">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Schedule Appointment
                      </h3>
                      <p>Please fill in the following details to schedule</p>
                    </div>

                    <button
                      onClick={() => setScheduleModal(false)}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-4 md:p-5">
                    <form className="space-y-4" action="#">
                      <div>
                        <label htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason for appointment</label>
                        <textarea type="text" rows="3" cols="50"
                          className="text-white text-sm  block w-full p-2.5 bg-transparent outline-none rounded-lg border border-gray-600 "
                          placeholder="ex: Annual monthly check-up" required />
                      </div>

                      <button type="submit"
                        className="w-full text-white bg-[#24AE7C]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        Schedule appointment
                      </button>

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

export default PatientDetails;
