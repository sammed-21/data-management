"use client";
import Link from "next/link";
import React from "react";
// import DarkModeToggle from "./DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
// import Menu from "./Menu";
// import { MotionConfig, motion } from "framer-motion";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "AddCustomer",
    url: "/addCustomer",
  },
  
];

const Navbar = () => {
  const path = usePathname()
    // const session = useSession();
    const router = useRouter();
    return (
          <div className='flex px-3  h-[10vh] items-center justify-between   bg-black text-white      '>
          <Link href="/">
          <h2 className="font-bold-xl font-mono">
            <Link href={'/'} >User Data Management</Link>
          </h2>
         </Link>
         <div className="flex gap-2 items-center">
              
              {/* <DarkModeToggle/> */}
              <div className="flex gap-4 items-center">
            {links.map((link) => (
                
              <Link key={link.id} href={link.url} className={`${link.url === path ? "font-bold  " : "font-mono"}`}>
                <div  > 
                {link.title}
                </div>
              </Link>
                  ))}
               
                  
         </div>
          {/* MOBILE MENU
          <div className="z-100 md:hidden  ">
            <Menu />
          </div> */}
                </div>

    </div>   
 
  );
};

export default Navbar;