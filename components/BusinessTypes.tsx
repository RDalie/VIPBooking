
import React from 'react';

const BusinessTypes: React.FC = () => {
  const types = [
    { name: "Hair Salon", icon: "/icons/hair-cut_9993258.png" },
    { name: "Barber", icon: "/icons/man_2241732.png" },
    { name: "Nails", icon: "/icons/manicure_3252599.png" },
    { name: "Spa & sauna", icon: "/icons/sauna_946406.png" },
    { name: "Medspa", icon: "/icons/medicine_8131889.png" },
    { name: "Massage", icon: "/icons/massage_1997045.png" },
    { name: "Fitness & recovery", icon: "/icons/power_8910792.png" },
    { name: "Physical therapy", icon: "/icons/physical-therapy_3208998.png" },
    { name: "Health practice", icon: "/icons/health-check_6286779.png" },
    { name: "Tattoo & piercing", icon: "/icons/tattoo_2600516.png" },
    { name: "Pet grooming", icon: "/icons/dog-grooming_14257473.png" },
    { name: "Tanning studio", icon: "/icons/Tanning_4607319.png" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-xl font-bold uppercase tracking-widest text-gray-500 mb-10">Business Types</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {types.map((type, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                <img src={type.icon} alt={type.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">{type.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
