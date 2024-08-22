import React, { useEffect, useState } from 'react';
import { auth, provider } from "./Config.js";
import { signInWithPopup } from 'firebase/auth';

function Signin() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  useEffect(() => {
    const [email, name] = localStorage.getItem('email', 'name');
    if (email) {
      setValue(email, name);
    }
  }, []); // Ensure this runs only once when the component mounts

  return (
    <div>
      <p>Welcome, {value ? value : "Guest"}</p>

      <button onClick={handleClick}>Signin with Google</button>
    </div>
  );
}

export default Signin;
