import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip as RechartsTooltip,
} from 'recharts';
import './styles/RoomOverview.css';




function RoomOverview({ lights }) {

    function calculateAverageBrightness(data) {
        const roomData = data.reduce((acc, current) => {
            if (!acc[current.roomId]) {
                acc[current.roomId] = { count: 0, totalBrightness: 0 };
            }
            acc[current.roomId].count += 1;
            acc[current.roomId].totalBrightness += current.brightness;
            return acc;
        }, {});

        const averageData = Object.keys(roomData).map((roomId) => {
            const averageBrightness =
                roomData[roomId].totalBrightness / roomData[roomId].count;
            return { roomId: roomId, averageBrightness: averageBrightness.toFixed(2) };
        });

        return averageData;
    }



    const averageBrightnessData = calculateAverageBrightness(lights);

    console.log(averageBrightnessData);




    return (
        <div className="container">
            <h2 className='title'>Room Brightness Overview</h2>
            <LineChart
                width={600}
                height={300}
                data={averageBrightnessData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="averageBrightness" stroke="#0ECDD4" />
                <CartesianGrid stroke="#0ECDD4" strokeDasharray="5 5" />
                <XAxis dataKey="roomId" stroke="#0ECDD4" />
                <YAxis stroke="#0ECDD4" />
                <RechartsTooltip content={<CustomTooltip />} />
            </LineChart>
        </div>
    );
}

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p>{`${label} `}</p>
                <p>{`${payload[0].value} %`}</p>
            </div>
        );
    }

    return null;
}



export default RoomOverview;
