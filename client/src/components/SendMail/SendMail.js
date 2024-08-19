import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function SendMail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hxrjp06", // Service ID
        "template_7ua0j8n", // Template ID
        form.current, // Form reference
        "GxIORGD9KCYvN56M1" // Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="text-black bg-gray-400">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />

        <button
          type="submit"
          value="Send"
          className="bg-green-500 text-red-700 cursor-pointer"
        ></button>
      </form>
    </div>
  );
}

export default SendMail;
