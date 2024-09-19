import React from "react";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="px-28 py-4 shadow navbar bg-base-100">
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
            <a className="justify-between">User Preferences</a>
          </li>
          {/* <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
