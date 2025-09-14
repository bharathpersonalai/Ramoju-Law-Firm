import React from "react";
import { GraduationCap } from "lucide-react"; // Scale and Award icons are now removed

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/images/about pic.jpg"
              alt="Shankara chary in her office"
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-navy-900/10 rounded-lg"></div>
          </div>

          {/* Content */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-8"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Meet Shankara Chary
            </h2>

            <p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With over years of legal experience, Shankara Chary combines legal
              expertise with a compassionate approach, ensuring clients feel
              heard and supported throughout their legal journey. Specializing
              in [Civil, Criminal, Family Cases, Legal Opinion], He works
              diligently to achieve the best possible outcomes for each case.
              Shankara believes that clear communication and personalized legal
              services are key to effective legal representation. As a trusted
              legal advisor, his client-focused strategy has earned a reputation
              for delivering exceptional results in [Telangana].
            </p>

            <p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Shankara Chary is committed to clear, transparent communication,
              believing that it is a crucial element in effective legal
              representation. By prioritizing a comprehensive understanding of
              each client's unique situation, He delivers strategic legal
              solutions that maximize success. Renowned for his dedication and
              personalized service, making him a trusted legal advisor for
              clients seeking reliable and empathetic legal support.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold text-navy-900 mb-2"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    Education
                  </h3>
                  <p
                    className="text-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    MBA, Osmania University • LLB, Padala ramareddy Law college
                  </p>
                </div>
              </div>

              {/* Bar Admissions and Professional Memberships sections have been removed */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;