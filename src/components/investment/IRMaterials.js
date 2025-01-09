import React, { useState } from "react";
import Tabs from "./Tabs";
import YearToggle from "./YearToggle";

const IRMaterials = () => {
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

  const data = {
    "2024": [
      { title: "4차 주주서한 (분할합병 철회, '24.12.10)", file: "Download" },
      { title: "3차 주주서한 (ISS Report에 대한 반박, '24.12.03)", file: "Download" },
      { title: "2차 주주서한 ('24.12.03)", file: "Download" },
      { title: "투자자 NDR 설명자료 (24.11.27)", file: "Download" },
      { title: "주주서한 ('24.08.04)", file: "Download" },
      { title: "투자자 NDR 설명자료 (24.11.27)", file: "Download" },
      { title: "2024년 2분기 실적", file: "Download" },
      { title: "2024년 1분기 실적", file: "Download" },
      { title: "2023년 연간 경영실적 및 2024년 경영계획", file: "Download" },

    ],
    "2023": [
      { title: "Annual Report 2023", file: "Download" },
      { title: "Quarterly Report 2023 - 3", file: "Download" },
      { title: "Quarterly Report 2023 - 2", file: "Download" },
      { title: "Quarterly Report 2023 - 1", file: "Download" },
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

export default IRMaterials;
