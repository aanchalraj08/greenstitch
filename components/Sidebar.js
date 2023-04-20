"use cleint";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import {
  Up,
  Down,
  Dashicon,
  Helpicon,
  Fileicon,
  Bottom1,
  Bottom2,
  Bottom3,
} from "@/public/icons";

const inter = Inter({ subsets: ["latin"] });
const Sidebar = () => {
  const [dashboardDrawer, setDashboardDrawer] = useState(false);
  const [fileDrawer, setFileDrawer] = useState(false);
  const [helpDrawer, setHelpDrawer] = useState(false);

  const Dashboarditems = [
    {
      id: 1,
      name: "Record",
    },
    {
      id: 2,
      name: "Report",
    },
    {
      id: 3,
      name: "Analyse",
    },
    {
      id: 4,
      name: "Learn",
    },
  ];

  return (
    <div className={inter.className}>
      <aside
        id="cta-button-sidebar"
        className="fixed  left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between ">
          <ul className="space-y-2 ">
            <li>
              <img
                src="logo.png"
                style={{
                  position: "absolute",
                  width: "133px",
                  height: "41px",
                  left: "18px",
                  top: "24px",
                }}
              ></img>
            </li>
            <l1 className="">
              <p className="text-xl p-2 px-5 pb-14 font-normal font-sans">
                Greenstitch
              </p>
            </l1>

            <l1>
              <p className="text-xs p-2 px-5 font-normal leading-5">
                D A S H B O A R D
              </p>
            </l1>

            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setDashboardDrawer(!dashboardDrawer)}
              >
                <Dashicon />
                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Dashboard
                </span>
                {dashboardDrawer ? <Up /> : <Down />}
              </button>
              <ul
                id="dropdown-example"
                class={`${dashboardDrawer ? "block" : "hidden"}  py-2 `}
              >
                {Dashboarditems.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <l1>
              <p className="pt-8 text-xs p-2 px-5 font-normal leading-5">
                P A G E S
              </p>
            </l1>
            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setHelpDrawer(!helpDrawer)}
              >
                <Helpicon />
                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Help Center
                </span>
                {helpDrawer ? <Up /> : <Down />}
              </button>
              <ul
                id="dropdown-example"
                class={`${helpDrawer ? "block" : "hidden"}  py-2 `}
              >
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    See FAQ
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setFileDrawer(!fileDrawer)}
              >
                <Fileicon />
                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  File Manager
                </span>
                {fileDrawer ? <Up /> : <Down />}
              </button>
              <ul
                id="dropdown-example"
                class={`${fileDrawer ? "block" : "hidden"}  py-2 `}
              >
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    See Files
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Upload Files
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex flex-row justify-around">
            <button className="hover:bg-gray-100">
              <Bottom1 />
            </button>
            <button className="hover:bg-gray-100">
              <Bottom2 />
            </button>
            <button className="hover:bg-gray-100">
              <Bottom3 />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
