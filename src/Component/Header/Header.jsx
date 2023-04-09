import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='text-slate-700  bg-slate-100'>
                <nav className='flex  items-center justify-between  mx-20 bg-slate-100 p-6 rounded-md '>
                    <h1 className='text-4xl font-bold text-indigo-800'>Tech<span className='text-indigo-800'>Talent</span><span className='text-indigo-900'>Finder</span></h1>
                    <div className='text-2xl  font-semibold'>
                        <a className='mr-5' href=""> Home</a>
                        <a className='mr-5' href=""> Statistics</a>
                        <a className='mr-5' href=""> Applied jobs</a>
                        <a className='mr-5' href="">Blog</a>
                    </div>
                    <button className='border p-4 text-xl rounded-xl font-semibold bg-indigo-500 text-white '>Star Applying</button>
                </nav>
                <div className='flex mx-40 mt-20'>
                    <div>
                        <h1 className='font-bold text-5xl'>One Step</h1>
                        <h1 className='font-bold text-5xl mt-4'>Closer To Your</h1>
                        <h1 className='font-bold text-5xl mt-4 text-indigo-400'>Dream job</h1>
                        <p className='w-[500px] text-1xl font-medium mt-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='border rounded-xl p-3 mt-7 mb-7 bg-indigo-500 text-white font-semibold'>Get Started</button>
                    </div>
                    <div >
                        <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Header;