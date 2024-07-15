import { FormSection, FormInfo } from "./formSection";

export default function Education() {
	const studyInformation = [new FormInfo(
		"study-title", "text", "Title of degree"
	), new FormInfo(
		"start-date", "date", "Start date"
	), new FormInfo(
		"end-date", "date", "end-date"
	), new FormInfo(
		"description", "area-text", "Description of the title", true
	)];

	return (
		<>
			<h3>Education background</h3>
			<form action="post"></form>
			<fieldset>
				<FormSection information={studyInformation}></FormSection>
				<button>Confirm</button>
				<button>Reset</button>
			</fieldset>
		</>
	)
}