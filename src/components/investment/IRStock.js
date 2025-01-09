import React from "react";
import Tabs from "./Tabs";

const IRStock = () => {
  const tabs = [
    { path: "/ir-director", label: "Audit Report" },
    { path: "/ir-business", label: "Business Report" },
    { path: "/ir-stock", label: "Stock Info" },
    { path: "/ir-data", label: "IR Data" },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mt-8 mb-10">Investor Relations</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};


export default IRStock;
