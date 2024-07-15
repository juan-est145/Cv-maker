import FormSection from "./formSection";

export default function GeneralInfo() {
	const firstInput = [{
		label: "first-name",
		input: "text",
		content: "First name"
	}, {
		label: "last-name",
		input: "text",
		content: "Last name"
	}, {
		label: "location",
		input: "text",
		content: "Location"
	}]

	const secondInput = [{
		label: "description",
		input: "text",
		content: "Description"
	}, {
		label: "telephone",
		input: "tel",
		content: "Telephone"
	}, {
		label: "email",
		input: "email",
		content: "Email"
	}, {
		label: "linkedin",
		input: "url",
		content: "Linkedin"
	}]

	return (
		<>
			<h3>General information</h3>
			<form action="post">
				<fieldset>
					<FormSection information={firstInput}></FormSection>
					<FormSection information={secondInput}></FormSection>
					<button>Confirm</button>
					<button>Reset</button>
				</fieldset>
			</form>
		</>
	);
}
