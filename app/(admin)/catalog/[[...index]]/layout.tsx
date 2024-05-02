import React, { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
	return <main className="max-w-7xl mx-auto min-h-screen">{children}</main>;
}
