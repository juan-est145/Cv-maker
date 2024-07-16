import GeneralInfo from "./generalInfo"
import Education from "./education"
import WorkExperience from "./workExperience"

export default function Form({
	genInfoState,
	setGenInfo,
	eduState,
	setEdu
}) {
	return (
		<aside>
			<GeneralInfo setGenInfo={setGenInfo} genInfoState={genInfoState}></GeneralInfo>
			<Education eduState={eduState} setEdu={setEdu}></Education>
			<WorkExperience></WorkExperience>
		</aside>
	)
}