import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faDollarSign, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Appliedjobs from '../Appliedjobs/Appliedjobs';
import { addToDb, getShoppingCart } from '../../Utilities/fakedb';
import { toast } from 'react-hot-toast';
const Jobdetails = () => {

    const [jobs, setJobs] = useState([]);
    const [jobAdd, setJobAdd] = useState([])

    let { jobId } = useParams();
    const jobsSingleData = useLoaderData();

    useEffect(() => {
        fetch("/public/Job.json")
            .then((response) => response.json())
            .then((data) => setJobs(data));
    }, []);


    // const storeJobData = jobs?.filter((job) => job.id === jobId); 
    const storeJobData = jobsSingleData.filter((job) => job.id === jobId);


    const { title, salary, location, jobResponsibilities, educationalRequirements, experiences, phone, Email, jobDescription } = storeJobData[0];


    const handleAddToJob = (storeJobData) => {
        const newJob = [...jobAdd, storeJobData];
        setJobAdd(newJob);
        addToDb(storeJobData.id);
        // console.log(newJob)
        toast.success("Job Added is list 😊")
    }

    return (


        <div>
            <div className='bg-slate-100 relative h-64'>
                <h2 className='font-extrabold text-3xl text-[#1A1919] pt-20 text-center'>Job Details</h2>
                <img className=' absolute ml-20 mt-[-80px]' src="https://ibb.co/4gKtyx9" alt="" />
                <img className=' absolute ml-[1100px] z-10 mt-[-250px] ' src="https://ibb.co/dtNHY4k" alt="" />
            </div>


            <div className='container mx-auto mt-20 mb-20 grid md:grid-cols-3'>
                <div className='p-20 md:col-span-2'>
                    <h2><span className='mt-2 font-semibold'>Job Description : </span>{jobDescription}</h2>
                    <h2 className='mt-4'><span className='mt-2 font-semibold'> Job Responsibility :</span> {jobResponsibilities}</h2>
                    <h2 className='mt-4'><span className='mt-2 font-semibold'>Educational Requirements :</span> {educationalRequirements}</h2>
                    <h2 className='mt-4'><span className='mt-2 font-semibold'>Experiences :</span> {experiences}</h2>
                </div>

                <div>

                    <div className=' bg-slate-100 w-96 h-96 p-5  rounded-lg container mx-auto'>
                        <div className=''>
                            <h2 className='font-semibold mt-5 mb-3 text-2xl'>Job Details</h2>
                            <hr></hr>

                            <p className='mt-3'> <span className='mt-2 font-semibold'><FontAwesomeIcon icon={faDollarSign} />  Salary  : </span>{salary}</p>
                            <p className='mt-2'> <span className='mt-2 font-semibold'><FontAwesomeIcon icon={faCalendarCheck} />  Job Title : </span>{title}</p>
                        </div>

                        <div className=' md:col-span-1'>
                            <h2 className='font-semibold text-2xl mt-5 mb-3'>Contact Information</h2>
                            <hr></hr>

                            <p className='mt-3'><span className='font-semibold'><FontAwesomeIcon icon={faPhone} /> Phone : </span>{phone}</p>
                            <p className='mt-2'><span className='font-semibold'><FontAwesomeIcon icon={faEnvelope} /> Email : </span>{Email}</p>
                            <p className='mt-2'> <span className='mt-2 font-semibold'><FontAwesomeIcon icon={faLocationDot} /> Address : </span>{location}</p>
                        </div>
                        <button onClick={() => handleAddToJob(storeJobData[0])} className='text-white mt-20 bg-gradient-to-r from-indigo-600 to-blue-500 p-3 rounded w-full text-center my-2' >Apply Now</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Jobdetails;