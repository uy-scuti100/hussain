import React from "react";
import HeroSection from "./_components/hero-section";
import Projects from "./_components/projects";
import Blogs from "./_components/blogs";

export default function page() {
	return (
		<div className="px-5 sm:mx-auto max-w-[38.875rem]">
			<HeroSection />
			<Projects />
			{/* <Blogs /> */}
		</div>
	);
}
