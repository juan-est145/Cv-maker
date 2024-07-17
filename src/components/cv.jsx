export default function CV({ genInfoState, eduState, workState }) {
	return (
		<main>
			<section>
				{Object.values(genInfoState).map((element, index) => {
					return <h1 key={index}>{element}</h1>;
				})}
			</section>
			<section>
				{Object.values(eduState).map((element, index) => {
					return <h1 key={index}>{element}</h1>;
				})}
			</section>
			<section>
				{Object.values(workState).map((element, index) => {
					return <h1 key={index}>{element}</h1>;
				})}
			</section>
		</main>
	)
}