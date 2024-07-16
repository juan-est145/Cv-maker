import GeneralInfo from "./generalInfo"
import Education from "./education"
import WorkExperience from "./workExperience"

export default function Form({setGenInfo, genInfoState}) {
	return (
		<aside>
			<GeneralInfo setGenInfo={setGenInfo} genInfoState={genInfoState}></GeneralInfo>
			<Education></Education>
			<WorkExperience></WorkExperience>
		</aside>
	)
}