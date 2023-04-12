import React from 'react';
import './Statistic.css'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const Statistic = () => {

    const marks = [
        {
            assignment: "assignment 1",
            mark: 57
        },
        {
            assignment: "assignment 2",
            assignmentNo: 2,
            mark: 60
        },
        {
            assignment: "assignment 3",
            mark: 60
        },
        {
            assignment: "assignment 4",
            mark: 48
        },
        {
            assignment: "assignment 5",
            mark: 55
        },
        {
            assignment: "assignment 6",
            mark: 55
        },
        {
            assignmentNo: 7,
            mark: 60
        },
        {
            assignment: "assignment 8",
            mark: 56
        }
    ]



    return (
        <div className='rechart-container'>
            <h2 className='rechart-title'>Assignment Mark Charts</h2>

            <div>
                <ComposedChart
                    width={800}
                    height={400}
                    data={marks}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                    className='rechart'
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="assignment" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistic;