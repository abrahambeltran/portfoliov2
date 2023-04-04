import React from "react";

const About = () => {
    return (
        <div className="text-black">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
            />
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 p-4">
                <div className="p-16 grid grid-flow-row bg-[#FCFFFA] rounded-3xl col-span-2 shadow-lg">
                    <p className="md:text-3xl sm:text-2xl text-xl text-[#fe5944] font-bold ">
                        About me
                    </p>
                    <p className="text-[black]">
                        Hello! My name is Abraham and I enjoy programming and
                        creating programs for the internet. I've had a lifetime
                        passion for technology and I’ve had the privilege of
                        going to Florida State University to further my
                        education on how to build, maintain, and secure tech. My
                        main focus these days is building accessible, innovative
                        products and digital experiences.
                    </p>
                </div>
                <div className="p-16 grid grid-flow-row bg-[#FCFFFA] rounded-3xl col-span-1 shadow-lg">
                    <p>Last Spotify song played</p>
                </div>
            </div>
        </div>
    );
};

export default About;
