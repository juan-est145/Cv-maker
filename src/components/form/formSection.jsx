export default function FormSection({ information }) {
	return (
		<div>
			{information.map((element) =>
				element.label !== "description" ?
				<>
					<label htmlFor={element.label}>{element.content}</label>
					<input type={element.input} placeholder={element.content} id={element.label} />
				</>
				:
				<>
					<label htmlFor={element.label}>{element.content}</label>
					<textarea type={element.input} placeholder={element.content} id={element.label} />
				</>
			)}
		</div>
	)
}