export default function SectionTitle(props){
	return (
		<h1 className="v-flex text-5xl py-12 m-auto">
			{ props.logo }
			{ props.title }
		</h1>
	)
}