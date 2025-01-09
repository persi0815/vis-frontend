import React from "react";
import Tabs from "./Tabs";

const IRBusiness = () => {
  const tabs = [
    { path: "/ir-director", label: "Audit Report" },
    { path: "/ir-business", label: "Business Report" },
    { path: "/ir-stock", label: "Stock Info" },
    { path: "/ir-data", label: "IR Data" },
  ];

  const data = [
    { title: "2024년 사업보고서 (2024 BUSINESS REPORT)", file: "Download" },
    { title: "2023년 사업보고서 (2023 BUSINESS REPORT)", file: "Download" },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mt-8 mb-10">Investor Relations</h1>
      <Tabs tabs={tabs} />
      <div className="w-full pl-6">
        <table className="table-auto w-full text-lg text-left text-gray-700 dark:text-gray-300">
          <thead>
            <tr className="border-b-4 border-gray-500">
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">File</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
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
  );
};

export default IRBusiness;
