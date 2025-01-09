import React, { useState } from "react";
import Tabs from "./Tabs";
import YearToggle from "./YearToggle";

const IRDirector = () => {
  const tabs = [
    { path: "/ir-director", label: "IR Director" },
    { path: "/business-reports", label: "Business Reports" },
    { path: "/stock-information", label: "Stock Information" },
    { path: "/ir-materials", label: "IR Materials" },
  ];

  const [selectedYear, setSelectedYear] = useState("2024");
  const years = ["2024", "2023", "2022", "2021", "2020"];

  const handleYearToggle = (year) => {
    setSelectedYear(year);
  };

  // 데이터 하드코딩
  const data = {
    "2024": [
      { title: "Annual Report 2024", file: "Download" },
      { title: "Quarterly Report 2024 - 3", file: "Download" },
      { title: "Quarterly Report 2024 - 2", file: "Download" },
      { title: "Quarterly Report 2024 - 1", file: "Download" }
    ],
    "2023": [
      { title: "Annual Report 2023", file: "Download" },
      { title: "Quarterly Report 2023 - 3", file: "Download" },
      { title: "Quarterly Report 2023 - 2", file: "Download" },
      { title: "Quarterly Report 2023 - 1", file: "Download" }
    ],
    "2022": [
      { title: "Annual Report 2022", file: "Download" },
      { title: "Quarterly Report 2022", file: "Download" },
    ],
    "2021": [
      { title: "Annual Report 2021", file: "Download" },
      { title: "Quarterly Report 2021", file: "Download" },
    ],
    "2020": [
      { title: "Annual Report 2020", file: "Download" },
      { title: "Quarterly Report 2020", file: "Download" },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mt-8 mb-10">Investor Relations</h1>
      <Tabs tabs={tabs} />
      <div className="flex">
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

export default IRDirector;
