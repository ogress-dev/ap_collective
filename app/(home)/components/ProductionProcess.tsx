"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
	{
		number: 1,
		image: "/images/Copy of WA24SH12-WV03-900 366.jpg",
		description:
			"In the post-development fitting, we prepare the garment for production launch by conducting a thorough review of all materials, finalizing the Bills of Materials (BOMs), and noting any necessary alterations. This process includes evaluating the garment's construction and raw materials to ensure the final price is met without compromising quality.",
	},
	{
		number: 2,
		image: "/images/Copy of PLASTRON  (4).jpeg",
		description:
			"The embroidered parts of the shirt and pants are crafted by skilled artisans in India. The embroidery is adjusted to the pattern construction to avoid sizing changes and graded in all sizes according to the client's specifications.",
	},
	{
		number: 3,
		image: "/images/Copy of PLACKET.jpeg",
		description:
			"Patterns and changes are then approved by the client, translated, and organized into the tech pack, which is then sent to the factory responsible for implementing the changes.",
	},
	{
		number: 4,
		image: "/images/Copy of Wales_Bonner_ph_Vanni_Bassetti-001.jpg",
		description:
			"Each step is packaged and prepared for final quality control. This includes a thorough inspection of garment finishes, measurement specification for each size, checking decorating to client guidelines, barcode labels, and ensuring proper packaging.",
	},
	{
		number: 5,
		image: "/images/Copy of WhatsApp Image 2024-09-08 at 21.50.03 (8).jpeg",
		description:
			"Costs and timelines are then approved for the orders made in India. Once the TOP (Top of Production) is received and approved, the orders are marked with the technical changes and sent to Italy for the packaging phase.",
	},
];

const ProductionProcess = () => {
	return (
		<section className="min-h-screen bg-brown/10">
			<div className="w-full bg-[#2B1F16] text-[#F5F1E6] px-4 py-3 md:px-8 md:py-5 flex justify-between items-center">
				<h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider whitespace-nowrap">
					THE PRODUCTION PROCESS
				</h3>
				<span className="text-3xl md:text-4xl lg:text-5xl tracking-tight">
					••|
				</span>
			</div>
			<div className="p-2 md:p-4">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					className="max-w-6xl mx-auto"
				>
					<div className="grid grid-cols-12 gap-2 md:gap-3">
						{steps.map((step, index) => {
							// Define column span based on index
							const colSpan =
								index === 0 ? "col-span-12 md:col-span-6" : "col-span-6 md:col-span-3";
							const imageHeight = index === 0 ? "aspect-[16/10]" : "aspect-square";

							return (
								<motion.div
									key={index}
									initial={{ y: 10, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ delay: index * 0.1, duration: 0.3 }}
									className={`${colSpan} flex flex-col gap-2`}
								>
									<div
										className={`relative ${imageHeight} overflow-hidden bg-brown/5`}
									>
										<motion.div
											whileHover={{ scale: 1.03 }}
											transition={{ duration: 0.2 }}
											className="h-full w-full"
										>
											<Image
												src={step.image}
												alt={`Production step ${step.number}`}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 50vw, 25vw"
											/>
										</motion.div>
										<div className="absolute top-2 left-2 bg-brown text-ivory h-6 w-6 flex items-center justify-center rounded-full text-sm">
											{step.number}
										</div>
									</div>
									<p className="!text-xs md:text-sm leading-relaxed text-black\/80 px-1">
										{step.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProductionProcess;