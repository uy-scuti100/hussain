import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
	{
		title: " Andre Armani",
		description: "E-commerce storefront for an artworks and clothing brand.",
		image: "/andre logo.png",
		link: "https://andre-armani.vercel.app",
	},
	{
		title: "Inked Tattoo Studio",
		description: "Landing page website for tattoo studio.",
		image: "/inked.png",
		link: "https://inked.vercel.app/",
	},
	{
		title: "Nexus ",
		description: "A fullstack react and typescript blog website.",
		image: "/nexus.webp",
		link: "https://react-nexus-nine.vercel.app",
	},
];
export default function Projects() {
	return (
		<div className="mt-20">
			<h2 className="font-bold">Projects</h2>
			<div className="mt-5">
				{projects.map((project, index) => (
					<div
						className="flex items-center gap-4 justify-between border-b border-zinc-700/40 py-4"
						key={index}
					>
						<div className="relative w-16 h-16 rounded-full ">
							<Image
								src={project.image}
								alt={project.title}
								className="rounded-full object-cover transition-all duration-300 grayscale hover:grayscale-0"
								fill
							/>
						</div>

						<div className="flex-1 flex flex-col my-2">
							<h3 className="font-bold pb-1 leading-none">{project.title}</h3>

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

			<div className="my-5">
				<Link
					href={"/projects"}
					className="text-sm text-zinc-400 hover:text-zinc-900 transition-all duration-700  underline my-1"
				>
					{" "}
					See more ...
				</Link>
			</div>
		</div>
	);
}
