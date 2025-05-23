'use client';

import { motion } from 'framer-motion';

const Production = () => {
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
    <div className="production-bg">
      <motion.section
        id="production"
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
          className="number flex flex-col items-start gap-7 pl-[75%]">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="scale-x-[-1]"
            variants={fadeInUp}>
            5
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm tracking-wider">
            :five:
          </motion.p>
        </motion.div>

        <motion.div
          className="title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <h2 className="uppercase">production</h2>
        </motion.div>

        <motion.div
          className="desc"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <p className="max-w-xl">
            In the production phase, we provide comprehensive and integrated support, from creating critical paths (CP) and timelines to negotiating prices and meet cost objectives. Leveraging our network of selected factories, we allocate production to the most suitable sites, ensuring quality and adherence to deadlines. We also manage orders and material handling (RM), oversee quality control (QC), and handle logistics, coordinating transportation to ensure that each product arrives on time and in perfect condition.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Production;
