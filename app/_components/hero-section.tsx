import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
	return (
		<div className="mt-20">
			<div className="flex items-center gap-5">
				<div>
					<Image
						src="/hussain-yusuf.jpg"
						height={120}
						width={120}
						alt={"Hussain Yusuf | UY_SCUTI"}
						className="rounded-full object-cover"
						priority={true}
					/>
				</div>
				<div className="flex-1">
					<span className="flex items-center">
						<h2 className="">Hussain Yusuf</h2>

						<small className="ml-3">(UY_SCUTI)</small>
					</span>
					<p className="text-sm md:text-base">Front-End Developer</p>

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
					<div className="mt-5">
						<a
							href="/hussain-cv.pdf"
							download="Hussain Yusuf Resume.pdf"
							className="bg-primary text-primary-foreground px-3 py-2 rounded-md"
						>
							Download My Resume
						</a>
					</div>
				</div>
			</div>

			<div className="mt-10 ">
				<p className="mb-3 leading-[180%]">
					I am a front-end developer dedicated to crafting intuitive and
					accessible digital experiences. My expertise lies in building scalable
					and user-friendly software that not only meets the needs of end-users
					but also pushes the boundaries of modern web development.
					<br />{" "}
				</p>
				<p className="leading-[180%]">
					With a strong focus on design and user experience, I specialize in
					creating seamless interfaces that are both aesthetically pleasing and
					highly functional. My goal is to deliver software that enhances user
					engagement, drives innovation, and exceeds expectations in every
					project.
				</p>
			</div>
		</div>
	);
}
