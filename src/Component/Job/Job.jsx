import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, title, company, schedule2, description, image, location, salary, schedule, } = job;

    return (
        <div>
            <section className='bg-slate-100 p-10 m-5 mx-auto w-[548px] h-[362px] rounded 
shadow-xl '>
                <img className='w-20' src={image} alt="" />
                <h2 className='text-2xl my-2 font-bold'>{title}</h2>
                <h2 className=''>{company}</h2>
                <div className='flex gap-4'>
                    <button className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 p-3 rounded w-3/12 text-center my-2'>{schedule}</button>
                    <button className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 p-3 rounded w-3/12 text-center my-2'>{schedule2}</button>
                </div>
                <div className='flex mt-2'>
                    <p className='mr-5'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faDollarSign} /> Salary : {salary}</p>
                </div>


                <Link to={`${id}`}> <button className='text-white mt-5 bg-gradient-to-r from-indigo-600 to-blue-500 p-3 rounded w-3/12 text-center my-2'>View Details</button></Link>
            </section>
        </div>
    );
};

export default Job;