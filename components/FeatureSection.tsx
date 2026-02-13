
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
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white border border-gray-100 rounded-lg shadow-xl p-2 md:p-4 min-h-[300px] flex flex-col items-center">
              <img 
                src={image} 
                alt={imageLabel} 
                className="max-h-[400px] object-contain rounded" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x600/f3f4f6/0044cc?text=${encodeURIComponent(imageLabel)}`;
                }}
              />
              <div className="mt-4 text-xs text-gray-400 italic">{imageLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
