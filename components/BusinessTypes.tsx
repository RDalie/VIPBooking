
import React from 'react';

const BusinessTypes: React.FC = () => {
  const types = [
    { name: "Hair Salon", icon: "fa-scissors" },
    { name: "Barber", icon: "fa-user-tie" },
    { name: "Nails", icon: "fa-hand-sparkles" },
    { name: "Spa & sauna", icon: "fa-hot-tub-person" },
    { name: "Medspa", icon: "fa-stethoscope" },
    { name: "Massage", icon: "fa-spa" },
    { name: "Fitness & recovery", icon: "fa-dumbbell" },
    { name: "Physical therapy", icon: "fa-person-walking" },
    { name: "Health practice", icon: "fa-heart-pulse" },
    { name: "Tattoo & piercing", icon: "fa-pen-nib" },
    { name: "Pet grooming", icon: "fa-dog" },
    { name: "Tanning studio", icon: "fa-sun" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-xl font-bold uppercase tracking-widest text-gray-500 mb-10">Business Types</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {types.map((type, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                <i className={`fas ${type.icon} text-2xl md:text-3xl text-blue-600`}></i>
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
