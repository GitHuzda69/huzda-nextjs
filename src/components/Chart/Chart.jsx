"use client";

import styles from "./Chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function Chart() {
  const data = [
    {
      name: "Jan",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Feb",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Mar",
      visit: 2000,
      click: 9800,
    },
    {
      name: "Apr",
      visit: 2780,
      click: 3908,
    },
    {
      name: "May",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Jun",
      visit: 2390,
      click: 3800,
    },
    {
      name: "July",
      visit: 3490,
      click: 4300,
    },
    {
      name: "Aug",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Sep",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Oct",
      visit: 2000,
      click: 3000,
    },
    {
      name: "Nov",
      visit: 2780,
      click: 3900,
    },
    {
      name: "Dec",
      visit: 2390,
      click: 3000,
    },
  ];

  return (
    <div className={styles.container}>
      <span className={styles.title}>Chart going here</span>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#0A0A0A", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#B8B8B8"
            strokeDasharray="1"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#B8B8B8"
            strokeDasharray="1"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
