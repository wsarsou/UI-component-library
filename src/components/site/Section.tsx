export const Section = ({
	title,
	description,
	children,
}: {
	title: string
	description: string
	children: React.ReactNode
}) => {
	return (
		<div>
			{/* {Section heading} */}
			<h2 className="text-lg font-bold text-gray-800">{title}</h2>
			{/* {Section description} */}
			<p className="mt-1 text-lg text-gray-800">{description}</p>
			{/* {Section preview area} */}
			<div className="mt-3">
				<div className="flex flex-col rounded-xl border p-6 shadow-sm">
					<div className="flex flex-wrap gap-2">
						{/* {Child components-previewed stuff} */}
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
