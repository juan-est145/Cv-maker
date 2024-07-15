export function FormSection({ information }) {
	return (
		<div>
			{information.map((element) =>
				!element.textArea ?
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

export class FormInfo {
	constructor(label, input, content, textArea = false) {
		this.label = label;
		this.input = input;
		this.content = content;
		this.textArea = textArea;
	}
}