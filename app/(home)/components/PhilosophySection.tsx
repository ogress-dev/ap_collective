"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ActivityCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full aspect-[3/4] relative"
    >
      <motion.h4
        whileHover={{ scale: 1.1 }}
        className="w-18 break-words !font-semibold !text-2xl p-2 bg-coral text-white uppercase absolute top-4 left-4"
      >
        {title}
      </motion.h4>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-full"
      />
    </motion.div>
  );
};

const PhilosophySection = () => {
  const activities = [
    {
      title: "Sourcing",
      image: "/images/Copy of CABES 2.png",
    },
    {
      title: "Development",
      image: "/images/Copy of FUTURE SERVICE.png",
    },
    {
      title: "Production",
      image: "/images/Copy of CIEMMECI 1.png",
    },
  ];

  return (
    <motion.section
      initial={{ backgroundColor: "#000" }}
      whileInView={{ backgroundColor: "#F6F6F0" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-4 md:p-8 lg:p-12"
    >
      <div className="max-w-3xl lg:max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-12">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base lg:text-lg lg:text-right leading-relaxed"
        >
          Our philosophy is rooted in{" "}
          <strong>integrity, innovation, and respect for craftsmanship.</strong>{" "}
          We strongly believe in the importance of an{" "}
          <strong>ethical approach</strong>, not only for the wellbeing of the
          communities involved but also for the added value it brings to the
          brands we work with. Our mission is to connect brands with artisans
          and suppliers who share these values, creating products that not only
          meet the highest standards but also contribute to a positive and
          sustainable impact.
        </motion.p>

        <div className="flex flex-col items-center gap-12 md:gap-24">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 items-start"
          >
            <motion.h1 whileHover={{ scale: 1.1 }} className="scale-x-[-1]">
              1
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm tracking-wider"
            >
              :one:
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base lg:text-lg leading-relaxed"
          >
            We offer <strong>tailored solutions</strong> for brands seeking to
            integrate craftmanship and high-quality materials{" "}
            <strong>into every phase of their production process.</strong> Our
            services focus on three key areas: Sourcing, De
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            image={activity.image}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default PhilosophySection;
