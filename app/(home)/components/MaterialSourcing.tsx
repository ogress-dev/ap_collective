"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "NATURAL FIBRES",
    items: [
      { name: "WOOLS", image: "/images/Copy of BN_COTONE.jpg" },
      { name: "SILKS/VISCOSE", image: "/images/Copy of BN_Sete.jpg" },
      { name: "COTTONS", image: "/images/Copy of BN_Lana.jpg" },
      { name: "LINENS", image: "/images/Copy of BN_Lino.jpg" },
      { name: "LEATHERS", image: "/images/Copy of BN_GIEMME PELLE.jpg" },
    ],
  },
  {
    title: "ACCESSORIES",
    subtitle: "Ethically sourced • Byproducts of the food industry",
    items: [
      { name: "METALS", image: "/images/Copy of Fibbia.png" },
      { name: "WOOD/NUTS", image: "/images/Copy of COROZO.png" },
      { name: "HORN", image: "/images/Copy of CORNO.png" },
      { name: "RESIN/GLASS", image: "/images/Copy of RESINA UREICA.png" },
      { name: "HANDCRAFTED", image: "/images/Copy of BN_5.jpg" },
    ],
  },
  {
    title: "TECHNIQUES & PROCESSES",
    items: [
      { name: "EMBROIDERY", image: "/images/Copy of Ricami.jpg" },
      {
        name: "HEAT-ADHESIVE APPLICATION",
        image: "/images/Copy of applicazione termoadesiva.jpg",
      },
      { name: "DYEING", image: "/images/Copy of Tintura_1.jpg" },
    ],
  },
];

const MaterialSourcing = () => {
  return (
    <section className="min-h-screen bg-cream">
      {/* Header */}
      <div className="w-full bg-brown text-ivory px-3 py-2.5 md:px-8 md:py-4 flex justify-between items-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide whitespace-nowrap">
          MATERIALS SOURCING
        </h3>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-2">••|</span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto space-y-16"
        >
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-medium">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-sm mt-1 text-gray-600">
                    {category.subtitle}
                  </p>
                )}
              </div>

              <div
                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ${
                  category.title === "TECHNIQUES & PROCESSES"
                    ? "lg:grid-cols-3"
                    : ""
                }`}
              >
                {category.items.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-square group image-clip overflow-hidden"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-ivory text-sm md:text-base font-medium">
                          {item.name}
                        </p>
                      </div>
                    </motion.div>
                    <p className="text-[10px] md:!text-xs text-center text-black\/80 uppercase tracking-wider">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialSourcing;
