import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className='text-slate-700  bg-slate-100'>
                <div className='md:flex flex items-center mx-20 bg-slate-100 p-6 rounded-md '>
                    <h1 className='text-4xl font-bold text-indigo-800'>SafinJobStation</h1>

                    <div className='text-2xl  font-semibold  md:flex flex justify-between'>

                        <div onClick={ () => setOpen(!open)}  className='text-indigo-800 md:hidden'>
                            <span className='ml-72'>{open === true ?  <FontAwesomeIcon icon={faXmark} /> :<FontAwesomeIcon icon={faBars} />}</span>
                        </div>
                        <nav className={`md:flex absolute md:static md:ml-32 md:mt-5 mt-10 ${open ? 'top-6' :'-top-36'}`}>
                            <Link to="/" className='mr-5'> Home</Link>
                            <Link to="/statistics" className='mr-5'> Statistics</Link>
                            <Link to="/appliedjobs" className='mr-5'> Applied jobs</Link>
                            <Link to="/blog" className='mr-5'>Blog</Link>
                            <button className=' md:ml-32 border p-4 text-xl rounded-xl font-semibold bg-indigo-500 text-white '>Star Applying</button>
                        </nav>

                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;