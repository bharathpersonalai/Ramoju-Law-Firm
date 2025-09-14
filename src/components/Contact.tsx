import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
          {/* Column 1: Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-bold text-navy-900 mb-8"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Contact Information
              </h3>
            </div>

            {/* ... Other contact info divs (Phone, Mail, Address) ... */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-gold mt-1" />
              </div>
              <div>
                <h4
                  className="text-lg font-semibold text-navy-900 mb-1"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Phone
                </h4>
                <a
                  href="tel:919553410353"
                  className="text-gray-600 hover:text-gold transition-colors duration-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  +91 9553410353
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-gold mt-1" />
              </div>
              <div>
                <h4
                  className="text-lg font-semibold text-navy-900 mb-1"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Email
                </h4>
                <a
                  href="mailto:ramojulawfirm@gmail.com"
                  className="text-gray-600 hover:text-gold transition-colors duration-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  ramojulawfirm@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-gold mt-1" />
              </div>
              <div>
                <h4
                  className="text-lg font-semibold text-navy-900 mb-1"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Office Address
                </h4>
                <a
                  href="https://maps.app.goo.gl/TKEWC5WYeJvq13436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gold transition-colors duration-200"
                >
                  <p style={{ fontFamily: "Inter, sans-serif" }}>
                    Ramoju Law Firm, Opp. Union Bank, 'X' Road,Gajularamaram
                    <br />
                    Quthbullapur, Hyderabad - 55.
                  </p>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.5708362812716!2d78.422993166626!3d17.52491951312441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f005dd9d139%3A0x498f079f29ed6b0!2sRamoju%20Law%20Firm!5e0!3m2!1sen!2sin!4v1757767490000!5m2!1sen!2sin" // <-- Add quotes like this
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of the Law Firm Location"
            ></iframe>
          </div>{" "}
          {/* <-- THIS IS THE MISSING CLOSING DIV that closes Column 1 */}
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
              <div className="space-y-4">
                <div
                  className="flex items-center justify-between py-4 border-b border-gray-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="text-lg text-gray-600">
                    Monday - Saturday
                  </span>
                  <span className="bg-gold/10 text-gold-800 font-medium rounded-full px-4 py-1 text-sm">
                    By Appointment
                  </span>
                </div>
                <div
                  className="flex items-center justify-between py-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="text-lg text-gray-600">Sunday</span>
                  <span className="bg-gold/10 text-gold-800 font-medium rounded-full px-4 py-1 text-sm">
                    By Appointment
                  </span>
                </div>
              </div>
              <p
                className="text-sm text-gray-500 mt-6 italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our attorneys are available for consultations during these
                times. Please call ahead to schedule.
              </p>
            </div>

            {/* Your New Image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/appointment.png"
                alt="A professional and welcoming law office"
                className="w-full h-[450px] object-cover" // <-- Changed h-full to h-[450px]
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
