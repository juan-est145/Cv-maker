import { v4 as uuidv4 } from 'uuid';

export function FormSection({ information, callBack }) {
	return (
		<>{information.map((element) =>
			!element.textArea ?
				<>
					<section className={element.label}>
						<label htmlFor={element.label}>{element.content}</label>
						<input
							type={element.input}
							placeholder={element.content}
							id={element.label}
							onChange={callBack}
						/>
					</section>
				</>
				:
				<>
					<section className={element.label}>
						<label htmlFor={element.label}>{element.content}</label>
						<textarea
							type={element.input}
							placeholder={element.content}
							id={element.label}
							onChange={callBack} />
					</section>
				</>
		)}</>
	)
}

export class FormInfo {
	constructor(label, input, content, textArea = false) {
		this.label = label;
		this.input = input;
		this.content = content;
		this.textArea = textArea;
		this.id = uuidv4();
	}
}