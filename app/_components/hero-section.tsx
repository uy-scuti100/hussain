import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
	return (
		<div className="mt-20">
			<div className="flex items-center gap-5">
				<div className="relative w-[120px] h-[120px] rounded-full ">
					<Image
						src="https://lh3.googleusercontent.com/a/ACg8ocJAQuAkSRqYZAfgmWAmERfRhymd7s156NQHJ1rSJvqxP6nFNg=s192-c-rg-br100"
						fill
						alt={"Hussain Yusuf | UY_SCUTI"}
						className="rounded-full object-cover transition-all duration-300"
					/>
				</div>
				<div className="flex-1">
					<span className="flex items-center">
						<h2 className="">Hussain Yusuf</h2>

						<small className="ml-3">(UY_SCUTI)</small>
					</span>
					<p className="text-sm md:text-base">
						Full-stack Web Developer and Designer.
					</p>

					<div className="flex items-center gap-3 mt-3">
						<Link
							href="mailto:osenidirect@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="text-zinc-500 hover:text-zinc-300 underline"
						>
							Email
						</Link>
						<Link
							href="https://github.com/uy-scuti100"
							target="_blank"
							rel="noreferrer"
							className="text-zinc-500 hover:text-zinc-300 ml-3 underline"
						>
							Github
						</Link>
						<Link
							href="https://www.linkedin.com/in/uy-scuti/"
							target="_blank"
							rel="noreferrer"
							className="text-zinc-500 hover:text-zinc-300 ml-3 underline"
						>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
			<div className="mt-10 ">
				<p className="mb-3 leading-[180%]">
					I&apos;m a full-stack web developer and web designer, committed to
					creating scalable web apps and websites that are easy to use. I
					specialize in highly converting landing pages and lead-generating
					websites that help businesses grow, convert effectively, and crush
					their goals. <br />{" "}
				</p>
				<p className="leading-[180%]">
					With expertise in both web design and development, I specialize in
					crafting user-centric experiences and interfaces, as well as robust,
					secure backend solutions. My goal is to deliver exceptional digital
					experiences that not only meet but exceed expectations.
				</p>
			</div>
		</div>
	);
}
