import { FormSection, FormInfo } from "./formSection";

export default function WorkExperience({workState, setWork}) {
	const workInformation = [new FormInfo(
		"companyName", "text", "Company name"
	), new FormInfo(
		"positionTitle", "text", "Position title"
	), new FormInfo(
		"workDesc", "text", "Main responsabilities on job", true
	)];

	function workCallbck(e) {
		setWork({...workState, [e.target.id]: e.target.value})
	}

	return (
		<>
			<h3>Work experience</h3>
			<form action="post"></form>
			<fieldset>
				<FormSection information={workInformation} callBack={workCallbck}></FormSection>
				<button>Confirm</button>
				<button>Reset</button>
			</fieldset>
		</>
	)
}