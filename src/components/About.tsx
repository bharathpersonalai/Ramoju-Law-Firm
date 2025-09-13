import React from 'react';
import { Award, GraduationCap, Scale } from 'lucide-react';

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
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Meet Shankara Chary
            </h2>
            
            <p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              With over 15 years of dedicated legal practice, Shankara Chary brings a wealth of experience 
              and unwavering commitment to every client she serves. Her approach combines legal expertise 
              with genuine compassion, ensuring that clients feel heard, understood, and confident 
              throughout their legal journey.
            </p>

            <p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              He believes that clear communication and personal attention are the cornerstones of 
              effective legal representation. She takes the time to understand each client's  unique 
              situation and works tirelessly to achieve the best possible outcomes.
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
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Education
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    MBA, Osmania University • LLB, Padala ramareddy Law college
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Scale className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 
                    className="text-xl font-semibold text-navy-900 mb-2"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Bar Admissions
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Licensed to practice in New York, New Jersey, and Connecticut
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 
                    className="text-xl font-semibold text-navy-900 mb-2"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Professional Memberships
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    American Bar Association • State Bar Association • Family Law Section
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;