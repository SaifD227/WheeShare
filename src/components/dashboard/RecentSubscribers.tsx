import React from 'react';

interface Subscriber {
  name: string;
  date: string;
  package: string;
  amount: string;
}

const subscribers: Subscriber[] = [
  { name: 'John Parker', date: 'May 30, 10:05 AM', package: 'Premium', amount: '$499' },
  { name: 'Cristiano', date: 'Dec 28, 2:19 AM', package: 'Startup', amount: '$59' },
  { name: 'Paul', date: 'Dec 29, 12:54 AM', package: 'Basic', amount: '$100' },
  { name: 'Abdullah', date: 'Dec 28, 2:32 PM', package: 'Standard', amount: '$200' },
  { name: 'Boris', date: 'Dec 27, 2:20 PM', package: 'Standard', amount: '$200' },
  { name: 'John Wick', date: 'Dec 26, 9:49 AM', package: 'Standard', amount: '$300' }
];

const RecentSubscribers = () => {
  return (
    <div className="bg-neutral-800/50  rounded-xl p-4 sm:p-6">
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
            {subscribers.map((subscriber, index) => (
              <tr key={index} className="border-b border-neutral-700/50 last:border-none">
                <td className="py-4 text-white">{subscriber.name}</td>
                <td className="py-4 text-neutral-400">{subscriber.date}</td>
                <td className="py-4 text-neutral-400">{subscriber.package}</td>
                <td className="py-4 text-white text-right">{subscriber.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSubscribers; 