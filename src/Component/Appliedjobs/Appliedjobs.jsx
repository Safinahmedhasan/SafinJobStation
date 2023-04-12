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
                    <img className=' absolute ml-20 mt-[-80px]' src="https://i.ibb.co/2YWh2Bm/Vector.png" alt="" />
                    <img className=' absolute ml-[1100px] z-10 mt-[-250px] ' src="https://i.ibb.co/sCTXY9s/Vector-1.png" alt="" />
                    <div className='ml-[850px] mt-48'>
                        <button className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 rounded mr-2 p-1'>Full-Time</button>
                        <button className='hover:bg-indigo-600 hover:text-white text-indigo-600 border-solid border-2 border-indigo-600 rounded text-center p-1'>Part-Time</button>
                    </div>

                </div>
                <div className='mt-32'>
                    {
                        job.map(jobadd => <ApplyJob
                            key={jobadd.id}
                            jobadd={jobadd}
                        ></ApplyJob>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Appliedjobs;