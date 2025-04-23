
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { IconSearch, IconDownload, IconFileExport } from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import logosidebar from "../../assets/Group 429.png";
import dashboardIcon from "../../assets/Rectangle 5913.png";
import notificationIcon from "../../assets/mingcute_notification-fill.png";
import usersIcon from "../../assets/Users Icon.png";
import postsIcon from "../../assets/majesticons_logout-half-circle.png";
import helpIcon from "../../assets/tabler_ad-filled.png";
import dashicon from "../../assets/dashicons_welcome-write-blog.png";

import profileIcon from "../../assets/majesticons_logout-half-circle.png";


import image1 from "../../assets/bg-gradient-img.png";
import image2 from "../../assets/bg-gradient-img (1).png";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <img 
          src={dashboardIcon} 
          alt="Dashboard"
          className="h-5 w-5 text-[#AEB9E1]"
        />
      ),
      className: "bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-lg",
    },
    {
      label: "Notifications",
      href: "#",
      icon: (
        <img 
          src={notificationIcon} 
          alt="Notifications"
          className="h-5 w-5 text-[#AEB9E1]"
        />
      ),
      className: "bg-[#343B4F] text-[#AEB9E1] rounded-lg ",
    },
    {
      label: "Users",
      href: "#",
      icon: (
        <img 
          src={usersIcon} 
          alt="Users"
          className="h-5 w-5 text-[#AEB9E1]"
        />
      ),
      className: "bg-[#343B4F] text-[#AEB9E1] rounded-lg ",
    },
    {
      label: "Flagged Posts",
      href: "#",
      icon: (
        <img 
          src={postsIcon} 
          alt="Posts"
          className="h-5 w-5 text-[#AEB9E1]"
        />
      ),
      className: "bg-[#343B4F] text-[#AEB9E1] rounded-lg ",
    },
    {
      label: "Advertisements",
      href: "#",
      icon: (
        <img 
          src={helpIcon} 
          alt="Help"
          className="h-5 w-5 text-[#AEB9E1]"
        />
      ),
      className: "bg-[#343B4F] text-[#AEB9E1] rounded-lg ",
    },
    {
      label: "Blogs",
      href: "#",
      icon: (
        <img 
          src={dashicon} 
          alt="Help"
          className="h-5 w-5 text-[#AEB9E1] "
        />
      ),
      className: "bg-[#343B4F] text-[#AEB9E1] rounded-lg ",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-full bg-neutral-900">
      <div className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden md:flex-row",
        "h-screen",
      )}>
        <Sidebar open={open} setOpen={setOpen} animate={false}>
          <SidebarBody className="relative h-screen bg-[#000000] overflow-hidden">
            
          <img src={image1} alt="Bottom gradient" className="left-0 h-[100%] width-[539px] top-0 absolute" />
          <img src={image2} alt="Top gradient" className=" absolute h-[100%] width-[539px]  right-0  bottom-0" />


         
          {/* height: 100%;
    width: 539px; */}

         
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto relative z-10">
              <Logo />
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink 
                    key={idx} 
                    link={link} 
                    className={cn(
                      "text-[#AEB9E1] hover:text-white transition-colors",
                      link.className
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <SidebarLink
                link={{
                  label: "Logout",
                  href: "#",
                  icon: (
                    <img 
                      src={profileIcon}
                      alt="Profile"
                      className="h-7 w-7 shrink-0 rounded-full"
                    />
                  ),
                }}
                className="text-[#AEB9E1] hover:text-white transition-colors"
              />
            </div>
          </SidebarBody>
        </Sidebar>
        <Dashboard />
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <div className="space-y-4">
      <img 
        src={logosidebar}
        alt="WheeShare"
        className="rounded"
      />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-lg p-[1px]">
          <div className="bg-neutral-900 h-full w-full rounded-lg" />
        </div>
        <div className="relative flex items-center">
          <IconSearch className="absolute left-3 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search for..."
            className="w-full bg-transparent py-2 pl-10 pr-4 text-sm text-white placeholder-neutral-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

// Dashboard component with statistics and graph
const Dashboard = () => {
  return (
    <div className="flex flex-1 bg-neutral-900 p-4 sm:p-6">
      <div className="flex h-full w-full flex-1 flex-col gap-4 sm:gap-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          {/* Welcome Text */}
          <div className="order-1 sm:order-none">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Welcome back, Nouman 👋</h2>
            <p className="text-neutral-400 text-sm mt-1">This is the Admin Dashboard. Track the Analytics here.</p>
          </div>
          
          {/* Action Buttons */}
          <div className="order-2 sm:order-none flex flex-wrap sm:flex-nowrap items-center gap-3">
            {/* Export Data Button */}
            <div className="relative inline-block rounded-lg p-[2px] bg-gradient-to-r from-[#18C8FF] to-[#933FFE] w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#19161C] px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 w-full">
                Export data
                <IconDownload className="h-4 w-4" />
              </button>
            </div>
            
            {/* Create Report Button */}
            <button className="px-4 py-2 text-sm bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-lg text-white w-full sm:w-auto">
              Create report
            </button>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Our total sales" value="500" trend="up" />
          <StatCard title="Monthly users" value="3.6K" trend="up" />
          <StatCard title="New sign ups" value="456" trend="up" />
          <StatCard title="Connections" value="2.3K" trend="up" />
        </div>

        {/* Revenue Section */}
        <div className="flex-1 bg-neutral-800/50 rounded-xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-6">
            <div>
              <h3 className="text-lg font-medium text-white">Total revenue</h3>
              <p className="text-2xl sm:text-3xl font-semibold text-white">$27.8K <span className="text-green-400 text-sm">+20%</span></p>
            </div>
            <select className="bg-neutral-800 text-neutral-300 rounded-lg px-3 py-2 text-sm w-full sm:w-auto">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-[250px] sm:h-[300px] w-full bg-gradient-to-b from-blue-500/20 to-transparent rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  trend: 'up' | 'down';
}

const StatCard = ({ title, value, trend }: StatCardProps) => {
  return (
    <div className="bg-neutral-800/50 p-4 rounded-xl hover:bg-neutral-800/70 transition-colors duration-200">
      <div className="flex flex-col h-full">
        <h3 className="text-neutral-400 text-sm mb-2 line-clamp-1">{title}</h3>
        <p className="text-2xl font-semibold text-white mb-2">{value}</p>
        <div className="mt-auto">
          <div className="flex items-center">
            <span className={cn(
              "text-sm font-medium",
              trend === "up" ? "text-green-400" : "text-red-400"
            )}>
              {trend === "up" ? "+12%" : "-12%"}
            </span>
            <span className="text-neutral-400 text-sm ml-2">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};
