import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='text-slate-700  bg-slate-100'>
                <nav className='flex  items-center justify-between  mx-20 bg-slate-100 p-6 rounded-md '>
                    <h1 className='text-4xl font-bold text-indigo-800'>Safin<span className='text-indigo-800'>Job</span><span className='text-indigo-900'>Station</span></h1>
                    <div className='text-2xl  font-semibold'>
                        <Link to="/" className='mr-5'>Home</Link>
                        <Link to="/statistics" className='mr-5'> Statistics</Link>
                        <Link to="/appliedjobs" className='mr-5'> Applied jobs</Link>
                        <Link to="/blog" className='mr-5'>Blog</Link>
                    </div>
                    <button className='border p-4 text-xl rounded-xl font-semibold bg-indigo-500 text-white '>Star Applying</button>
                </nav>
            </div> 

        </div>
    );
};

export default Header;