import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {


    const marks = [
        {
            assignment: "assignment 1",
            assignmentNo: 1,
            mark: 57
        },
        {
            assignment: "assignment 2",
            assignmentNo: 2,
            mark: 60
        },
        {
            assignment: "assignment 3",
            assignmentNo: 3,
            mark: 60
        },
        {
            assignment: "assignment 4",
            assignmentNo: 4,
            mark: 48
        },
        {
            assignment: "assignment 5",
            assignmentNo: 5,
            mark: 57
        },
        {
            assignment: "assignment 6",
            assignmentNo: 6,
            mark: 55
        },
        {
            assignment: "assignment 7",
            assignmentNo: 7,
            mark: 55

        },
        {
            assignment: "assignment 8",
            assignmentNo: 8,
            mark: 56
        }
    ]

    return (


        <div className='container ml-40 mt-10'>
           <LineChart
                width={800}
                height={400}
                data={marks}
            >

                <Line dataKey="mark"></Line>
                <XAxis dataKey="assignment"/>
                <Tooltip/>
            </LineChart>
        </div>
    );
};

export default Statistics;