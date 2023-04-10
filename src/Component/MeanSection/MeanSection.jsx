import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const MeanSection = () => {
    const job = useLoaderData();

    return (

        <div>
            <section>
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
            </section>

            <section>
                <h2 className='font-extrabold text-5xl text-[#1A1919] text-center mt-24 mb-9'>Job Category List</h2>

                <div className='grid grid-cols-4 mx-32 mt-20 mb-40 gap-10'>
                    <div className='bg-gray-200 rounded p-5'>
                        <img src="/src/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='font-semibold text-2xl mt-5'>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className='bg-gray-200 rounded p-5'>
                        <img src="/src/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='font-semibold text-2xl mt-5'>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className='bg-gray-200 rounded p-5'>
                        <img src="/src/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='font-semibold text-2xl mt-5'>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className='bg-gray-200 rounded p-5'>
                        <img src="/src/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='font-semibold text-2xl mt-5'>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                </div>

                <h2 className='font-extrabold text-5xl text-[#1A1919] text-center mt-24 mb-9'>Featured Jobs</h2>
            </section>


            <div className='grid grid-cols-2'>
                {
                    job.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>

        </div>
    );
};

export default MeanSection;