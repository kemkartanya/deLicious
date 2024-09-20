import React from "react";

const OtpDrawer = () => {
  return (
    <div class="drawer-side">
      <label
        for="otp-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content p-0">
        <div
          className="bg-cover bg-center w-full h-screen content-end"
          style={{ backgroundImage: "url('/user-login-new.jpg')" }}
        >
          <div className="m-3 mr-8">
            <div className="bg-white flex flex-col min-h-96 min-w-80 rounded-lg p-10 flex justify-evenly">
              <h2 className="text-2xl">Enter OTP</h2>
              <input
                type="text"
                placeholder="Enter One Time Password"
                className="input input-bordered w-full"
              />
              <button className="btn btn-wide w-full">Submit</button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default OtpDrawer;
