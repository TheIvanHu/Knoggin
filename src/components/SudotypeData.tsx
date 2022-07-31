import { Component } from "react";
import AppNavBar from "./NavBar";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
class SudotypeData extends Component {
  data = [
    {
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  render() {
    return (
      <>
        <AppNavBar />
        <h1>STATS</h1>
        <LineChart
          width={730}
          height={250}
          data={this.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        ;
      </>
    );
  }
}

export default SudotypeData;
