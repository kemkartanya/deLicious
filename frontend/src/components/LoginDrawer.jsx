import React from "react";

const LoginDrawer = () => {
  const openOtpDrawer = () => {
    document.getElementById("login-drawer").checked = false;
    document.getElementById("otp-drawer").checked = true;
  };
  return (
    <div class="drawer-side">
      <label
        for="login-drawer"
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
              <h2 className="text-2xl">Sign In/Sign Up</h2>
              <input
                type="text"
                placeholder="Mobile Number"
                className="input input-bordered w-full"
              />
              <button className="btn btn-wide w-full" onClick={openOtpDrawer}>
                Proceed Via OTP
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default LoginDrawer;
