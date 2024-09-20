import React from "react";
import { FiUser } from "react-icons/fi";
import Login from "../pages/Login";

const Navbar = () => {
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
      </div>

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
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>

      <div>
        <div class="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer-4" class="drawer-button btn btn-primary">
            <FiUser className="text-xl" /> 
              Login
            </label>
          </div>
          <div class="drawer-side">
            <label
              for="my-drawer-4"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-1/3 p-0">
              <Login/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
