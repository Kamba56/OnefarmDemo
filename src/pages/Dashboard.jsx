import { Outlet } from "react-router-dom";
import DashHeader from "../components/dashboardComp/DashHeader";
import DashNav from "../components/dashboardComp/DashNav";
import { useState } from "react";

const Dashboard = () => {
  const [ heading, setHeader ] = useState('Hello Prince');

  const changeHeading = (title) => {
    setHeader(title);
  };
  
  const resetHeading = (title) => {
    setHeader('Hello Prince');
  }

  return (
    <>
    <DashNav />
      <div className="2xl:pl-[16%] pt-[310px] lg:pt-[136px] relative bg-[#f9f9f9] h-screen w-full">
        <DashHeader title={heading} />
        <div className="overflow-y-auto bg-[#f9f9f9]">
        <Outlet context={[changeHeading, resetHeading]} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
