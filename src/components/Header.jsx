import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] py-[10px] items-center  flex justify-between mx-auto">
                <div className="text-3xl font-bold">
                    Wajahat Ali
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }

                <ul className='hidden md:flex text-white gap-5'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* RESPONSIVENESS MENU */}
                <ul className={' md:hidden w-full h-screen text-white fixed bg-black top-[88px] ${toggle ? "left-[0]" : "left-[-100%]"} '}>
                <li className='p-3'>Home</li>
                <li className='p-3'>Company</li>
                <li className='p-3'>Resources</li>
                <li className='p-3'>About</li>
                <li className='p-3'>Contact</li>
            </ul>
        </div>
        </div >
    )
}

export default Header