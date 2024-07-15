import GeneralInfo from "./generalInfo"
import Education from "./education"
import WorkExperience from "./workExperience"

export default function Form() {
	return (
		<aside>
			<GeneralInfo></GeneralInfo>
			<Education></Education>
			<WorkExperience></WorkExperience>
		</aside>
	)
}