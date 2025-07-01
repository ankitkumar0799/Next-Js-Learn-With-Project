"use client";
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-cyan-600">
          Task Watcher
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-cyan-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/add-task" className="hover:text-cyan-600 transition">
              Add Task
            </Link>
          </li>
          <li>
            <Link href="/show-tasks" className="hover:text-cyan-600 transition">
              Show Tasks
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-1 rounded-md border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon (Optional for future) */}
        {/* <div className="md:hidden">
          <button>
            <MenuIcon />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default CustomNavbar;
