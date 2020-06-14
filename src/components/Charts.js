import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';
const name=["Page-A", "Page-B","Page-C"];
const a=[300,200,300];
const b=[100,200,300];
const c=[100,300,300];
const data = [
  {
    name: {name}, uv: {a}, pv: {b}, amt: {c},
  }
];

export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nskpgcrz/';

  render() {
    return (
      <div>
        <h4>A demo of synchronized AreaCharts</h4>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
        <p>Maybe some other content</p>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          <Brush />
        </LineChart>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    );
  }
}
