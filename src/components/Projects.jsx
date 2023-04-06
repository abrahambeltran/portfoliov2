import React from "react";

const Projects = () => {
    return (
        <div className="text-[#FCFFFA] grid justify-center">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
            />
            <div class="wrap max-w-[1240px] my-[20px] mx-auto p-4">
                <div className="grid grid-cols-10">
                    <div className="z-20 row-span-full col-span-6 col-end-6 self-center p-4 bg-[#FE5944] text-[#FCFFFA]">
                        <p className="md:text-xl sm:text-l text-l font-bold p-3">
                            Personal Financial Dashboard
                        </p>
                        <p className="md:text-sm sm:text-sm text-sm p-3">
                            PyNews is written with Python using the Flask
                            framework. React was used for styling/managing the
                            front end and Javascript was used in conjunction
                            with Python to call the HackerNews API and sort the
                            news. All information is stored in an SQLite
                            database and run on an ubuntu server using nginx and
                            gunicorn.
                        </p>
                        <p className="p-3 text-[#FCFFFA] font-bold">
                            Python, SQLite, React, Javascript, APIs
                        </p>
                    </div>
                    <div className="row-span-full col-span-6 col-end-11 self-center shadow-xl">
                        <img src="/src/assets/PyNews.png" className="" />
                    </div>
                </div>
            </div>
            <div class="wrap max-w-[1240px] my-[20px] mx-auto p-4">
                <div className="grid grid-cols-10">
                    <div className="row-span-full col-start-1 col-span-6 self-center shadow-xl">
                        <img src="/src/assets/PyNews.png" className="" />
                    </div>
                    <div className="row-span-full col-span-6 col-start-6 col-end-11 self-center p-4 text-[#FCFFFA] bg-[#FE5944]">
                        <p className="md:text-xl sm:text-l text-l font-bold p-3">
                            Turbo Chat end-to-end encrypted chatroom
                        </p>
                        <p className="md:text-sm sm:text-sm text-sm p-3">
                            PyNews is written with Python using the Flask
                            framework. React was used for styling/managing the
                            front end and Javascript was used in conjunction
                            with Python to call the HackerNews API and sort the
                            news. All information is stored in an SQLite
                            database and run on an ubuntu server using nginx and
                            gunicorn.
                        </p>
                        <p className="p-3 text-[#FCFFFA] font-bold">
                            Python, SQLite, React, Javascript, APIs
                        </p>
                    </div>
                </div>
            </div>
            <div class="wrap max-w-[1240px] my-[20px] mx-auto p-4">
                <div className="grid grid-cols-10">
                    <div className="z-20 row-span-full col-span-6 col-end-6 self-center p-4 bg-[#FE5944] text-[#FCFFFA]">
                        <p className="md:text-xl sm:text-l text-l font-bold p-3">
                            PyNews Full Stack Website
                        </p>
                        <p className="md:text-sm sm:text-sm text-sm p-3">
                            PyNews is written with Python using the Flask
                            framework. React was used for styling/managing the
                            front end and Javascript was used in conjunction
                            with Python to call the HackerNews API and sort the
                            news. All information is stored in an SQLite
                            database and run on an ubuntu server using nginx and
                            gunicorn.
                        </p>
                        <p className="p-3 text-[#FCFFFA] font-bold">
                            Python, SQLite, React, Javascript, APIs
                        </p>
                    </div>
                    <div className="row-span-full col-span-6 col-end-11 self-center shadow-xl">
                        <img src="/src/assets/PyNews.png" className="" />
                    </div>
                </div>
            </div>
            <div class="wrap max-w-[1240px] my-[20px] mx-auto p-4">
                <div className="grid grid-cols-10">
                    <div className="row-span-full col-start-1 col-span-6 self-center border-[#FE5944] shadow-xl">
                        <img src="/src/assets/PyNews.png" className="" />
                    </div>
                    <div className="row-span-full col-span-6 col-start-6 col-end-11 self-center p-4 text-[#FCFFFA] bg-[#FE5944]">
                        <p className="md:text-xl sm:text-l text-l font-bold p-3">
                            TF2 FLAN Charity Tournament Website
                        </p>
                        <p className="md:text-sm sm:text-sm text-sm p-3">
                            PyNews is written with Python using the Flask
                            framework. React was used for styling/managing the
                            front end and Javascript was used in conjunction
                            with Python to call the HackerNews API and sort the
                            news. All information is stored in an SQLite
                            database and run on an ubuntu server using nginx and
                            gunicorn.
                        </p>
                        <p className="p-3 text-[#FCFFFA] font-bold">
                            Python, SQLite, React, Javascript, APIs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
