import React from "react";

function CompanyIntroduce() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* 사진 */}
        <div>
          <img
            src="/images/company-photo.png"
            alt="Company Team"
            className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
          />
        </div>

        {/* 소개 텍스트 */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            About Our Company
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            VIS Investment is a specialized Korean trading firm focused on identifying and 
            trading U.S. equities that have been excessively sold off relative to their intrinsic 
            value due to short-term market concerns. The name 'VIS‘ derives from Latin, 
            meaning ’strength and momentum‘, embodying our commitment to robust analysis and sustainable growth.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We leverage proprietary capital and combine quantitative research, systematic trading, 
            and traditional valuation methodologies to uncover and act on multi-layered opportunities 
            in the market. Our cutting-edge systems and dynamic strategies enable us to consistently 
            deliver superior performance in a fast-paced trading environment.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            At VIS Investment, we foster a culture of innovation and collaboration, 
            empowering our team to continuously learn, grow, and excel.
            Stay connected with us to learn more about our insights and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyIntroduce;
