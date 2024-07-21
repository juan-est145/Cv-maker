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
        <div className="CV">
          <CV
            genInfoState={genInfoState}
            eduState={eduState}
            workState={workState}
          ></CV>
        </div>
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
    this.showInfo = false;
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
    this.showInfo = false;
  }
}

class WorkState {
  constructor(
    companyName = "",
    positionTitle = "",
    workStartDate = "",
    workEndDate = "",
    workDesc = ""
  ) {
    this.companyName = companyName;
    this.positionTitle = positionTitle;
    this.workStartDate = workStartDate;
    this.workEndDate = workEndDate;
    this.workDesc = workDesc;
    this.showInfo = false;
  }
}

export default App
