import React from "react";
// import './Footer.css'; // Make sure this is uncommented if you use a separate CSS file

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-column grid for the top part of the footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Brand & Socials */}
          <div>
            <div className="mb-4">
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
            <div className="flex items-center space-x-4 mt-6">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919553410353"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Btn whatsappBtn">
                  <div className="sign">
                    <svg viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </div>
                  <div className="text">WhatsApp</div>
                </button>
              </a>
              <a
                href="https://www.instagram.com/shankara.chary.3?utm_source=qr&igsh=bzZnOGtsemt4bXdq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Btn instagramBtn">
                  <div className="sign">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                    </svg>
                  </div>
                  <div className="text">Instagram</div>
                </button>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
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
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-gold transition-colors duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
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
              <p>Ramoju Law Firm, Opp. Union Bank, 'X' Road, Gajularamaram, Quthbullapur, Hyderabad - 55.</p>
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
                  href="mailto:ramojulawfirm@gmail.com"
                  className="hover:text-gold transition-colors duration-200"
                >
                  ramojulawfirm@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* --- Bottom Footer Section (Corrected) --- */}
        <div className="border-t border-gray-700 pt-8">
          <div className="md:flex md:justify-between text-center md:text-left">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Ramoju Law Firm. All Rights Reserved.
            </p>
            <div className="text-gray-400 text-xs max-w-md">
              <strong>Legal Disclaimer:</strong> The information on this website is for general information purposes only.
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Designed & Developed by{" "}
              <a
                href="https://smartgenai.co.in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-gold transition-colors duration-200"
              >
                SmartgenAI Innovations
              </a>
            </p>
          </div>
        </div>
        {/* --- End of Corrected Section --- */}

      </div>
    </footer>
  );
};

export default Footer;