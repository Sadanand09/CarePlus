import React from "react";

import AuthForm from "../../components/Forms/AuthForm.js";
import AdminAccess from "../Admin/AdminAccess.js";

function Home() {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <div className="flex mt-14">
        <div className="remove-scrollbar mx-auto my-auto  container flex-1">
          <div className="sub-container  text-left p-4">
            <img
              src="/assets/icons/logo-full.svg"
              alt="CarePulse Logo "
              className="mb-12 h-10 w-auto"
            />

            <div className="h-full flex flex-col ">
              <AuthForm />

              <div className="text-sm mt-20 flex justify-between px-3 w-4/12 ">
                <p className="text-gray-600">© 2024 CarePulse</p>
                <AdminAccess />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/assets/images/onboarding-img.png"
        alt="Onboarding"
        className="side-img w-full hidden sm:block md:block lg:max-w-[50%] fixed right-0 h-full object-cover"
      />
    </div>
  );
}

export default Home;
