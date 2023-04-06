import React from "react";

const Hero = () => {
    return (
        <div className="text-black ">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
            />
            <div className="bg-[#fe5944] w-100%">
                <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 grid-cols-1 p-4">
                    <div className="mx-auto text-left flex flex-col justify-center p-16 bg-[#FCFFFA]">
                        <p className="md:text-5xl sm:text-3xl text-2xl text-[#fe5944] font-extrabold ">
                            Hi, I'm Abraham Beltran
                        </p>
                        <h1 className="md:text-4xl sm:text-2xl text-xl font-bold py-2">
                            I am a full stack web developer
                        </h1>
                        <p className="">
                            I'm currently focused on finding a software
                            development job and I look forward to contributing
                            to a professional environment whilst learning new
                            skills and developing as a programmer and systems
                            designer.
                        </p>
                        <div className="grid grid-cols-3 grid-rows-1 gap-4 py-2">
                            <button className="bg-[#fe5944] text-[white] w-[100px] h-[50px] rounded-md font-medium my-6 mx-auto md:mx-0">
                                Resume
                            </button>
                            {/* <button className="w-[80px] h-[50px] rounded-md my-6 mx-auto md:mx-0">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </button>
                        <button className="w-[80px] h-[50px] rounded-md my-6 mx-auto md:mx-0">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" />
                        </button>*/}
                        </div>
                    </div>
                    {/* second column */}
                    <div>
                        <div className="mx-auto text-left flex flex-col justify-center p-5 bg-[#FCFFFA]">
                            <div>
                                <p className="md:text-3xl sm:text-3xl text-xl text-[#fe5944] font-extrabold p-3">
                                    Technical Skills
                                </p>
                            </div>
                            <div className="grid grid-cols-4 grid-rows-3 m-4 gap-5 p-5">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
