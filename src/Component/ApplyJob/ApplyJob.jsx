import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faDollarSign, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ApplyJob = ({ jobadd }) => {
    const { id, title, company, image, schedule, schedule2, salary, location } = jobadd;

    return (
        <div className='container '>
            <div className='flex justify-between border border-slate-300 w-7/12 rounded-lg mx-auto mt-10 p-2'>
                <div className='bg-slate-100 p-4 rounded-xl'>
                    <img className='w-32 h-20' src={image} alt="" />
                </div>
                <div className='ml-[-150px]'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <p>{company}</p>
                    <div className='flex mt-3'>
                    <button className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 rounded mr-2 p-1'>{schedule}</button>
                    <button className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 rounded text-center p-1'>{schedule2}</button>
                    </div>
                    <div className='flex mt-3'>
                        <p className='mr-5'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                        <p><FontAwesomeIcon icon={faDollarSign} />  {salary}</p>
                    </div>
                </div>
                <div>
                <Link to={`${id}`}> <button className='text-white mt-12 w-32 bg-gradient-to-r from-indigo-600 to-blue-500 p-3 rounded'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;