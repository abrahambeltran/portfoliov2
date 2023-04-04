import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-[#f5f5f5] backdrop-filter backdrop-blur-lg bg-opacity-40 flex justify-center items-center h-24 fill mx-auto px-4 sticky top-0 z-50 shadow">
            <div className="bg-[#ebebeb] text-black flex justify-center items-center rounded-full p-1">
                <ul class="flex">
                    <li>
                        <a
                            class="inline-block rounded-full py-1 px-4 active:bg-[#ffffff]"
                            href="#"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            class="inline-block rounded-full py-1 px-4 active:bg-white"
                            href="#"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            class="inline-block rounded-full py-1 px-4 active:bg-white"
                            href="#"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            class="inline-block rounded-full py-1 px-4 active:bg-white"
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
