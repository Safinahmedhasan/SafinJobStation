import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import Jobcatagory from '../JobCatagory/Jobcatagory';

const MeanSection = () => {
    const job = useLoaderData();
    const [jobcatagory , setJobcatagory] = useState([])

    useEffect( () => {
        fetch('Jobcategory.json')
        .then(res => res.json())
        .then(data => setJobcatagory(data))
    })

    return (

        <div>

            <section className='bg-slate-100 p-5'>
                <div className='mx-40 mt-20 grid md:grid-cols-2'>
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

            <h2 className='font-extrabold text-5xl text-[#1A1919] text-center mt-24 mb-5'>Job Category List</h2>
            <p className='text-center mb-20'>Explore thousands of job opportunities with all the information you need. Its your future</p>

           <div className='grid md:grid-cols-4 grid-cols-2'>
            {
                jobcatagory.map(jobcatagory => <Jobcatagory
                    key={jobcatagory.id}
                    jobcatagory={jobcatagory}
                ></Jobcatagory>)
            }
           </div>

            <h2 className='font-extrabold text-5xl text-[#1A1919] text-center mt-24 mb-5'>Featured Jobs</h2>
            <p className='text-center mb-20'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid md:grid-cols-2 mb-20'>
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