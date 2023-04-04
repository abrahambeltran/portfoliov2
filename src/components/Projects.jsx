import React from "react";

const Projects = () => {
    return (
        <div className="text-[#FCFFFA] grid justify-center">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
            />
            <div className="grid grid-cols-4 p-4 max-w-[1240px] my-[20px] mx-auto">
                <div className="grid grid-flow-row col-span-2">
                    <p className="md:text-5xl sm:text-3xl text-2xl bg-gray-300 p-1/2 flex justify-around shadow-lg">
                        <img src="/src/assets/PyNews.png" className="" />
                    </p>
                </div>
                <div className="mx-auto grid col-span-2 justify-center p-5 bg-[#FE5944] shadow-lg">
                    <p className="md:text-xl sm:text-l text-l font-bold p-3 text-[#FCFFFA]">
                        TF2 FLAN Charity Tournament Website
                    </p>
                    <p className="md:text-sm sm:text-sm text-sm p-3">
                        PyNews is written with Python using the Flask framework.
                        React was used for styling/managing the front end and
                        Javascript was used in conjunction with Python to call
                        the HackerNews API and sort the news. All information is
                        stored in an SQLite database and run on an ubuntu server
                        using nginx and gunicorn.
                    </p>
                    <p className="p-3 text-[#FCFFFA] font-bold">
                        Python, SQLite, React, Javascript, APIs
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 p-4 max-w-[1240px] my-[20px] mx-auto">
                <div className="mx-auto grid col-span-2 justify-center p-5 bg-gradient-to-t from-slate-50 to-slate-100 shadow-lg ">
                    <p className="md:text-xl sm:text-l text-l font-bold p-3 text-[#FCFFFA]">
                        TF2 FLAN Charity Tournament Website
                    </p>
                    <p className="md:text-sm sm:text-sm text-sm p-3">
                        PyNews is written with Python using the Flask framework.
                        React was used for styling/managing the front end and
                        Javascript was used in conjunction with Python to call
                        the HackerNews API and sort the news. All information is
                        stored in an SQLite database and run on an ubuntu server
                        using nginx and gunicorn.
                    </p>
                    <p className="p-3 text-[#385FDB] font-bold">
                        Python, SQLite, React, Javascript, APIs
                    </p>
                </div>
                <div className="grid grid-flow-row col-span-2">
                    <p className="md:text-5xl sm:text-3xl text-2xl bg-gray-300 p-1/2 flex justify-around shadow-lg">
                        <img src="/src/assets/PyNews.png" className="" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
