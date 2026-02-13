import React from "react";

const stats = [
  { value: "1,000+", label: "Businesses" },
  { value: "50,000+", label: "Bookings Monthly" },
  { value: "99.9%", label: "Uptime" },
];

const StatsBar: React.FC = () => {
  return (
    <section className="bg-blue-900 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm text-blue-200 font-semibold mt-1 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
