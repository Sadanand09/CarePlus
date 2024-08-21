import React from "react";
import RegistrationForm from "../../components/Forms/RegistrationForm";

function Form() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-4/5 mx-auto mb-9">
        <section className="remove-scrollbar container mx-auto">
          <div className="flex flex-col h-screen justify-between ms-5 mt-14">
            <img
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              className="mb-12 h-10 w-fit"
              alt="Logo"
            />
            <div>
              <h1 className="header font-semibold text-4xl">Welcome 👋</h1>
              <p>Let us know about yourself.</p>
            </div>
            <div>
              <RegistrationForm />
            </div>
          </div>
        </section>
      </div>
      <img
        src="assets/images/register-img.png"
        height={1000}
        width={1000}
        className="hidden h-full lg:block lg:max-w-[25%] fixed right-0"
        alt="Registration"
      />
    </div>
  );
}

export default Form;
