import { FC } from 'react';
import image1 from "../../assets/Group 1000004504.png";

const LastChart: FC = () => {
  const countryData = [
    { country: "United states", percentage: "30%", color: "#9333EA" },
    { country: "United Kingdom", percentage: "25%", color: "#9333EA" },
    { country: "Canada", percentage: "25%", color: "#2563EB" },
    { country: "Australia", percentage: "10%", color: "#06B6D4" },
    { country: "Spain", percentage: "10%", color: "#E5E7EB" },
  ];

  return (
    <div className="bg-neutral-800/50 rounded-xl pb-10 p-8 w-[1000px] h-[500px]">
      <div className="flex justify-between">
        <div className="space-y-6 w-[300px]">
          <div>
            <h3 className="text-white text-xl font-medium mb-2">Users by country</h3>
            <div className="flex items-center gap-2">
              <span className="text-white text-3xl font-semibold">12.4 K</span>
              <span className="text-[#22C55E] text-sm bg-[#22C55E]/10 px-2 py-1 rounded">28.5%↗</span>
            </div>
          </div>
          <div className="space-y-5">
            {countryData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-[220px]">
                  <div className="text-gray-300 text-sm mb-2">{item.country}</div>
                  <div className="w-full bg-[#2D2D3A] h-1.5 rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: item.percentage,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
                <span className="text-gray-300 text-sm ml-4">{item.percentage}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[600px] ml-12">
          <img src={image1} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LastChart;
