import { Navbar } from "./Navbar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative min-h-screen bg-white">
			<Navbar />
			{/* {Main content area} */}
			<main className="sm-px-16 p-10 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">{children}</div>{" "}
			</main>{" "}
		</div>
	)
}
