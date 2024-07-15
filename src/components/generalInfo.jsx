export default function GeneralInfo() {
	const labels = {
		firstName : "first-name",
		lastName: "last-name",
		description: "description",
		telephone: "telephone",
		email: "email",
		linkedin: "linkedin"
	};

	return (
		<>
		<h3>General information</h3>
		<form action="post">
			<fieldset>
			<div>
				<label htmlFor={labels.firstName}>First name</label>
				<input type="text" placeholder="First name" id={labels.firstName}/>
				<label htmlFor={labels.lastName}>Last name</label>
				<input type="text" placeholder="Last name" id={labels.lastName}/>
			</div>
			<div>
				<label htmlFor={labels.description}>Description</label>
				<input type="text" placeholder="Description" id={labels.description}/>
				<label htmlFor={labels.telephone}>Telephone</label>
				<input type="tel" placeholder="Telephone" id={labels.telephone}/>
				<label htmlFor={labels.email}>Email</label>
				<input type="email" placeholder="Email" id={labels.email}/>
				<label htmlFor={labels.email}>Linkedin</label>
				<input type="url" placeholder="Linkedin" id={labels.email}/>
			</div>
			</fieldset>
		</form>
		</>
	);
}