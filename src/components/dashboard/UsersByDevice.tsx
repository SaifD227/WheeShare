import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface DeviceData {
  name: string;
  users: number;
}

const deviceData: DeviceData[] = [
  { name: 'Desktop users', users: 4100 },
  { name: 'Phone app users', users: 643 },
  { name: 'Laptop users', users: 1000 },
];

const UsersByDevice = () => {
  const totalUsers = deviceData.reduce((sum, item) => sum + item.users, 0);

  const chartOptions = {
    chart: {
      type: 'radialBar' as const,
      background: 'transparent'
    },
    plotOptions: {
      radialBar: {
        startAngle: -100,
        endAngle: 0,
        hollow: {
          size: '70%',
        },
        track: {
          background: '#2D2D2D',
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            fontSize: '30px',
            color: '#fff',
            fontWeight: 300,
            offsetY: 10
          }
        }
      }
    },
    colors: ['#933FFE'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#18C8FF'],
        stops: [10, 100]
      }
    },
    stroke: {
      lineCap: 'round' as const
    },
    labels: ['Users'],
    theme: {
      mode: 'dark' as const
    }
  };

  const series = [Math.round((totalUsers / 10000) * 100)]; 

  return (
    <div className="bg-neutral-800/50 rounded-xl    p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
        {/* Gauge Chart */}
        <div>
          <div className="text-center mb-4">
            <h3 className="text-lg font-medium text-white">Users by device</h3>
            <p className="text-2xl font-semibold text-white mt-2">{totalUsers.toLocaleString()}</p>
          </div>
          <div className="relative">
            <ReactApexChart
              options={chartOptions}
              series={series}
              type="radialBar"
              height={250}
            />
            {/* Device List */}
            <div className="mt-4 space-y-3">
              {deviceData.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" 
                      style={{ 
                        backgroundColor: index === 0 ? '#933FFE' : 
                                       index === 1 ? '#18C8FF' : '#6C3BFF'
                      }} 
                    />
                    <span className="text-neutral-400 text-sm">{device.name}</span>
                  </div>
                  <span className="text-white text-sm">{device.users.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Subscribers Table */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">Recent Subscribers</h3>
            <select className="bg-neutral-800 text-neutral-300 rounded-lg px-3 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last month</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-neutral-400 text-sm border-b border-neutral-700">
                  <th className="text-left pb-3">Name</th>
                  <th className="text-left pb-3">Date</th>
                  <th className="text-left pb-3">Package</th>
                  <th className="text-right pb-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-700/50">
                  <td className="py-4 text-white">John Parker</td>
                  <td className="py-4 text-neutral-400">May 30, 10:05 AM</td>
                  <td className="py-4 text-neutral-400">Premium</td>
                  <td className="py-4 text-white text-right">$499</td>
                </tr>
                <tr className="border-b border-neutral-700/50">
                  <td className="py-4 text-white">Cristiano</td>
                  <td className="py-4 text-neutral-400">Dec 28, 2:19 AM</td>
                  <td className="py-4 text-neutral-400">Startup</td>
                  <td className="py-4 text-white text-right">$59</td>
                </tr>
                <tr className="border-b border-neutral-700/50">
                  <td className="py-4 text-white">Paul</td>
                  <td className="py-4 text-neutral-400">Dec 29, 12:54 AM</td>
                  <td className="py-4 text-neutral-400">Basic</td>
                  <td className="py-4 text-white text-right">$100</td>
                </tr>
                <tr className="border-b border-neutral-700/50">
                  <td className="py-4 text-white">Abdullah</td>
                  <td className="py-4 text-neutral-400">Dec 28, 2:32 PM</td>
                  <td className="py-4 text-neutral-400">Standard</td>
                  <td className="py-4 text-white text-right">$200</td>
                </tr>
                <tr className="border-b border-neutral-700/50">
                  <td className="py-4 text-white">Boris</td>
                  <td className="py-4 text-neutral-400">Dec 27, 2:20 PM</td>
                  <td className="py-4 text-neutral-400">Standard</td>
                  <td className="py-4 text-white text-right">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersByDevice; 