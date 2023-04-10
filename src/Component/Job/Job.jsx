import React from 'react';

const Job = ({ job }) => {

    const { id, title, company,schedule2, description, image, location, salary, schedule, } = job;

    return (
        <div>
            <section className='bg-gray-100 p-10 m-5 mx-auto w-[548px] h-[292px] rounded 
shadow-xl '>
                <img className='w-20' src={image} alt="" />
                <h2 className='text-2xl my-2'>{title}</h2>
                <h2 className='font-bold'>{company}</h2>
                <div className='flex gap-4'>
                    <p className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 p-3 rounded w-3/12 text-center my-2'>{schedule}</p>
                    <p className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 p-3 rounded w-3/12 text-center my-2'>{schedule2}</p>
                </div>
                <p>{location}</p>
                <p>{salary}</p>
            </section>
        </div>
    );
};

export default Job;