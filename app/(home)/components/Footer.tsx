"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="min-h-[40vh] bg-brown relative px-4 py-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto w-full flex flex-col items-end gap-4 text-ivory"
      >
        <motion.div 
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-24 md:w-32"
        >
          {/* Signature/Logo */}
          <Image
            src="/images/signature.svg"
            alt="Anaelle Piovesan signature"
            width={160}
            height={80}
            className="w-full"
          />
        </motion.div>

        {/* Contact Information */}
        <div className="max-w-xl text-right space-y-0.5 !text-xs md:text-sm leading-relaxed *:!text-xs">
          <p>IT +393513116231</p>
          <p>UK +447776616304</p>
          <p>ANAELLE.PIOVESAN@GMAIL.COM</p>
        </div>

        {/* Mission Statement */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="max-w-xl text-right !text-xs md:text-sm leading-relaxed"
        >
          We are a full service production collective with a focus on the special 
          craft and sustainable practices of artisans around the world. 
          We approach fashion as a testament to our shared humanity, bringing 
          together a wide range of traditional knowledge in order to deliver 
          luxury garments enriched by unique stories.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;