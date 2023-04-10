import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
const Jobdetails = () => {

    const [jobs, setJobs] = useState([]);

    let { jobId } = useParams();
    const jobsSingleData = useLoaderData();

    useEffect(() => {
        fetch("/public/Job.json")
            .then((response) => response.json())
            .then((data) => setJobs(data));
    }, []);

    // const storeJobData = jobs?.filter((job) => job.id === jobId); 
    const storeJobData = jobsSingleData.filter((job) => job.id === jobId);


    const { id , title} = storeJobData[0]

    return (
        <div>
            <h2>{id}</h2>
            <h2>{title}</h2>
        </div>
    );
};

export default Jobdetails;