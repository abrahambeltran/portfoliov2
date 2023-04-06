import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-[#f5f5f5] backdrop-filter backdrop-blur-lg bg-opacity-40 flex justify-center items-center h-24 fill mx-auto -my-10 px-4 sticky top-0 z-50 shadow">
            <div className="bg-[#fe5944] text-[#FCFFFA] flex justify-center items-center rounded-full p-1">
                <ul className="flex">
                    <li>
                        <a
                            className="inline-block rounded-full py-1 px-4 font-medium bg-[#b84030]"
                            href="#"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="inline-block rounded-full py-1 px-4 font-medium active:bg-[#b84030]"
                            href="#"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="inline-block rounded-full py-1 px-4 font-medium active:bg-[#b84030]"
                            href="#"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
