import FormSection from "./formSection";

export default function Education() {
	const studyInformation = [{
		label: "study-title",
		input: "text",
		content: "Title of degree"
	}, {
		label: "start-date",
		input: "date",
		content: "start-date"
	}, {
		label: "end-date",
		input: "date",
		content: "end-date"
	}, {
		label: "description",
		input: "area-text",
		content: "Description of the title"
	}]

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