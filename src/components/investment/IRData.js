import React, { useState } from "react";
import Tabs from "./Tabs";
import YearToggle from "./YearToggle";

const IRData = () => {
  const tabs = [
    { path: "/ir-director", label: "Audit Report" },
    { path: "/ir-business", label: "Business Report" },
    { path: "/ir-stock", label: "Stock Info" },
    { path: "/ir-data", label: "IR Data" },
  ];

  const [selectedYear, setSelectedYear] = useState("2024");
  const years = ["2025", "2024", "2023"];

  const handleYearToggle = (year) => {
    setSelectedYear(year);
  };

  const data = {
    "2024": [
      { title: "4th shareholder letter (withdrawal of spin-off merger, '24.12.10)", file: "Download" },
      { title: "3rd Shareholder Letter (Rebuttal to ISS Report, '24.12.03)", file: "Download" },
      { title: "2nd shareholder letter ('24.12.03)", file: "Download" },
      { title: "Shareholder letter ('24.08.04)", file: "Download" },
      { title: "Investor NDR explanatory material (24.11.27)", file: "Download" },
      { title: "2024 second quarter performance", file: "Download" },
      { title: "First quarter performance of 2024", file: "Download" },
    ],
    "2023": [
      { title: "2023 annual management performance and 2024 management plan", file: "Download" },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mt-8 mb-10">Investor Relations</h1>
      <Tabs tabs={tabs} />
      <div className="flex mt-8">
        <YearToggle years={years} selectedYear={selectedYear} handleYearToggle={handleYearToggle} />
        <div className="w-3/4 pl-6">
          <table className="table-auto w-full text-lg text-left text-gray-700 dark:text-gray-300">
            <thead>
              <tr className="border-b-4 border-gray-500">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">File</th>
              </tr>
            </thead>
            <tbody>
              {data[selectedYear]?.map((item, index) => (
                <tr key={index} className="border-b border-gray-400 text-sm">
                  <td className="px-6 py-6 font-semibold">{item.title}</td>
                  <td className="px-6 py-6">
                    <button className="text-blue-500 hover:underline">{item.file}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IRData;
