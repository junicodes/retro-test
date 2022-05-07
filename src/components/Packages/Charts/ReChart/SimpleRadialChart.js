import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const SimpleRadialChart = ({data}) => {
    console.log(data,"data")

    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
           <defs>
              <linearGradient id="simpleColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6694da" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="simpleColor2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d381c6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
              </linearGradient>
            </defs>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="A"
               stroke="#6694da"
               strokeWidth={2}
               fillOpacity={1}
               fill="url(#simpleColor)"
          />
          <Radar name="Lily" dataKey="B"
                      stroke="#d481c4"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#simpleColor2)"
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
}

export default SimpleRadialChart;