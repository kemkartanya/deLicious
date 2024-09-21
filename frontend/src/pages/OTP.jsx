import React from 'react'

function OTP({ onProceed }) {
  return (
    <div
      className="bg-cover bg-center w-full h-screen content-end"
      style={{ backgroundImage: "url('/user-login-bcg.svg')" }}
    >
      <div className="m-3 mr-8">
        <div className="bg-white flex flex-col min-h-96 rounded-xl p-10 flex justify-evenly">
          <h2 className="text-4xl">Sign In/Sign Up</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            className="input input-bordered w-full"
          />
          <button className="btn btn-wide w-full" onClick={onProceed}>Verify</button>
          <p className="text-lg">By signing in you agree to our <span className="text-red-600">terms and conditions</span></p>
        </div>
      </div>
    </div>
  )
}

export default OTP