import React from "react";

const Hero: React.FC = () => {
  return (
    // CHANGE 1: Added flexbox centering classes here
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center"
    >
      {/* Background Image IMG Tag (from public folder) */}
      {/* Mobile-Only Background Image (Visible on small screens) */}
      <img
        src="/images/logo-mobile.jpg"
        alt="hero background"
        className="absolute inset-0 -z-10 w-full h-full object-cover md:hidden"
      />

      {/* Desktop-Only Background Image (Visible on medium screens and up) */}
      <img
        src="/images/law.jpg" 
        alt="hero background"
        className="absolute inset-0 -z-10 w-full h-full object-cover hidden md:block"
      />

      {/* The dark overlay (applies to both) */}
      <div className="absolute inset-0 -z-10 bg-navy-900/75"></div>

      {/* Text Content Container */}
      {/* CHANGE 2: Removed layout classes from here to simplify */}
      <div className="relative z-10 -translate-y-20">
        <div className="text-white text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            RAMOJU LAW FIRM <br />
  <span className="text-xl text-white-700">Hyderabad</span> 
          </h1>
        </div>
      </div>

      {/* Button (Unchanged and still positioned independently) */}
      <div className="absolute z-10 bottom-12 left-1/2 -translate-x-1/2">
        <a
          href="https://wa.me/919553410353"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-5 sm:px-6 py-3 text-sm bg-gold text-white font-semibold rounded-full hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
