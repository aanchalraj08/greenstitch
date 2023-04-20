"use client";
import React, { useState } from "react";
import Home from "@/components/Home";
import Sidebar from "@/components/Sidebar";

const Page = () => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <Sidebar />
      <div className="sm:pl-64">
        <Home />
      </div>
    </div>
  );
};

export default Page;
