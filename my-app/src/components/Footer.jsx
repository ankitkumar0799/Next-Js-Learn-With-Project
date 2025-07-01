"use client";
import { Facebook, Instagram, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Left - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Work Manager</h2>
          <p className="text-gray-400">
            Streamline your productivity with our task management solution.
            Stay focused, organized, and achieve more.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="/add-task" className="hover:text-white transition">Add Task</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">About Us</a>
            </li>
          </ul>
        </div>

        {/* Right - Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <Youtube size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Work Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
