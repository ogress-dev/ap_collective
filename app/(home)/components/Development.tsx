'use client';

import { motion } from 'framer-motion';

const Development = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="development-bg">
      <motion.section
        id="development"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="aspect-[3/4] lg:aspect-video *:!text-ivory bg-gradient-to-br from-black via-brown/60 to-black flex flex-col justify-between items-start">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="number flex flex-col items-start gap-4 pl-[75%]">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="scale-x-[-1]"
            variants={fadeInUp}>
            4
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm tracking-wider">
            :four:
          </motion.p>
        </motion.div>

        <motion.div
          className="title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <h2 className="uppercase">developement</h2>
        </motion.div>

        <motion.div
          className="desc"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <p className="max-w-xl">
            Our development service focuses on creating detailed and comprehensive tech packs, essential for turning an idea into a finished product. We handle margin calculations, material allocation, and the creation of Bills of Materials (BOMs), ensuring that each project aligns with the brand’s financial goals. Our experience in managing complex processes allows us to anticipate and address potential issues, ensuring a smooth and seamless development process.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Development;
