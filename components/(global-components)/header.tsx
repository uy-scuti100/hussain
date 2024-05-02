"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	GoBriefcase,
	GoHome,
	GoCalendar,
	GoLog,
	GoPerson,
} from "react-icons/go";

import { IoCalendarOutline } from "react-icons/io5";

interface MenuProps {
	pathname: string;
	label: string;
	href: string;
	icon: React.ReactNode;
}

const menuLinks: MenuProps[] = [
	{
		pathname: "/",
		label: "Home",
		href: "/",
		icon: <GoHome />,
	},
	{
		pathname: "/projects",
		label: "Projects",
		href: "/projects",
		icon: <GoBriefcase />,
	},
	{
		pathname: "/blog",
		label: "Blog",
		href: "/blog",
		icon: <GoLog />,
	},
	{
		pathname: "/now",
		label: "Now",
		href: "/now",
		icon: <GoPerson />,
	},
	{
		pathname: "",
		label: "",
		href: "",
		icon: <IoCalendarOutline />,
	},
];
export default function Header() {
	const pathname = usePathname();

	if (pathname.startsWith("/catalog")) return null;

	return (
		<header className="text-[#d4d4d8] bg-[#27272A] mt-10 rounded-full border border-zinc-700/40 py-2 sm:py-0  px-5 mx-3 sm:mx-auto max-w-[38.875rem]">
			<nav className="flex sm:justify-between w-full items-center gap-8">
				<menu className="flex items-center sm:space-x-8 w-full sm:w-auto sm:justify-between justify-around">
					{menuLinks.map((menuLink, i) =>
						i !== menuLinks.length - 1 ? (
							<Link
								key={i}
								href={menuLink.href}
								className="relative flex items-center gap-2 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
							>
								{menuLink.icon}
								<span className="hidden sm:block">{menuLink.label} </span>
								{menuLink.href === pathname && (
									<span className="absolute -bottom-px left-0 right-0 h-[2.2px] bg-gradient-to-r from-zinc-400/0 via-zinc-400/60 to-zinc-400/0" />
								)}
							</Link>
						) : (
							<button className="sm:hidden" key={i}>
								{menuLink.icon}{" "}
								<span className="hidden sm:block">{menuLink.label} </span>
							</button>
						)
					)}
				</menu>

				<button className="hidden sm:flex items-center justify-center gap-2 ">
					{" "}
					<IoCalendarOutline />
					Book a call
				</button>
			</nav>
		</header>
	);
}

{
	/* <button className="sm:hidden">
					<TbMenu size={24} />
				</button> */
}
