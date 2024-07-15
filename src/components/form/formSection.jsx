export default function FormSection({ information }) {
	return (
		<div>
			{information.map((element) =>
				<>
					<label htmlFor={element.label}>{element.content}</label>
					<input type={element.input} placeholder={element.content} id={element.label} />
				</>
			)}
		</div>
	)
}