'use client';

import { motion } from 'framer-motion';

const Sourcing = () => {
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
    <div className="sourcing-bg">
      <motion.section
        id="sourcing"
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
          className="number flex flex-col items-start gap-0 pl-[75%]">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="scale-x-[-1]"
            variants={fadeInUp}>
            2
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm tracking-wider">
            :two:
          </motion.p>
        </motion.div>

        <motion.div
          className="title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <h2 className="uppercase">sourcing</h2>
        </motion.div>

        <motion.div
          className="desc"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <p className="max-w-xl">
            We source the finest materials, prioritizing both quality and
            sustainability. Thanks to an extensive network of suppliers across
            Africa and Europe, we select fabrics, accessories, trims, and
            applications such as embroidery, studs, and hotfixing, ensuring that
            every component meets the highest standards. We work closely with
            local artisans to guarantee unique, tradition-respecting materials,
            creating products that tell a story.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Sourcing;
