import React from 'react';
import { Users, FileText, Building, Home } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Civil',
      description: 'Receive expert legal guidance for civil cases involving contracts, property disputes, inheritance matters, and personal rights.'
    },
    {
      icon: FileText,
      title: 'Criminal',
      description: 'Get professional defense and legal counsel for criminal cases, including minor offenses and serious criminal charges.'
    },
    {
      icon: Building,
      title: 'Family Cases',
      description: 'Obtain compassionate legal support for family cases, including divorce, child custody, spousal support, and property division.'
    },
    {
      icon: Home,
      title: 'Legal Opinion',
      description: 'Receive reliable and expert legal opinions on contracts, business agreements, disputes, and other legal matters to ensure informed decision-making and risk mitigation.' 
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Practice Areas
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comprehensive legal services tailored to meet your specific needs with 
            the highest standards of professionalism and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-900 rounded-full mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 
                className="text-2xl font-bold text-navy-900 mb-4"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;