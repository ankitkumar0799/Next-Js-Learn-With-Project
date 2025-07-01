"use client";
import { Link } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
   <footer className="h-40 bg-cyan-400">
    <div className="flex ">
    <div>
      <h1>
        Welcome to Work Manager
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus dolores fugiat! Enim, assumenda aliquid? Dicta exercitationem officiis assumenda, quae voluptate harum delectus sequi quod repudiandae dolorem corrupti recusandae iusto!0</p>
      </h1>
    </div>
    <div>
    <h1>
       <ul>
       <li><Link href="/">Home</Link></li>
        <li><Link href="/add-task">Add Tasks</Link></li>
        <li> <Link href="/">Show Tasks</Link></li>
       </ul>
      </h1>
    </div>
    </div>
   </footer>
  )
}

export default Footer