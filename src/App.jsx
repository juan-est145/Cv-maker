import { useState } from 'react'
import Form from './components/form/form'
import CV from './components/cv'
import "./styles/App.css"

function App() {
  const [genInfoState, setGenInfo] = useState(new GeneralInfoState());
  const [eduState, setEdu] = useState(new EducationState())
  const [workState, setWork] = useState(new WorkState())

  return (
    <>
      <Form
        genInfoState={genInfoState}
        setGenInfo={setGenInfo}
        eduState={eduState}
        setEdu={setEdu}
        workState={workState}
        setWork={setWork}
      ></Form>
      <main>
        <CV stateInfo={genInfoState}></CV>
        <CV stateInfo={eduState}></CV>
        <CV stateInfo={workState}></CV>
      </main>

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

class WorkState {
  constructor(
    companyName = "",
    positionTitle = "",
    workDesc = ""
  ) {
    this.companyName = companyName;
    this.positionTitle = positionTitle;
    this.workDesc = workDesc;
  }
}

export default App
