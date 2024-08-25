import React from "react";

function Message() {
  return (
    <div>
      <div>
        <img
          src="/assets/icons/logo-full.svg"
          alt="CarePulse Logo "
          className=" h-10 w-auto mx-auto my-14"
        />
      </div>
      <div className="text-center">
        <img
          src="/assets/gifs/success.gif"
          alt="success gif"
          className="mx-auto my-auto block"
        />
        <p className="font-semibold text-4xl m-3">
          Your <span className="text-green-500">Patient Request</span> has been
        </p>
        <p className="font-semibold text-4xl mb-5">Successfully submitted!</p>
        <p>We'll in touch shortly to confirm.</p>
      </div>
    </div>
  );
}

export default Message;
