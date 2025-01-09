import React, { useState } from "react";
import YearToggle from "./YearToggle";

const ElectronicNotice = () => {

  const [selectedYear, setSelectedYear] = useState("2024");
  const [searchTerm, setSearchTerm] = useState("");
  const years = ["2025", "2024", "2023"];

  const handleYearToggle = (year) => {
    setSelectedYear(year);
  };

  // 데이터 하드코딩
  const data = {
    "2024": [
      { title: "제62기 임시주주총회 소집공고", date: "2024-11-27", duration: "2024-11-27 ~" },
      { title: "Notice of Record Date for the 2024 Extraordinary Shareholders Correction", date: "2024-10-22", duration: "2024-10-22 ~" },
      { title: "2024년 임시 주주총회 기준일 공고 정정", date: "2024-10-21", duration: "2024-10-21 ~" },
      { title: "Notice of Record Date for the 2024 Extraordinary Shareholders", date: "2024-09-30", duration: "2024-09-30 ~" },
      { title: "2024년 임시 주주총회 기준일 공고", date: "2024-09-25", duration: "2024-09-25 ~" },
    ],
    "2023": [
      { title: "제62기 임시주주총회 소집공고", date: "2023-11-27", duration: "2023-11-27 ~" },
      { title: "Notice of Record Date for the 2024 Extraordinary Shareholders Correction", date: "2023-10-22", duration: "2023-10-22 ~" },
      { title: "2024년 임시 주주총회 기준일 공고 정정", date: "2023-10-21", duration: "2023-10-21 ~" },
      { title: "Notice of Record Date for the 2023 Extraordinary Shareholders", date: "2023-09-30", duration: "2023-09-30 ~ 2024-09-30" },
      { title: "2024년 임시 주주총회 기준일 공고", date: "2023-09-25", duration: "2023-09-25 ~" },
    ],
  };

  const filteredData = data[selectedYear]?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mt-8 mb-16">Electronic Announcement / Disclosure</h1>
      <div className="flex space-x-6">
        <YearToggle years={years} selectedYear={selectedYear} handleYearToggle={handleYearToggle} />
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-800"
          />
          <table className="table-auto w-full text-lg text-left text-gray-700 dark:text-gray-300 mt-4">
            <thead>
              <tr className="border-b-4 border-gray-500">
                <th className="px-6 py-3 w-1/2">Title</th>
                <th className="px-6 py-3 w-1/4">Date</th>
                <th className="px-6 py-3 w-1/4">Duration</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item, index) => (
                <tr key={index} className="border-b border-gray-400 text-sm">
                  <td className="px-6 py-6 font-semibold">{item.title}</td>
                  <td className="px-6 py-6">{item.date}</td>
                  <td className="px-6 py-6">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ElectronicNotice;
