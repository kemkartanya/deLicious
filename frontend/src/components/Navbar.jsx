import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import LoginDrawer from "./LoginDrawer";
import OtpDrawer from "./OtpDrawer";

const Navbar = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const logout = () => {
    setUser("");
    localStorage.clear();
  };

  return (
    <div className="md:px-28 py-4 shadow navbar bg-base-100">
      <div className="flex-1">
        <a href="/">
          <img src="/licious-logo.svg" alt="Licious Logo" className="h-12" />
        </a>
      </div>
      <div>
        <a href="/receipe-generator" className="btn btn-ghost">
          Receipe Generator
        </a>
        <a href="/popular-receipes" className="btn btn-ghost">
          Popular Receipes
        </a>
      </div>

      {user?.id ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="flex gap-2 items-center">
              <FiUser className="text-xl" />{" "}
              <div className="text-lg">Profile</div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/profile" className="justify-between">
                User Preferences
              </a>
            </li>
            <li>
              <a href="/favorite-receipes" className="justify-between">
                Favorite Receipes
              </a>
            </li>

            <li>
              <a onClick={() => logout()}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <div class="drawer drawer-end">
            <input id="login-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              <label for="login-drawer" class="drawer-button btn">
                <FiUser className="text-xl" />
                Login
              </label>
            </div>
            <LoginDrawer />
          </div>

          <div className="drawer drawer-end">
            <input id="otp-drawer" type="checkbox" className="drawer-toggle" />
            <OtpDrawer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
