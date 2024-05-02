import { SiYoutube, SiGithub } from "react-icons/si"
import { Section } from "./components/site/Section"

export default function App() {
	return (
		<div className="relative min-h-screen bg-white">
			{/* {Navbar} */}
			<header className="sticky top-0 z-50 w-full border-b bg-white">
				<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
					<div className="mx-auto w-full max-w-3xl space-y-20">
						<div className="flex justify-between">
							<div className="flex flex-1 items-center justify-start"></div>

							<a
								href="/"
								className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
							>
								Walaa's UI Component Library
							</a>
							<div className="flex flex-1 items-center justify-end">
								<nav className="flex items-center space-x-1">
									<a
										href="https://www.youtube.com"
										className="h-10 w-10 p-2 text-gray-800 hover:text-[#ff0000]"
									>
										<SiYoutube className="h-full w-full" />
									</a>
									<a
										href="https://www.github.com/wsarsou"
										className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]"
									>
										<SiGithub className="h-full w-full" />
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* {Main content area} */}
			<main className="sm-px-16 p-10 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">
					{/* {Content container} */}
					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							component name
						</h1>
						<p className="mt-2 text-lg text-gray-800">description</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						<Section
							title="section heading using a component"
							description="section description using a component"
						>
							<div className="bg-blue-500/50 p-3">
								component 1 using a component
							</div>
							<div className="bg-blue-500/50 p-3">
								component 2 using a component
							</div>
						</Section>
						<Section
							title="section heading using a component"
							description="section description using a component"
						>
							<div className="bg-blue-500/50 p-3">
								component 1 using a component
							</div>
							<div className="bg-blue-500/50 p-3">
								component 2 using a component
							</div>
						</Section>
						<Section
							title="section heading using a component"
							description="section description using a component"
						>
							<div className="bg-blue-500/50 p-3">
								component 1 using a component
							</div>
							<div className="bg-blue-500/50 p-3">
								component 2 using a component
							</div>
						</Section>
					</div>
					{/* {Content container} */}
					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							component name
						</h1>
						<p className="mt-2 text-lg text-gray-800">description</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						<Section
							title="section heading using a component"
							description="section description using a component"
						>
							<div className="bg-blue-500/50 p-3">
								component 1 using a component
							</div>
							<div className="bg-blue-500/50 p-3">
								component 2 using a component
							</div>
						</Section>
						<Section
							title="section heading using a component"
							description="section description using a component"
						>
							<div className="bg-blue-500/50 p-3">
								component 1 using a component
							</div>
							<div className="bg-blue-500/50 p-3">
								component 2 using a component
							</div>
						</Section>
					</div>
				</div>
			</main>
		</div>
	)
}
