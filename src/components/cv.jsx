export default function CV({genInfoState}) {
	return (
		<main>
			<h1>{genInfoState.firstName}</h1>
			<h1>{genInfoState.description}</h1>
			<h3>{genInfoState.linkedin}</h3>
		</main>
	)
}