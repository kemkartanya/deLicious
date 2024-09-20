import React from "react";

function Login() {
  return (
    <div
      className="bg-cover bg-center w-full h-screen content-end"
      style={{ backgroundImage: "url('/user-login-bcg.svg')" }}
    >
        <div className="m-3 mr-8">
            <div className="bg-white flex flex-col min-h-96 rounded-xl p-10 flex justify-evenly">
                <h2 className="text-4xl">Sign In/Sign Up</h2>
                <input type="text" placeholder="Mobile Number" className="input input-bordered w-full" />
                <button className="btn btn-wide w-full">Wide</button>
            </div>
        </div>
    </div>
  );
}

export default Login;
