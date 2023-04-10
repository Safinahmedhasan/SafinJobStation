import React from 'react';

const Jobcatagory = ({jobcatagory}) => {

    const { id, category, job,img} = jobcatagory;


    return (
        <div className='w-52 h-40 bg-slate-100 mx-auto rounded pt-5 pl-5 mt-10'>
           <img className='mb-5' src={img} alt="" />
           <h2 className='font-bold'>{category}</h2>
           <p>{job}</p>
        </div>
    );
};

export default Jobcatagory;