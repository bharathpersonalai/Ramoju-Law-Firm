import React from "react";
import { Linkedin, Scale } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Ramoju Law Firm
              </h3>
            </div>
            <p
              className="text-gray-300 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Providing experienced legal counsel with compassion and dedication
              to serve our clients needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-gray-300 hover:text-gold transition-colors duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Address & Contact
            </h4>
            <div
              className="space-y-2 text-gray-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <p>Ramoju Law Firm, Opp. Union Bank</p>
              <p>'X' Road,Gajularamaram</p>
              <p>Quthbullapur, Hyderabad - 55.</p>
              <p>
                <a
                  href="tel:919553410353"
                  className="hover:text-gold transition-colors duration-200"
                >
                  +91 9553410353
                </a>
              </p>
              <p>
                <a
                  href="mailto:ramojulawfirm@gmail.com "
                  className="hover:text-gold transition-colors duration-200"
                >
                  ramojulawfirm@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
  <div className="md:flex md:justify-between md:items-center">
    {/* Copyright (No changes here) */}
    <p
      className="text-gray-300 text-sm mb-4 md:mb-0"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      © {new Date().getFullYear()} Ramoju Law Firm. All Rights Reserved.
    </p>

    {/* Disclaimer & Credit Section */}
    <div
      className="text-gray-400 text-xs md:text-right" // Added md:text-right for better alignment
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Legal Disclaimer */}
      <p className="mb-2">
        <strong>Legal Disclaimer:</strong> The information on this
        website is for general information purposes only. Nothing on
        this site should be taken as legal advice for any individual
        case or situation. This information is not intended to create,
        and receipt or viewing does not constitute, an attorney-client
        relationship.
      </p>

      {/* YOUR NEW CREDIT LINK */}
        <div className="mt-8 text-center">
      <p className="text-xs text-gray-400">
        Designed & Developed by{' '}
        <a 
          href="https://smartgenai.co.in/" // Replace with your actual URL
          target="_blank" 
          rel="noopener noreferrer"
          className="font-bold text-white hover:text-gold transition-colors duration-200"
        >
          SmartgenAI Innovations
        </a>
      </p>
    </div>
    </div>
  </div>
</div>
</div> 
    </footer>
  );
};

export default Footer;
