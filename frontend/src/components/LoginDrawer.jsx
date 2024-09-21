import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const LoginDrawer = () => {
  const [mobile, setMobile] = useState("");
  const openOtpDrawer = () => {
    document.getElementById("login-drawer").checked = false;
    document.getElementById("otp-drawer").checked = true;
  };

  const sendOtp = async () => {
    try {
      if (mobile.length !== 10) {
        toast.error("enter 10 digit phone number");
      }

      const { data } = await axios.post(
        "http://localhost:8000/api/v1/send-otp",
        {
          mobile: mobile,
        }
      );

      if (data.status == "success") {
        localStorage.setItem("mobile", mobile);
        openOtpDrawer();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="drawer-side">
      <Toaster />
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
                type="tel"
                placeholder="Mobile Number"
                className="input input-bordered w-full"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <button className="btn btn-wide w-full" onClick={sendOtp}>
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
