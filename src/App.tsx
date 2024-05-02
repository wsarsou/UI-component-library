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
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid, high contrast background colors work great here."
				>
					<Button>Default Primary</Button>
					<Button disabled>Disabled Primary</Button>
				</Section>
				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
				>
					<Button variant="secondary">Default Secondary</Button>
					<Button variant="secondary" disabled>
						Disabled Secondary
					</Button>
				</Section>
				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach"
				>
					<Button variant="tertiary">Default Tertiary</Button>
					<Button variant="tertiary" disabled>
						Disabled Tertiary
					</Button>
				</Section>
				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence"
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
