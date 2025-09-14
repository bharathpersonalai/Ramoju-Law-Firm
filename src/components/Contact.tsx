import React from "react";
import { Clock } from "lucide-react"; // Only Clock icon is needed now

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Get in Touch
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to discuss your legal needs? Contact us today to schedule your
            free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Column 1: Contact Information & Map */}
          <div className="space-y-8">
            <div>
  <h3 
    className="text-2xl font-bold text-navy-900 mb-8"
    style={{ fontFamily: 'Merriweather, serif' }}
  >
    Contact Information
  </h3>

  {/* Container for the new boxes */}
  <div className="space-y-4">

    {/* Phone Box */}
    <div className="bg-[#1a2f42] text-white rounded-2xl p-6 flex items-center space-x-6 transition-transform hover:scale-105 duration-300">
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </div>
      <div>
        <h4 className="text-2xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>Call Us:</h4>
        <a href="tel:+919553410353" className="block text-lg opacity-90 hover:opacity-100 transition-opacity">+91 95534 10353</a>
        <a href="tel:+919948272818" className="block text-lg opacity-90 hover:opacity-100 transition-opacity">+91 99482 72818</a>
      </div>
    </div>

    {/* Email Box */}
    <div className="bg-[#1a2f42] text-white rounded-2xl p-6 flex items-center space-x-6 transition-transform hover:scale-105 duration-300">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
      </div>
      <div>
        <h4 className="text-2xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>Email Us:</h4>
        <a href="mailto:ramojulawfirm@gmail.com" className="text-lg opacity-90 hover:opacity-100 transition-opacity">ramojulawfirm@gmail.com</a>
      </div>
    </div>

    {/* Office Address Box */}
    <div className="bg-[#1a2f42] text-white rounded-2xl p-6 flex items-center space-x-6 transition-transform hover:scale-105 duration-300">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
      </div>
      <div>
        <h4 className="text-2xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>Visit Us:</h4>
        <a href="https://maps.app.goo.gl/iFSe6ztiibSVwbqq6" target="_blank" rel="noopener noreferrer" className="text-lg opacity-90 hover:opacity-100 transition-opacity">
          Ramoju Law Firm, Opp. Union Bank, 'X' Road, Gajularamaram, Quthbullapur, Hyderabad - 55.
        </a>
      </div>
    </div>

  </div>
</div>

{/* The Google Map Iframe can go after this section */}
<div className="mt-8 rounded-lg overflow-hidden shadow-xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.5708362812716!2d78.422993166626!3d17.52491951312441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f005dd9d139%3A0x498f079f29ed6b0!2sRamoju%20Law%20Firm!5e0!3m2!1sen!2sin!4v1757767490000!5m2!1sen!2sin" // Remember to use your real map URL
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Office Location Map"
  ></iframe>
</div>
          </div>

          {/* Column 2: Business Hours & Image */}
          <div className="space-y-8">
            {/* Business Hours Card */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3
                className="text-2xl font-bold text-navy-900 mb-6 flex items-center"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                <Clock className="h-6 w-6 mr-3 text-gold" />
                Business Hours
              </h3>
              <div
                className="flex items-center justify-between py-4 border-t border-gray-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-lg text-gray-600">
                  Monday - Sunday --- 24/7
                </span>
                <span className="bg-gold/10 text-gold-800 font-medium rounded-full px-4 py-1 text-sm">
                  By Appointment
                </span>
              </div>
              <p
                className="text-sm text-gray-500 mt-6 italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                We are available 24/7 for scheduled consultations. Please contact us to book your appointment.
              </p>
            </div>

            {/* Your New Image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/appointment.png"
                alt="A professional and welcoming law office"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 