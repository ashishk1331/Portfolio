export default function SectionTitle(props){
	return (
		<h1 className="v-flex text-5xl py-12 m-auto col-span-1 xl:col-span-4 lg:grid-col-span-3 md:col-span-2">
			{ props.logo }
			{ props.title }
		</h1>
	)
}