import React from "react";

const Hero = () => {
    return (
        <div className="text-black">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
            />
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 p-4">
                <div className="p-16 grid grid-flow-row bg-[#FCFFFA] rounded-3xl shadow-lg">
                    <p className="md:text-5xl sm:text-3xl text-2xl text-[#fe5944] font-bold ">
                        Hi, I'm Abraham Beltran
                    </p>
                    <h1 className="md:text-4xl sm:text-2xl text-xl font-bold">
                        I am a full stack web developer
                    </h1>
                    <p>
                        I'm currently focused on finding a software development
                        job to kick-off my career. I look forward to
                        contributing to a professional business environment
                        whilst learning new skills and developing as a
                        programmer and systems designer.
                    </p>
                    <div className="grid grid-cols-3 justify-evenly">
                        <button className="bg-[#fe5944] text-[white] w-[100px] p-3 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                            Resume
                        </button>
                        <button className="bg-[#fe5944] text-[white] w-[100px] p-3 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                            <i class="devicon-github-original-wordmark colored" />
                        </button>
                        <button className="bg-[#fe5944] text-[white] w-[100px] p-3 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                            <i class="devicon-linkedin-plain-wordmark"></i>
                        </button>
                    </div>
                </div>
                {/* second column */}
                <div>
                    <div className="mx-auto text-left flex flex-col justify-center p-5 bg-[#FCFFFA] rounded-3xl shadow-lg">
                        <div>
                            <p className="md:text-3xl sm:text-3xl text-xl font-bold p-3">
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
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
