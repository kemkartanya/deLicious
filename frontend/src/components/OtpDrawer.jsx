import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const OtpDrawer = () => {
  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    try {
      const mobile = localStorage.getItem("mobile");

      if (mobile.length !== 10) {
        toast.error("enter 10 digit phone number");
      }

      const { data } = await axios.post(
        "http://localhost:8000/api/v1/verify-otp",
        {
          mobile: mobile,
          otp: otp,
        }
      );

      if (data.status == "success") {
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success(data.message);
        document.getElementById("otp-drawer").checked = false;

        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      toast.error("couldn't login");
    }
  };

  return (
    <div class="drawer-side">
      <Toaster />
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
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="btn btn-wide w-full" onClick={verifyOtp}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default OtpDrawer;
