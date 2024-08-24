import React, { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
  index,
  image,
}) {
  const [patientModal, setPatientModal] = React.useState(false);
  const [cancelModal, setCancelModal] = React.useState(false);
  const [scheduleModal, setScheduleModal] = React.useState(false);
  const [scheduleStatus, setScheduleStatus] = React.useState("pending");
  const [cancelStatus, setCancelStatus] = React.useState("Cancel");

  const reloadPage = () => {
    window.location.reload();
  };

  const updateAppointmentStatus = async (
    patientId,
    statusType,
    statusValue
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:${process.env.REACT_APP_PORT}/careplus/updateStatus`,
        {
          patientId,
          statusType,
          statusValue,
        }
      );
      toast.success(response.data.message);
      reloadPage();
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  const handleScheduleAppointment = async (e) => {
    e.preventDefault();
    setScheduleStatus("scheduled");
    setScheduleModal(false);

    // Save the schedule status to the database
    await updateAppointmentStatus(_id, "scheduleStatus", "scheduled");
  };

  const handleCancelAppointment = async (e) => {
    e.preventDefault();
    setCancelStatus("Canceled");
    setCancelModal(false);
    setScheduleModal(false);

    // Save the cancel status to the database
    await updateAppointmentStatus(_id, "cancelStatus", "Canceled");
  };
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_hxrjp06", // Service ID
  //       "template_7ua0j8n", // Template ID
  //       form.current, // Form reference
  //       "GxIORGD9KCYvN56M1" // Public Key
  //     )
  //     .then(
  //       (result) => {
  //         console.log("SUCCESS!", result.text);
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <>
      <div className="w-full p-4 ">
        <div className="p-5 lg:flex sm:flex justify-between bg-[#1A1D21] rounded-md ">
          <div
            className="flex cursor-pointer"
            onClick={() => setPatientModal(!patientModal)}
          >
            <div>
              <p>Name:</p>
              <p>Gender:</p>
              <p>Phone:</p>
              <p>Email: </p>
            </div>
            <div className="ms-2">
              <p>{name}</p>
              <p>{gender}</p>
              <p>{mob_no}</p>
              <p>{email}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <button
              onClick={() => setScheduleModal(!scheduleModal)}
              className={`${
                scheduleStatus === "scheduled"
                  ? "text-[#24AE7C] cursor-not-allowed"
                  : "text-yellow-500 hover:border border-gray-400"
              } rounded-full m-2 p-2 text-center`}
              disabled={scheduleStatus === "scheduled"}
            >
              {scheduleStatus === "pending" ? "Pending" : "Scheduled"}
            </button>

            <button
              onClick={() => setCancelModal(!cancelModal)}
              className={`${
                cancelStatus === "Canceled"
                  ? "text-red-800 cursor-not-allowed"
                  : "text-[#F24E43] hover:border border-gray-400 rounded-full m-2 p-2 text-center"
              }`}
              disabled={cancelStatus === "Canceled"}
            >
              {cancelStatus === "Cancel" ? "Cancel" : "Canceled"}
            </button>
          </div>
        </div>
      </div>

      {/* Modals for patient data, cancel, and schedule */}
      {/* ... (rest of your modal code remains unchanged) */}

      {/*Patient Modal*/}
      {patientModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-auto m-3">
              <div className="relative bg-white pt-4 pb-4 rounded-lg shadow dark:bg-black">
                <div className="flex items-center justify-between p-4 md:p-5 b rounded-t ">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Patient's Data
                    </h3>
                  </div>

                  <button
                    onClick={() => setPatientModal(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex text-sm">
                    <div className="text-gray-600">
                      <p>Name:</p>
                      <p>Gender:</p>
                      <p>Phone:</p>
                      <p>Email:</p>
                      <p>DOB:</p>
                      <p>Physician:</p>
                      <p>Address:</p>
                      <p>Occupation:</p>
                      <p>Emergency Name:</p>
                      <p>Emergency Number:</p>
                      <p>Insurance Provider:</p>
                      <p>Insurance Number:</p>
                      <p>Allergy:</p>
                      <p>Current Medical History:</p>
                      <p>Past Medical History:</p>
                      <p>Family Medical History:</p>
                      <p>I'd Type:</p>
                      <p>I'd Number:</p>
                    </div>
                    <div className="ms-3 text-green-800">
                      <p >{name}</p>
                      <p>{gender}</p>
                      <p>{mob_no}</p>
                      <p>{email}</p>
                      <p>{dob}</p>
                      <p>{physician}</p>
                      <p>{address}</p>
                      <p>{occupation}</p>
                      <p>{emergencyname}</p>
                      <p>{emergencynum}</p>
                      <p>{ins_prov}</p>
                      <p>{ins_num}</p>
                      <p>{allergy}</p>
                      <p>{current_med}</p>
                      <p>{past_med_his}</p>
                      <p>{family_med_his}</p>
                      <p>{id_type}</p>
                      <p>{id_num}</p>
                    </div>
                    
                  </div>
                  <div>{image}</div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Cancel Modal*/}
      {cancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4">
              <div className="relative bg-white pt-4 pb-4 rounded-lg shadow dark:bg-gray-800">
                <div className="flex items-center justify-between p-4 md:p-5 b rounded-t ">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Cancel Appointment
                    </h3>
                    <p>Are you sure you want to cancel your appointment?</p>
                  </div>

                  <button
                    onClick={() => setCancelModal(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form
                    className="space-y-4"
                    onSubmit={handleCancelAppointment}
                  >
                    <div>
                      <label
                        htmlFor="cancelReason"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Reason for cancellation
                      </label>
                      <textarea
                        id="cancelReason"
                        rows="3"
                        cols="50"
                        className="text-white text-sm block w-full p-2.5 bg-transparent outline-none rounded-lg border border-gray-600 "
                        placeholder="ex: Urgent meeting came up"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-[#F24E43] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      // onClick={() => {
                      //   deleteAppointment(_id);
                      // }}
                    >
                      Cancel appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Schedule Modal*/}
      {scheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4">
              <div className="relative bg-white pt-4 pb-4 rounded-lg shadow dark:bg-gray-800">
                <div className="flex items-center justify-between p-4 md:p-5 b rounded-t ">
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
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form
                    className="space-y-4"
                    onSubmit={handleScheduleAppointment}
                  >
                    <div>
                      <label
                        htmlFor="scheduleReason"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Reason for appointment
                      </label>
                      <textarea
                        id="scheduleReason"
                        rows="3"
                        cols="50"
                        className="text-white text-sm block w-full p-2.5 bg-transparent outline-none rounded-lg border border-gray-600 "
                        placeholder="ex: Annual monthly check-up"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-[#24AE7C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={handleScheduleAppointment}
                    >
                      Schedule appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PatientDetails;
