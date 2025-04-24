import React from "react";
import ReactApexChart from "react-apexcharts";

interface CountryData {
  country: string;
  users: number;
  percentage: number;
}

const countryData: CountryData[] = [
  { country: "United States", users: 3000, percentage: 30 },
  { country: "United Kingdom", users: 2500, percentage: 25 },
  { country: "Canada", users: 2500, percentage: 25 },
  { country: "Australia", users: 1000, percentage: 10 },
  { country: "Spain", users: 1000, percentage: 10 },
];

const UsersByCountry = () => {
  const totalUsers = 12.4;

  const barOptions = {
    chart: {
      type: "bar" as const,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "40%",
        borderRadius: 4,
      },
    },
    colors: ["#933FFE"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: countryData.map((item) => item.country),
      labels: {
        style: {
          colors: "#AEB9E1",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#AEB9E1",
        },
      },
    },
    grid: {
      borderColor: "#2D2D2D",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    theme: {
      mode: "dark" as const,
    },
  };

  const barSeries = [
    {
      name: "Users",
      data: countryData.map((item) => item.percentage),
    },
  ];

  return (
    <div className="bg-neutral-800/50 rounded-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-white">Users by country</h3>
          <p className="text-2xl font-semibold text-white flex items-center gap-2">
            {totalUsers}K<span className="text-green-400 text-sm">+55.3%</span>
          </p>
        </div>
        <select className="bg-neutral-800 text-neutral-300 rounded-lg px-3 py-2 text-sm">
          <option>Last 7 days</option>
          <option>Last month</option>
          <option>Last year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Visualization */}
        <div className="bg-neutral-800/30 rounded-lg p-4">
          <div className="relative h-[200px] w-full">
            {/* World Map Background - Replace with actual dotted map SVG */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                <path
                  d="M0 0 L800 0 L800 400 L0 400 Z"
                  fill="#2D2D2D"
                  fillOpacity="0.5"
                />
                {/* Add dotted pattern here */}
                <pattern
                  id="dotPattern"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="1" fill="#4B5563" />
                </pattern>
                <rect width="800" height="400" fill="url(#dotPattern)" />
              </svg>
            </div>
            {/* Location Markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Add glowing dots for each location */}
              <div
                className="w-3 h-3 rounded-full bg-[#933FFE] shadow-lg shadow-[#933FFE]/50 animate-pulse"
                style={{ position: "absolute", left: "20%", top: "30%" }}
              />
              <div
                className="w-3 h-3 rounded-full bg-[#18C8FF] shadow-lg shadow-[#18C8FF]/50 animate-pulse"
                style={{ position: "absolute", left: "45%", top: "20%" }}
              />
              <div
                className="w-3 h-3 rounded-full bg-[#6C3BFF] shadow-lg shadow-[#6C3BFF]/50 animate-pulse"
                style={{ position: "absolute", left: "30%", top: "25%" }}
              />
              <div
                className="w-3 h-3 rounded-full bg-[#18C8FF] shadow-lg shadow-[#18C8FF]/50 animate-pulse"
                style={{ position: "absolute", left: "80%", top: "60%" }}
              />
              <div
                className="w-3 h-3 rounded-full bg-[#933FFE] shadow-lg shadow-[#933FFE]/50 animate-pulse"
                style={{ position: "absolute", left: "50%", top: "40%" }}
              />
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div>
          <ReactApexChart
            options={barOptions}
            series={barSeries}
            type="bar"
            height={200}
          />
        </div>
      </div>

      {/* Country List */}
      <div className="mt-6 space-y-4">
        {countryData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: index % 2 === 0 ? "#933FFE" : "#18C8FF",
                }}
              />
              <span className="text-neutral-400">{item.country}</span>
            </div>
            <span className="text-white">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersByCountry;
