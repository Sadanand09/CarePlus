import React from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  const handelGetStarted = () => {
    navigate("/form");
  };
  return (
    <div className="p-4 ">
      <section className="mb-12 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-semibold">Hi there 👋</h1>
        <p className="text-gray-500">Get started with Appointments.</p>
      </section>

      <form className="space-y-6 flex-1">
        <div>
          <p className="pb-3">Full Name</p>
          <div className="flex items-center bg-[#1A1D21] px-4 sm:w-4/12 md:w-5/12 rounded-lg border border-gray-600">
            <img src="/assets/icons/user.svg" alt="user icon" />
            <input
              className="ms-2 w-full bg-transparent py-3 outline-none"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <p>Email</p>
          <div className="flex items-center bg-[#1A1D21] px-4 md:w-5/12 sm:w-4/12  rounded-lg border border-gray-600">
            <img src="/assets/icons/email.svg" alt="email icon" />
            <input
              className="ms-2 w-full bg-transparent py-3 outline-none"
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
        </div>

        <div>
          <p>Phone number</p>
          <div className="flex items-center bg-[#1A1D21] px-4 md:w-5/12 sm:w-4/12  rounded-lg border border-gray-600">
            <input
              className="w-full py-3 bg-transparent outline-none"
              type="tel"
              placeholder="23249798439"
            />
          </div>
        </div>

        <div className="md:w-5/12 sm:w-4/12">
          <button
            type="submit"
            className="bg-[#24AE7C] w-full p-3 rounded-lg text-white"
            onClick={handelGetStarted}
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
