import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Revenue = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Car Speed (km/h)',
        data: [60, 80, 70, 100, 90, 120, 110]
      },
      {
        name: 'Car RPM',
        data: [1500, 2000, 1800, 2500, 2300, 2800, 2600]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area' as const
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth' as const
      },
      xaxis: {
        type: 'datetime' as const,
        categories: [
          "2023-01-01T00:00:00.000Z",
          "2023-01-01T01:00:00.000Z",
          "2023-01-01T02:00:00.000Z",
          "2023-01-01T03:00:00.000Z",
          "2023-01-01T04:00:00.000Z",
          "2023-01-01T05:00:00.000Z",
          "2023-01-01T06:00:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
      </div>
    </div>
  );
};

export default Revenue;
