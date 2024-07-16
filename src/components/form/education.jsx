import { FormSection, FormInfo } from "./formSection";

export default function Education({ eduState, setEdu }) {
	const studyInformation = [new FormInfo(
		"studyTitle", "text", "Title of degree"
	), new FormInfo(
		"startDate", "date", "Start date"
	), new FormInfo(
		"endDate", "date", "end-date"
	), new FormInfo(
		"descriptionTitle", "area-text", "Description of the title", true
	)];

	function educationCallbck(e) {
		setEdu({ ...eduState, [e.target.id]: e.target.value })
	}

	return (
		<>
			<h3>Education background</h3>
			<form action="post"></form>
			<fieldset>
				<FormSection information={studyInformation} callBack={educationCallbck}></FormSection>
				<button>Confirm</button>
				<button>Reset</button>
			</fieldset>
		</>
	)
}