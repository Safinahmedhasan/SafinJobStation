import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faDollarSign, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ApplyJob = ({ jobadd }) => {
    const { title, company, image, schedule, schedule2, salary, location } = jobadd;

    return (
        <div className='container'>
            <div className='flex justify-between border border-slate-300 w-7/12 rounded-lg mx-auto mt-10 p-2'>
                <div className='bg-slate-100 p-4 rounded-xl'>
                    <img className='w-32 h-20' src={image} alt="" />
                </div>
                <div className='ml-[-200px]'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <p>{company}</p>
                    <div className='flex'>
                        <p className='mr-5'>{schedule}</p>
                        <p>{schedule2}</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-5'>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
                <div>
                    <button className='text-white mt-9 w-32 bg-gradient-to-r from-indigo-600 to-blue-500 p-3 rounded'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;