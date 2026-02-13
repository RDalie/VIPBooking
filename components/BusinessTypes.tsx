
import React from 'react';

const BusinessTypes: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const types = [
    { name: "Hair Salon", icon: `${base}icons/hair-cut_9993258.png` },
    { name: "Barber", icon: `${base}icons/man_2241732.png` },
    { name: "Nails", icon: `${base}icons/manicure_3252599.png` },
    { name: "Spa & sauna", icon: `${base}icons/sauna_946406.png` },
    { name: "Medspa", icon: `${base}icons/medicine_8131889.png` },
    { name: "Massage", icon: `${base}icons/massage_1997045.png` },
    { name: "Fitness & recovery", icon: `${base}icons/power_8910792.png` },
    { name: "Physical therapy", icon: `${base}icons/physical-therapy_3208998.png` },
    { name: "Health practice", icon: `${base}icons/health-check_6286779.png` },
    { name: "Tattoo & piercing", icon: `${base}icons/tattoo_2600516.png` },
    { name: "Pet grooming", icon: `${base}icons/dog-grooming_14257473.png` },
    { name: "Tanning studio", icon: `${base}icons/Tanning_4607319.png` }
  ];

  return (
    <section className="py-20 bg-gray-50 scroll-mt-28" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-lg font-bold uppercase tracking-widest text-gray-400 mb-12">Business Types</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {types.map((type, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:border-blue-200 group-hover:-translate-y-1 transition-all duration-300">
                <img src={type.icon} alt={type.name} className="w-11 h-11 md:w-14 md:h-14 object-contain" />
              </div>
              <span className="text-sm font-semibold text-gray-600 text-center group-hover:text-blue-700 transition-colors duration-300">{type.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
