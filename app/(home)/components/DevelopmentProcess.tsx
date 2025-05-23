"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const developmentSteps = [
  {
    image: "/images/Copy of WA24SH12-WV03-900 366.jpg",
    description: "CAD design product pattern placement to ensure precision and consistency in the jacket design",
  },
  {
    image: "/images/Copy of PLASTRON  (4).jpeg",
    description: "Removable collar with applied studs, customized according to the client's specifications for a refined and personalized look",
  },
  {
    image: "/images/Copy of BN_LANA.jpg",
    description: "Hand-dyed organic denim fabric by artisans in Burkina Faso, adhering to the client's eco-aware options",
  },
  {
    image: "/images/Copy of PLACKET.jpeg",
    description: "Made in Italy crochet lace, useable as a drawstring, decorative ribbon, adding elegance and functionality to garments",
  },
  {
    image: "/images/Copy of BN_5.jpg",
    description: "Metal decorative part buttons with a silver finish, sourced from Italian suppliers, retained by a vintage garment",
  },
  {
    image: "/images/Copy of WA24SH12-WV03-900 366.jpg",
    description: "Testing fabric's resistance to studs to ensuring durability and quality in the product",
  },
  {
    image: "/images/Copy of Wales_Bonner_ph_Vanni_Bassetti-001.jpg",
    description: "Analysis of the removable collar construction during fitting",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="min-h-screen bg-cream">
      {/* Header */}
      <div className="w-full bg-brown text-ivory px-3 py-2.5 md:px-8 md:py-4 flex justify-between items-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide whitespace-nowrap">
          DEVELOPING YOUR GARMENTS
        </h3>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-2">••|</span>
      </div>

      {/* Content */}
      <div className="p-3 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="max-w-5xl mx-auto h-full flex flex-col"
        >
          <div className="relative flex-1">
            {/* Central curved line */}
            

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 relative h-full">
              {developmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex flex-col gap-2"
                >
                  <div className="relative aspect-square overflow-hidden group">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.description}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <p className="text-[8px] md:text-[10px] lg:!text-xs text-center text-black\/80">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;