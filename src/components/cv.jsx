import "../styles/cv.css"

export default function CV({ genInfoState, eduState, workState }) {
	return (
		<GeneralInfoCV genInfoState={genInfoState}></GeneralInfoCV>
	)
}

function GeneralInfoCV({ genInfoState }) {
	let emailSvg = <svg fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"></path> </g></svg>;
	let phoneSvg = <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> fill:#ffffff </style> <g> <path className="st0" d="M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165 c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792 c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135 c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142 c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006 c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14 C152.159-1.117,112.6,10.159,94.811,21.696z"></path> </g> </g></svg>

	if (!genInfoState.showInfo)
		return (null);
	return (
		<section className="genInfo">
			<h1>{`${genInfoState.firstName} ${genInfoState.lastName}`}</h1>
			<h3>Contact information</h3>
			<div className="contactInfo">
				{genInfoState.email && (
					<div>
						{emailSvg}
						<span>{genInfoState.email}</span>
					</div>
				)}
				<div>
					{phoneSvg}
					<span>{genInfoState.telephone}</span>
				</div>
				<div>
					<span>{genInfoState.location}</span>
				</div>
				<div>
					<span>{genInfoState.linkedin}</span>
				</div>
			</div>
			<div>
				<h3>About me</h3>
				<p>{genInfoState.description}</p>
			</div>
		</section>
	)
}


