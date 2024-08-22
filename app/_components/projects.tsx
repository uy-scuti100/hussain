import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
	{
		title: " Abacus Store Manager",
		description:
			"A comprehensive PWA e-commerce dashboard with GraphQL and REST API integration. The platform allows for multi-store management",
		image: "/opengraph-image.png",
		link: "https://abacus-psi.vercel.app",
	},
	{
		title: "Nexus ",
		description: "A fullstack react and typescript blog website.",
		image: "/nexus.webp",
		link: "https://react-nexus-nine.vercel.app",
	},
	{
		title: " Andre Armani",
		description:
			"E-commerce platform for a visual artist, enabling the sale of framed canvases, high-quality paper prints, and custom-designed apparel.",
		image: "/andre logo.png",
		link: "https://andre-armani.vercel.app",
	},

	{
		title: "Mozack",
		description:
			"Furniture e-commerce platform designed to deliver a seamless and visually appealing shopping experience",
		image: "/mozack.jpg",
		link: "https://mozack.vercel.app/",
	},
];
export default function Projects() {
	return (
		<div className="mt-20">
			<h2 className="font-bold">Projects</h2>
			<div className="mt-5">
				{projects.map((project, index) => (
					<div
						className="flex items-start gap-4 justify-between border-b border-zinc-700/40 py-4"
						key={index}
					>
						<div className="relative w-16 h-16 rounded-full p-2">
							<Image
								src={project.image}
								alt={project.title}
								className="rounded-full object-cover"
								fill
							/>
						</div>

						<div className="flex-1 flex flex-col my-2">
							<h3 className="font-bold  leading-none">{project.title}</h3>

							<p className="text-sm pb-2">{project.description}</p>
							<Link
								href={project.link}
								className="text-sm text-zinc-400 hover:text-zinc-900 transition-all duration-700  underline my-1"
								target="_blank"
								rel="noreferrer"
							>
								View Project
							</Link>
						</div>
					</div>
				))}
			</div>
			{/* 
			<div className="my-5">
				<Link
					href={"/projects"}
					className="text-sm text-zinc-400 hover:text-zinc-900 transition-all duration-700  underline my-1"
				>
					{" "}
					See more ...
				</Link>
			</div> */}
		</div>
	);
}
