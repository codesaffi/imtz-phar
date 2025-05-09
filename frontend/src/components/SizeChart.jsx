import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const SizeChart = () => {
  return (
    <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
<img className=" w-80 h-80" src={assets.size_chart} alt="" />
    </div>
  );
};

export default SizeChart;
