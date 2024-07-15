import { FormSection, FormInfo } from "./formSection";

export default function GeneralInfo() {
	const firstInput = [new FormInfo(
		"first-name", "text", "First name"
	), new FormInfo(
		"last-name", "text", "Last name"
	), new FormInfo(
		"location", "text", "Location"
	)];
	const secondInput = [new FormInfo(
		"description", "text", "Description"
	), new FormInfo(
		"telephone", "tel", "Telephone"
	), new FormInfo(
		"email", "email", "Email"
	), new FormInfo(
		"linkedin", "url", "Linkedin"
	)];

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
