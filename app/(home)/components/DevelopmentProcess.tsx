"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const developmentSteps = [
	{
		image: "/images/Copy of WA24SH12-WV03-900 366.jpg",
		description:
			"CAD design product pattern placement to ensure precision and consistency in the jacket design",
	},
	{
		image: "/images/Copy of PLASTRON  (4).jpeg",
		description:
			"Removable collar with applied studs, customized according to the client's specifications for a refined and personalized look",
	},
	{
		image: "/images/Copy of BN_LANA.jpg",
		description:
			"Hand-dyed organic denim fabric by artisans in Burkina Faso, adhering to the client's eco-aware options",
	},
	{
		image: "/images/Copy of PLACKET.jpeg",
		description:
			"Made in Italy crochet lace, useable as a drawstring, decorative ribbon, adding elegance and functionality to garments",
	},
	{
		image: "/images/Copy of BN_5.jpg",
		description:
			"Metal decorative part buttons with a silver finish, sourced from Italian suppliers, retained by a vintage garment",
	},
	{
		image: "/images/Copy of WA24SH12-WV03-900 366.jpg",
		description:
			"Testing fabric's resistance to studs to ensuring durability and quality in the product",
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
				<h3 className="!text-[20px] sm:text-lg md:text-xl lg:text-2xl tracking-wide whitespace-nowrap font-bold">
					DEVELOPING YOUR GARMENTS
				</h3>
				<span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-2">
					••|
				</span>
			</div>

			{/* Content */}
			<div className="p-3 md:p-6">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="max-w-5xl mx-auto h-full flex flex-col"
				>
					<div className="relative flex-1">
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 relative h-full">
							{developmentSteps.map((step, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className="flex flex-col gap-2"
								>
									<div className="relative aspect-square overflow-hidden group">
										<Image
											src={step.image}
											alt={step.description}
											fill
											sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
											className="object-cover transition-transform duration-300 ease-out hover:scale-105"
											priority={index < 4}
										/>
									</div>
									<p className="!text-xs md:text-sm leading-relaxed text-black\/80 px-1">
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