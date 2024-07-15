import { FormSection, FormInfo } from "./formSection";

export default function WorkExperience() {
	const workInformation = [new FormInfo(
		"company-name", "text", "Company name"
	), new FormInfo(
		"position-title", "text", "Position title"
	), new FormInfo(
		"work-desc", "text", "Main responsabilities on job", true
	)];


	return (
		<>
			<h3>Work experience</h3>
			<form action="post"></form>
			<fieldset>
				<FormSection information={workInformation}></FormSection>
				<button>Confirm</button>
				<button>Reset</button>
			</fieldset>
		</>
	)
}