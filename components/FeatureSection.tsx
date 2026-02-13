
import React from 'react';

interface FeatureSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  image: string;
  imageLabel: string;
  reverse?: boolean;
  bgColor?: string;
  step?: number;
  description?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  subtitle,
  image,
  imageLabel,
  reverse = false,
  bgColor = "bg-white",
  step,
  description,
}) => {
  return (
    <section id={id} className={`py-20 px-4 scroll-mt-28 ${bgColor}`}>
      <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            {step && (
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                {String(step).padStart(2, '0')}
              </span>
            )}
            <div className="w-12 h-1 bg-blue-600 rounded-full hidden md:block"></div>
            <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
              {subtitle}
            </p>
            {description && (
              <p className="text-gray-500 text-lg leading-relaxed mt-2">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group max-w-sm md:max-w-full">
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-lg p-3 md:p-5 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
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
