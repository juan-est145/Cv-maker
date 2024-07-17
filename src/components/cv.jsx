export default function CV({ genInfoState, eduState, workState }) {
	return (
		<main>
			<div>
				<h1>{genInfoState.firstName}</h1>
				<h1>{genInfoState.description}</h1>
				<h1>{genInfoState.linkedin}</h1>
				<h1>{genInfoState.telephone}</h1>
			</div>
			<div>
				<h1>{eduState.studyTitle}</h1>
				<h1>{eduState.descriptionTitle}</h1>
				<h1>{eduState.startDate}</h1>
			</div>
			<div>
				<h1>{workState.companyName}</h1>
			</div>
		</main>
	)
}