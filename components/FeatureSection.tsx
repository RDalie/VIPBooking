
import React from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  image: string;
  imageLabel: string;
  reverse?: boolean;
  bgColor?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  subtitle, 
  image, 
  imageLabel, 
  reverse = false, 
  bgColor = "bg-white" 
}) => {
  return (
    <section className={`py-20 px-4 ${bgColor}`}>
      <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
            {subtitle}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group max-w-sm md:max-w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-xl p-3 md:p-5 flex items-center justify-center overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl">
              <img 
                src={image} 
                alt={imageLabel} 
                className="max-h-[400px] w-full object-contain rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x600/f3f4f6/0044cc?text=${encodeURIComponent(imageLabel)}`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
