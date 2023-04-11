import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';

const Appliedjobs = () => {

    const job = useLoaderData();

    return (
        <div>
            <div>
                <div className='bg-slate-100 relative h-64'>
                    <h2 className='font-extrabold text-3xl text-[#1A1919] pt-20 text-center'>Applied Jobs</h2>
                    <img className=' absolute ml-20 mt-[-80px]' src="/src/assets/All Images/Vector.png" alt="" />
                    <img className=' absolute ml-[1100px] z-10 mt-[-250px] ' src="/src/assets/All Images/Vector-1.png" alt="" />
                </div>
                {
                    job.map(jobadd => <ApplyJob
                        key={jobadd.id}
                        jobadd={jobadd}
                    ></ApplyJob>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;