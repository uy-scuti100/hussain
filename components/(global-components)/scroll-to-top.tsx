"use client";

import React, { useState } from "react";
import { TbCaretUp } from "react-icons/tb";

export default function ScrollToTop() {
	const [showButton, setShowButton] = useState(false);

	const toggle = () => {
		var currentPosition = window.scrollY || document.documentElement.scrollTop;
		if (currentPosition > 0) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	// Add a scroll event listener to the window object
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", function () {
			// Get the current scroll position
			var currentPosition =
				window.scrollY || document.documentElement.scrollTop;

			// Get the height of the viewport
			var viewportHeight = window.innerHeight;

			// Set a threshold for showing the button (in this case, half the viewport height)
			var threshold = viewportHeight / 3;

			// If the current scroll position is greater than the threshold, show the button
			if (currentPosition > threshold) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}
	return (
		<button
			onClick={toggle}
			className={`${
				showButton ? "opacity-1 translate-x-0" : "opacity-0 translate-x-[200%]"
			} bg-[#27272A] fixed rounded-full  h-10 w-10 flex justify-center items-center bottom-5 right-5 z-50  transition-all duration-700 ease-in-out`}
		>
			<TbCaretUp className="text-white text-3xl cursor-pointer" />
		</button>
	);
}
