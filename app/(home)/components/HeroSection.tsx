"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero-bg">
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="!pt-0 min-h-150 bg-gradient-to-br from-black/10 via-brown/60 to-black/20 px-4 lg:!px-32 flex flex-col"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 mx-auto w-full text-ivory relative overflow-x-visible pt-8 lg:pt-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-center items-start gap-6 w-full lg:aspect-[3/3.5]"
          >
            <div className="flex items-start mb-8 lg:mb-0 w-full">
              <h1 className="text-5xl lg:!text-[16rem] shrink-0 lg:!leading-[10rem]">AP</h1>
              <div className="w-full flex flex-col ml-2 lg:ml-4">
                <motion.h3
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="uppercase text-base lg:text-xl xl:text-2xl font-medium tracking-wider"
                >
                  collective
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="!text-sm lg:!text-sm"
                >
                  We approach fashion as a testament to our shared humanity,
                  bringing together a wide range of traditional knowledge in
                  order to deliver luxury garments enriched by unique stories.
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-full lg:flex hidden flex-col lg:flex-row justify-between *:!text-xs gap-4 lg:gap-8 mt-auto"
            >
              <p className="space-y-2">
                MATERIALS - SUPPLY CHAIN- TECH
                <br />
                PACKS - BOMS - CRITICAL PATHS -<br />
                QUALITY CONTROLS - SUSTAINABLE
                <br />
                SOLUTIONS.
              </p>
              <p className="text-right ">
                IT +393513116231
                <br />
                UK +447776616304
                <br />
                ANAELLE.PIOVESAN@GMAIL.COM
              </p>
            </motion.div>
          </motion.div>

          {/* image */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-center items-center gap-4 w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full mx-auto"
            >
              <Image
                src="/images/Copy of Cover_test1.png"
                alt="Necklace with pearls and green beads"
                width={1000}
                height={1000}
                className="w-full aspect-[3/3.5] object-cover rounded-sm"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-full flex lg:hidden flex-col lg:flex-row justify-between text-sm lg:text-base gap-4 lg:gap-8"
            >
              <p className="space-y-1 lg:max-w-[250px]">
                MATERIALS - SUPPLY CHAIN- TECH
                <br />
                PACKS - BOMS - CRITICAL PATHS -<br />
                QUALITY CONTROLS - SUSTAINABLE
                <br />
                SOLUTIONS.
              </p>
              <p className="text-right lg:max-w-[200px]">
                IT +393513116231
                <br />
                UK +447776616304
                <br />
                ANAELLE.PIOVESAN@GMAIL.COM
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex absolute right-4 lg:-right-24 top-1/2 -translate-y-1/2 flex-col items-end gap-3"
          >
            <h3 className="uppercase font-bold text-base lg:text-xl xl:text-2xl tracking-wider">
              <Link href={"#sourcing"}>sourcing</Link>
            </h3>
            <h3 className="uppercase font-bold text-base lg:text-xl xl:text-2xl tracking-wider">
              <Link href={"#development"}>development</Link>
            </h3>
            <h3 className="uppercase font-bold text-base lg:text-lg tracking-wider">
              <Link href={"#production"}>production</Link>
            </h3>
            <h3 className="uppercase font-bold text-base lg:text-lg tracking-wider">
              ••|
            </h3>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
