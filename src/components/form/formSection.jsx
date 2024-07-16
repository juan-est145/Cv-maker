export function FormSection({ information, callBack }) {
	return (
		<div>
			{information.map((element) =>
				!element.textArea ?
					<>
						<label htmlFor={element.label}>{element.content}</label>
						<input
							type={element.input}
							placeholder={element.content}
							id={element.label}
							onChange={callBack}
						/>
					</>
					:
					<>
						<label htmlFor={element.label}>{element.content}</label>
						<textarea
							type={element.input}
							placeholder={element.content}
							id={element.label}
							onChange={callBack} />
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