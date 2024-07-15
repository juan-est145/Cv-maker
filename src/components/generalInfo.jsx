export default function GeneralInfo() {
	return (
		<>
		<h3>General information</h3>
		<form action="post">
			<fieldset>
			<div>
				<label htmlFor="first-name">First name</label>
				<input type="text" placeholder="First name" id="first-name"/>
				<label htmlFor="last-name">Last name</label>
				<input type="text" placeholder="Last name" id="last-name"/>
			</div>
			
				
			<input type="text" placeholder="Description"/>
			<input type="tel" placeholder="Telephone"/>
			<input type="" />
			</fieldset>
		</form>
		</>
	);
}