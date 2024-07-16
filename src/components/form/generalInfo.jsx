import { FormSection, FormInfo } from "./formSection";

export default function GeneralInfo({setGenInfo, genInfoState}) {
	const firstInput = [new FormInfo(
		"firstName", "text", "First name"
	), new FormInfo(
		"lastName", "text", "Last name"
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

	function genInfoCallbck(e) {
		setGenInfo({...genInfoState, [e.target.id] : e.target.value})
	}

	return (
		<>
			<h3>General information</h3>
			<form action="post">
				<fieldset>
					<FormSection information={firstInput} callBack={genInfoCallbck}></FormSection>
					<FormSection information={secondInput} callBack={genInfoCallbck}></FormSection>
					<button>Confirm</button>
					<button>Reset</button>
				</fieldset>
			</form>
		</>
	);
}
