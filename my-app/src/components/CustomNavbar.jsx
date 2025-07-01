"use client";
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-cyan-400 h-12 py-2 px-4 flex justify-between items-center">
      <div>
        <a href="/#!" className="text-3xl font-semibold">
          <h1>Task Watcher</h1>
        </a>
      </div>
      <div>
        <ul className="flex  space-x-3">
          <li className="px-5 cursor-pointer">
            <Link href={'/'} className="hover:text-blue-200">Home</Link>
          </li>
          <li className="px-5">
          <Link href="/add-task" className="hover:text-blue-200"> Add Tasks</Link>
            
          </li>
          <li className="px-5 ">
          <a href="#!" className="hover:text-blue-200">Show Tasks</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="px-5 flex space-x-3">
          <li >
            <a href="#!"> Login </a>
          </li>
          <li className="px-5 ">
            <a href="#!"> Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
