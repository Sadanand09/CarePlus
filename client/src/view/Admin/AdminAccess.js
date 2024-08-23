import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AdminAccess() {
  const navigate = useNavigate();
  const [accessModal, setAccessModal] = useState(false);
  const [warning, setWarning] = useState(""); 

  const [a, setA] = useState(""); 
  const [b, setB] = useState(""); 
  const [c, setC] = useState("");
  const [d, setD] = useState(""); 

  // Predefined variables
  const correctA = "0";
  const correctB = "0";
  const correctC = "0";
  const correctD = "0";

  // Refs for input fields
  const inputRefA = useRef(null);
  const inputRefB = useRef(null);
  const inputRefC = useRef(null);
  const inputRefD = useRef(null);

  
  // Determine button color based on input correctness
  const areAllInputsFilled = a && b && c && d;
  const buttonClass =
    areAllInputsFilled &&
    a === correctA &&
    b === correctB &&
    c === correctC &&
    d === correctD
      ? "bg-[#24AE7C]"
      : "bg-blue-600";

  const handleAdmin = (e) => {
    e.preventDefault(); 

    // Check if all inputs match the predefined variables
    if (a === correctA && b === correctB && c === correctC && d === correctD) {
      navigate("/admin"); 
    } else {
      // Reset inputs if any are incorrect
      setWarning("Access Denied: Incorrect credentials.");
      setA("");
      setB("");
      setC("");
      setD("");
      inputRefA.current.focus();
    }
  };

  // Move focus to the next input field
  const handleInputChange = (event, nextRef) => {
    const { value } = event.target;
    if (value.length === 1 && nextRef) {
      nextRef.current.focus();
    } else if (value.length === 0 && nextRef) {
      nextRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <p
          className="cursor-pointer text-[#24AE7C]"
          onClick={() => setAccessModal(!accessModal)} // Toggle modal visibility
        >
          Admin
        </p>
      </div>
      {warning && <p className="text-red-600">{warning}</p>}{" "}
      {accessModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div
              className={`relative p-1 bg-white rounded-lg shadow dark:bg-gray-800`}
            >
              <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                <div>
                  <h3 className="text-xl font-semibold">Admin Access</h3>
                  <p>Please enter the access credentials.</p>
                </div>
                <button
                  onClick={() => setAccessModal(false)}
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
                <form className="space-y-4" onSubmit={handleAdmin}>
                  <div className="flex justify-around text-[#24AE7C] caret-transparent text-7xl">
                    <div className="h-12 w-12 ">
                      <input
                        type="password"
                        id="inputA"
                        value={a}
                        onChange={(e) => {
                          setA(e.target.value);
                          handleInputChange(e, inputRefB);
                        }}
                        ref={inputRefA}
                        className={`pb-6 text-center block h-full w-full p-2 outline-none rounded-lg bg-transparent border border-gray-600 
                        `}
                        required
                        maxLength={1}
                      />
                    </div>

                    <div className="h-12 w-12">
                      <input
                        type="password"
                        id="inputB"
                        value={b}
                        onChange={(e) => {
                          setB(e.target.value);
                          handleInputChange(e, inputRefC);
                        }}
                        ref={inputRefB}
                        className={`pb-6 text-center block h-full w-full p-2 outline-none rounded-lg bg-transparent border border-gray-600 
                        `}
                        required
                        maxLength={1}
                      />
                    </div>

                    <div className="h-12 w-12 ">
                      <input
                        type="password"
                        id="inputC"
                        value={c}
                        onChange={(e) => {
                          setC(e.target.value);
                          handleInputChange(e, inputRefD);
                        }}
                        ref={inputRefC}
                        className={`pb-6 text-center block h-full w-full p-2 outline-none rounded-lg bg-transparent border border-gray-600 
                        `}
                        maxLength={1}
                        required
                      />
                    </div>

                    <div className="h-12 w-12 ">
                      <input
                        type="password"
                        id="inputD"
                        value={d}
                        onChange={(e) => setD(e.target.value)}
                        ref={inputRefD}
                        className={`pb-6 text-center block h-full w-full p-2 outline-none rounded-lg bg-transparent border border-gray-600 `}
                        required
                        maxLength={1}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full text-white ${buttonClass} outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminAccess;
