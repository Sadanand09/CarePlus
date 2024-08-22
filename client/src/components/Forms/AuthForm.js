import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../GoogleSignin/Config.js";
import { signInWithPopup } from "firebase/auth";

const AuthForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // State to store username

  // Handles the Google Sign-in process
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setEmail(data.user.email);
        setUsername(data.user.displayName); // Set the username from Google profile
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("username", data.user.displayName); // Store the username in localStorage

        // Redirect the user to the /form route after successful login
        navigate("/form");
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  // UseEffect to check for email and username in localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedUsername = localStorage.getItem("username"); // Retrieve the stored username
    if (storedEmail && storedUsername) {
      setEmail(storedEmail);
      setUsername(storedUsername); // Set the stored username to the state
    }
  }, []);

  // Navigates to the form page when the "Get Started" button is clicked
  const handelGetStarted = () => {
    navigate("/form");
  };

  return (
    <div className="p-4">
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
              value={username} // Pre-fill the input with the username
               // Make the input read-only if you don't want it to be editable
            />
          </div>
        </div>

        <div>
          <p>Email</p>
          <div className="flex items-center bg-[#1A1D21] px-4 md:w-5/12 sm:w-4/12 rounded-lg border border-gray-600">
            <img src="/assets/icons/email.svg" alt="email icon" />
            <input
              className="ms-2 w-full bg-transparent py-3 outline-none"
              type="email"
              placeholder="johndoe@gmail.com"
              value={email} // Pre-fill the input with the email
               // Make the input read-only if you don't want it to be editable
            />
          </div>
        </div>

        <div>
          <p>Phone number</p>
          <div className="flex items-center bg-[#1A1D21] px-4 md:w-5/12 sm:w-4/12 rounded-lg border border-gray-600">
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
            className="bg-[#24AE7C] w-full p-3 mb-5 rounded-lg text-white"
            onClick={handelGetStarted}
          >
            Get Started
          </button>
        </div>
      </form>
      <hr className="md:w-5/12 sm:w-4/12"></hr>
      <div className="md:w-5/12 sm:w-4/12 mt-5">
        <button
          onClick={handleClick}
          type="submit"
          className="bg-white w-full p-3 rounded-lg text-black"
        >
          Signin with Google
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
