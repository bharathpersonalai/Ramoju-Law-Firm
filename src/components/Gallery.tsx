import React, { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/Legal Consultation.png",
      alt: "Legal consultation session",
      title: "Legal Consultation",
    },
    {
      src: "/images/Legal Research.png",
      alt: "Law Research",
      title: "Legal Research",
    },
    {
      src: "/images/Legal team.png",
      alt: "Conference room",
      title: "Team Collaboration",
    },
    {
      src: "/images/Court.png",
      alt: "Court",
      title: "Court Preparation",
    },
    {
      src: "/images/Professional.png",
      alt: "Pro",
      title: "Proessional Excellence",
    },
    {
      src: "/images/case.png",
      alt: "case",
      title: "Case Strategy",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Team at Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our legal experts in action, collaborating and delivering
            top-tier solutions for our clients. Each image reflects our
            dedication and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              
              {/* --- THIS BUTTON IS NOW FIXED --- */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all"
              >
                <X size={28} />
              </button>
              {/* ----------------------------- */}

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">
                {galleryImages[selectedImage].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;