import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";

const AssignmentMark = () => {

    const data = [
        {
            name: "Page A",
            Marks: 4000,
            Quize: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            Marks: 3000,
            Quize: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            Marks: 2000,
            Quize: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            Marks: 2780,
            Quize: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            Marks: 1890,
            Quize: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            Marks: 2390,
            Quize: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            Marks: 3490,
            Quize: 4300,
            amt: 2100
        }
    ];
    return (
        <div>
            <h1>Assignment</h1>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="Marks" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="Quize"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />

            </LineChart>

        </div>
    );
};

export default AssignmentMark;