import { useState } from 'react'
import Form from './components/form/form'
import CV from './components/cv'

function App() {
  const [genInfoState, setGenInfo] = useState(new GeneralInfoState());
  const [eduState, setEdu] = useState(new EducationState())


  return (
    <>
      <Form
        genInfoState={genInfoState}
        setGenInfo={setGenInfo}
        eduState={eduState}
        setEdu={setEdu}
      ></Form>
      <CV
        genInfoState={genInfoState}
        eduState={eduState}
      ></CV>
    </>
  )

}

class GeneralInfoState {
  constructor(
    firstName = "",
    lastName = "",
    location = "",
    description = "",
    telephone = "",
    email = "",
    linkedin = ""
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.description = description;
    this.telephone = telephone;
    this.email = email;
    this.linkedin = linkedin;
  }
}

class EducationState {
  constructor(
    studyTitle = "",
    startDate = "",
    endDate = "",
    descriptionTitle = ""
  ) {
    this.studyTitle = studyTitle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.descriptionTitle = descriptionTitle
  }
}

export default App
