import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      imageSrc: '/assets/civil.jpg',
      title: 'Civil Litigation',
      description: 'Expert representation in civil litigation for resolving disputes involving contracts, property, and personal rights. We provide effective legal solutions to protect your interests in civil courts.'
    },
    {
      imageSrc: '/assets/criminal.jpg',
      title: 'Criminal Defense',
      description: 'Providing strong criminal defense services for clients facing criminal charges. Our experienced team works tirelessly to ensure the best possible outcome for your case, defending your rights every step of the way.'
    },
    {
      imageSrc: '/assets/divorce.jpg',
      title: 'Matrimonial Disputes',
      description: 'Experienced legal support in matrimonial disputes, including divorce, child custody, and spousal support. We handle sensitive family matters with care and professionalism to ensure the best results for you and your family.'
    },
    {
      imageSrc: '/assets/property.jpg',
      title: 'Property & Real Estate',
      description: 'Comprehensive legal services in property and real estate matters, including property disputes, transactions, and leases. We ensure your rights are protected in every real estate deal.'
    },
    {
      imageSrc: '/assets/insolvency.jpg',
      title: 'Insolvency & Bankruptcy',
      description: 'Offering expert legal advice and representation in insolvency and bankruptcy cases. We guide businesses and individuals through financial distress, helping to find the most viable legal solutions.'
    },
    {
      imageSrc: '/assets/cyber.jpg',
      title: 'IT & Cyber Law',
      description: 'Specialized legal services in IT and cyber law, covering issues such as data protection, intellectual property, and cybercrime. We offer legal counsel for businesses and individuals navigating the digital landscape.'
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
            Our Services
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comprehensive legal services tailored to meet your specific needs with 
            the highest standards of professionalism and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              // --- ANIMATION ATTRIBUTES ADDED HERE ---
               data-aos="fade-right"
              data-aos-delay={index * 100}
              // ------------------------------------
            >
              <img 
                src={service.imageSrc} 
                alt={service.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-8 text-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;