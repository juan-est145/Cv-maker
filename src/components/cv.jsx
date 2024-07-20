export default function CV({ genInfoState, eduState, workState }) {
	return (
		<GeneralInfoCV genInfoState={genInfoState}></GeneralInfoCV>
	)
}

function GeneralInfoCV({ genInfoState }) {
	if (!genInfoState.showInfo)
		return (null);
	return (
		<section>
			<h1>{`${genInfoState.firstName} ${genInfoState.lastName}`}</h1>
			<div>
				<span>{genInfoState.email}</span>
				<span>{genInfoState.telephone}</span>
				<span>{genInfoState.location}</span>
				<span>{genInfoState.linkedin}</span>
			</div>
			<div>
				<h3>About me</h3>
				<p>{genInfoState.description}</p>
			</div>
		</section>
	)
}