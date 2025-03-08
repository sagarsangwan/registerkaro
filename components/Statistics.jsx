import React from "react";

function Statistics() {
  return (
    <section className="bg-white text-center py-16 px-6">
      <h3 className="text-lg text-gray-500 uppercase tracking-widest mb-2">
        Why Register Karo
      </h3>
      <h2 className="text-3xl font-bold mb-8">Some Numbers are important</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-lg font-semibold">
        {[
          { label: "Customers", value: "1M+" },
          { label: "Years of Excellence", value: "12+" },
          { label: "R&D Engineers", value: "41+" },
          { label: "Countries", value: "78+" },
          { label: "Partners", value: "3287+" },
          { label: "Awards Received", value: "41+" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <span className="text-2xl font-bold text-gray-800">
              {item.value}
            </span>
            <p className="text-gray-500 text-sm uppercase mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
