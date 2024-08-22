import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="py-10 px-5 mx-3 sm:mx-auto max-w-[38.875rem] flex items-center justify-center flex-col">
			<div className="text-center">
				copyright &copy; {new Date().getFullYear()} Hussain Yusuf
			</div>

			<div>
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
		</footer>
	);
}
