import { useState } from 'react'
import Form from './components/form/form'
import CV from './components/cv'

function App() {
  const [genInfoState, setGenInfo] = useState(new GeneralInfoState());
  
  return (
    <>
      <Form setGenInfo={setGenInfo} genInfoState={genInfoState}></Form>
      <CV genInfoState={genInfoState}></CV>
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

export default App
