import React from "react";
import { Nutt, Top1, Top2, Top3 } from "@/public/icons";
import { Inter } from "next/font/google";
import Chart from "./chart";
import DoughnutChart from "./Doughnut";
import Nut from "./Doughnut";

const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  return (
    <div className={inter.className}>
      <div className="w-full bg-gray-100 h-screen ">
        <div className=" flex flex-row bg-white p-2 shadow-md">
          <form className="w-full px-5">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full mt-1 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   "
                placeholder="Search... "
                required
              />
            </div>
          </form>

          <div className="flex flex-row my-2 justify-around w-40 ">
            <Top1 />
            <Top2 />
            <Top3 />
          </div>
        </div>
        <div>
          <div className="flex flex-row ">
            <div className=" h-[184px] w-[276px] m-8 bg-white rounded-xl shadow-md">
              <div className="flex flex-col p-5 items-start ">
                <p className=" font-normal text-base">Carbon Footprint</p>
                <p className="font-semibold text-2xl">2,412,314t</p>
                <p className="font-semibold text-2xl"> CO2e</p>
                <div className=" bg-[#DCFFF5] rounded-2xl px-2 py-1 my-5">
                  <p className="text-xs text-[#20C997] font-semibold">-45%</p>
                </div>
              </div>
            </div>
            <div className=" h-[184px] w-[276px] my-8 bg-white rounded-xl shadow-md">
              <div className="flex flex-col p-5 items-start ">
                <p className=" font-normal text-base">Emissions by spinning</p>
                <p className="font-semibold text-2xl">72,3694t</p>
                <p className="font-normal text-base text-[#929292]"> CO2e</p>
                <div className=" bg-[#DCFFF5] rounded-2xl px-4 py-2 my-5">
                  <p className="text-xs text-[#20C997] font-semibold">-60%</p>
                </div>
              </div>
            </div>
            <div className="h-[184px] w-[276px] my-8 ml-8 bg-white rounded-xl shadow-md">
              <div className="flex flex-col justify-center items-start p-5">
                <p className=" font-normal text-base">
                  Emission By Transportation{" "}
                </p>
                <p className="font-semibold text-2xl">361,874t</p>
                <p className="font-normal text-base text-[#929292]"> CO2e</p>
                <div className=" bg-gray-100 rounded-2xl px-2 py-1 my-5">
                  <p className="text-xs text-gray-500 font-semibold">0.00</p>
                </div>
              </div>
            </div>
            <div className="h-[184px] w-[276px] m-8  bg-white rounded-xl shadow-md">
              <div className="flex flex-col justify-center items-start p-5">
                <p className=" font-normal text-base">Emission by Carding </p>
                <p className="font-semibold text-2xl">241,231</p>
                <p className="font-normal text-base text-[#929292]"> CO2e</p>
                <div className="flex flex-row justify-center items-center">
                  <div className=" bg-[#DCFFF5] rounded-xl px-4 py-2 my-5">
                    <p className="text-xs text-[#20C997] font-semibold">
                      +0.6%
                    </p>
                  </div>
                  <div className="  rounded-2xl px-2 py-1 my-5">
                    <p className="text-xs text-gray-500 font-semibold">
                      From 4.6%{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="bg-white w-[800px] h-[382px] mx-8 my-1 rounded-xl shadow-md">
            <div className="flex flex-row justify-around">
              <p className="text-2xl font-bold p-7">Carbon Footprint</p>
              <div className="flex flex-row gap-4 justify-center items-center">
                <div className="flex flex-row gap-1 items-center">
                  <div className="rounded-full bg-[#57CC78] w-[9px] h-[9px] "></div>
                  <p className="text-xs font-semibold">Spinning</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div className="rounded-full bg-[#55DBDB] w-[9px] h-[9px] "></div>
                  <p className="text-xs font-semibold">Transportation</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div className="rounded-full bg-[#E2FF32] w-[9px] h-[9px] "></div>
                  <p className="text-xs font-semibold">Carding</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div className="rounded-full bg-[#FEC102] w-[9px] h-[9px] "></div>
                  <p className="text-xs font-semibold">Heating & Cooling</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <Chart />
            </div>
          </div>
          <div className="bg-white w-[375px] h-[377px] my-1 rounded-xl shadow-md">
            <div className="flex flex-col">
              <div className="w-full justify-center text-center p-3">
                <p className="font-bold text-xl">Top emissions by type</p>
              </div>
              <div className=" w-full h-full  flex justify-center items-center">
                <Nutt />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-row justify-between w-[190px]">
                  <div className="flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-[#57CC78] w-[9px] h-[9px] "></div>
                    <p className="text-xs font-semibold">Spinning</p>
                  </div>
                  <p className="text-xs font-semibold">22%</p>
                </div>
                <div className="flex flex-row justify-between w-[190px]">
                  <div className="flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-[#55DBDB] w-[9px] h-[9px] "></div>
                    <p className="text-xs font-semibold">Transportation</p>
                  </div>
                  <p className="text-xs font-semibold">16%</p>
                </div>
                <div className="flex flex-row justify-between w-[190px]">
                  <div className="flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-[#E2FF32] w-[9px] h-[9px] "></div>
                    <p className="text-xs font-semibold">Carding</p>
                  </div>
                  <p className="text-xs font-semibold">27%</p>
                </div>
                <div className="flex flex-row justify-between w-[190px]">
                  <div className="flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-[#FEC102] w-[9px] h-[9px] "></div>
                    <p className="text-xs font-semibold">Heating & Cooling</p>
                  </div>
                  <p className="text-xs font-semibold">35%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
