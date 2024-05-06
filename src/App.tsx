import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/library/Button"

export default function App() {
	return (
		<Layout>
			<Container
				title="Button"
				description="A button widget is a UI element that is used to trigger an action. These actions can be navigating to another form, deleting operations, performing animations, or interacting with a dialog box for example."
			>
				{/* primary button */}
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid, high contrast background colors work great here."
				>
					<Button>Default</Button>

					{/* disabled primary button */}

					<Button disabled>Disabled</Button>

					{/* primary color override buttons */}

					<Button
						colors={{
							bg: "bg-amber-500",
							hoverBg: "hover:bg-amber-600",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber Primary
					</Button>
					<Button
						colors={{
							bg: "bg-rose-500",
							hoverBg: "hover:bg-rose-600",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						colors={{
							bg: "bg-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-600",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						colors={{
							bg: "bg-indigo-500",
							hoverBg: "hover:bg-indigo-600",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo{" "}
					</Button>
					<Button
						colors={{
							bg: "bg-[#1da1f2]",
							hoverBg: "hover:bg-[#1a8cd8]",
							focusRing: "focus:ring-[#1da1f2]-500",
						}}
					>
						Twitter Blue{" "}
					</Button>
				</Section>
				{/* secondary button */}
				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
				>
					<Button variant="secondary">Default</Button>

					{/* disabled secondary button */}

					<Button variant="secondary" disabled>
						Disabled
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-amber-500",
							hoverBorder: "hover:border-amber-500",
							hoverBg: "hover:bg-amber-500",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-rose-500",
							hoverBorder: "hover:border-rose-500",
							hoverBg: "hover:bg-rose-500",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-fuchsia-500",
							hoverBorder: "hover:border-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-500",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-indigo-500",
							hoverBorder: "hover:border-indigo-500",
							hoverBg: "hover:bg-indigo-500",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-[#1da1f2]",
							hoverBorder: "hover:border-[#1da1f2]",
							hoverBg: "hover:bg-[#1da1f2]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>
				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach"
				>
					<Button variant="tertiary">Default</Button>
					<Button variant="tertiary" disabled>
						Disabled
					</Button>

					<Button
						variant="tertiary"
						colors={{
							text: "text-amber-500",
							hoverText: "hover:text-amber-700",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-rose-500",
							hoverText: "hover:text-rose-700",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-fuchsia-500",
							hoverText: "hover:text-fuchsia-700",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-indigo-500",
							hoverText: "hover:text-indigo-700",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-[#1da1f2]",
							hoverText: "hover:text-[#1da1f2]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>

				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence"
				>
					{/* destructive primary button */}

					<Button
						colors={{
							bg: "bg-red-500",
							hoverBg: "hover:bg-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Yes, I'm sure I want to delete this
					</Button>

					{/* destructive secondary button */}

					<Button
						variant="secondary"
						colors={{
							text: "text-red-500",
							hoverBorder: "hover:border-red-600",
							hoverBg: "hover:bg-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Unsubscribe
					</Button>

					{/* destructive tertiary button */}

					<Button
						variant="tertiary"
						colors={{
							text: "text-gray-500",
							hoverText: "hover:text-gray-600",
							focusRing: "focus:ring-gray-500",
						}}
					>
						Cancel{" "}
					</Button>
				</Section>
			</Container>

			<Container
				title="component name using a component"
				description="description using a component"
			>
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
			</Container>

			<Container
				title="component name using a component"
				description="description using a component"
			>
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
			</Container>
		</Layout>
	)
}
