import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs = [
	{
		title: "responsive websites",
		description:
			"  Responsive websites are a great way to create a great user experience on all devices. But how do you make them? This article will show you how to make a responsive website using CSS Grid.",
		image:
			"https://lh3.googleusercontent.com/a/ACg8ocJAQuAkSRqYZAfgmWAmERfRhymd7s156NQHJ1rSJvqxP6nFNg=s192-c-rg-br100",
		content:
			" Responsive websites are a great way to create a great user experience on all devices. But how do you make them? This article will show you how to make a responsive website using CSS Grid.",
	},
	{
		title: "responsive websites",
		description:
			"  Responsive websites are a great way to create a great user experience on all devices. But how do you make them? This article will show you how to make a responsive website using CSS Grid.",
		image:
			"https://lh3.googleusercontent.com/a/ACg8ocJAQuAkSRqYZAfgmWAmERfRhymd7s156NQHJ1rSJvqxP6nFNg=s192-c-rg-br100",
		content:
			" Responsive websites are a great way to create a great user experience on all devices. But how do you make them? This article will show you how to make a responsive website using CSS Grid.",
	},
	{
		title: "responsive websites",
		description:
			"  Responsive websites are a great way to create a great user experience on all devices. But how do you make them? This article will show you how to make a responsive website using CSS Grid.",
		image:
			"https://lh3.googleusercontent.com/a/ACg8ocJAQuAkSRqYZAfgmWAmERfRhymd7s156NQHJ1rSJvqxP6nFNg=s192-c-rg-br100",
		content:
			" Responsive websites are a great way to create a great user experience on all devices. But how do you make them? This article will show you how to make a responsive website using CSS Grid.",
	},
];
export default function Blogs() {
	return (
		<div className="mt-20">
			<h2 className="font-bold">Blogs</h2>
			<div className="mt-5">
				{blogs.map((blog, index) => (
					<div
						className="flex items-center gap-4 justify-between border-b border-zinc-700/40 py-4"
						key={index}
					>
						<div className="relative w-16 h-16 rounded-full">
							<Image
								src={blog.image}
								alt={blog.title}
								className="rounded-full object-cover transition-all duration-300 grayscale hover:grayscale-0"
								fill
							/>
						</div>
						<div className="flex-1 flex flex-col my-2">
							<h3 className="font-bold pb-1 leading-none">{blog.title}</h3>
							<p className="text-sm pb-2">{blog.description}</p>
							{/* <Link href={`/blogs/${blog.title}`}>Read</Link> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
