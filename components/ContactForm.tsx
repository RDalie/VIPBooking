
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-indigo-50 scroll-mt-28" id="contact">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-10 border-b-2 border-gray-100 pb-4">Contact Us</h2>
        
        <form className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <label className="block text-lg font-bold text-gray-800">Your Questions</label>
            <textarea 
              placeholder="Type here..." 
              className="w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none transition-all duration-200"
            ></textarea>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div className="relative">
                <label className="block text-gray-500 text-sm mb-1 uppercase tracking-wider font-bold">Name:</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-gray-200 py-2 bg-transparent focus:border-blue-600 focus:outline-none transition-colors duration-200 placeholder:text-gray-400"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="relative">
                <label className="block text-gray-500 text-sm mb-1 uppercase tracking-wider font-bold">Contact:</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-gray-200 py-2 bg-transparent focus:border-blue-600 focus:outline-none transition-colors duration-200 placeholder:text-gray-400"
                  placeholder="Email or Phone"
                />
              </div>
            </div>
            
            <button className="mt-8 w-full md:w-auto bg-black text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Submit <i className="fas fa-paper-plane ml-2 text-sm"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
