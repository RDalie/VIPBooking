import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BusinessTypes from "./components/BusinessTypes";
import FeatureSection from "./components/FeatureSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Main Branding CTA */}
        <div className="py-24 bg-white text-center px-4">
          <blockquote className="text-3xl md:text-5xl font-extrabold mb-10 text-blue-900 leading-tight tracking-tight">
            "Your Platform. Your Clients. Your Future."
          </blockquote>
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
            Get started now <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <BusinessTypes />

        {/* Comparison Section 1 */}
        <div id="features" className="scroll-mt-28" />
        <FeatureSection
          title="Unlike Others,"
          subtitle="we never steal your clients."
          image={`${import.meta.env.BASE_URL}UnlikeOthers.png`}
          imageLabel="Client Protection Interface"
          reverse={false}
          bgColor="bg-white"
        />

        {/* Comparison Section 2 */}
        <FeatureSection
          title="Your database stays"
          subtitle="private, portable, and under your brand"
          image={`${import.meta.env.BASE_URL}Marketing.png`}
          imageLabel="Secure Database Management"
          reverse={true}
          bgColor="bg-gray-50"
        />

        {/* Comparison Section 3 */}
        <FeatureSection
          title="Don't let others control your clients."
          subtitle="We bring them back to you."
          image={`${import.meta.env.BASE_URL}Database.png`}
          imageLabel="Business Growth Analytics"
          reverse={false}
          bgColor="bg-white"
        />

        {/* Payment Partner Section */}
        <section className="py-24 px-4 bg-gray-50 scroll-mt-28" id="payment">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 flex items-center justify-center min-h-[350px] transition-shadow duration-300">
                <img
                  src={`${import.meta.env.BASE_URL}SecuredPayment.png`}
                  alt="ANZ Worldline Terminal"
                  className="max-w-full h-auto rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x400/white/0044cc?text=Payment+Terminal";
                  }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 leading-tight">
                Payment supported by ANZ Worldline
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience seamless integration with the industry's most trusted
                payment gateway. Secure, fast, and built for modern service
                businesses.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
