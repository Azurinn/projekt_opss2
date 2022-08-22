import './Contact.css';
import { useState } from 'react';

const EMPTY_FORM = {
	name: '',
	email: '',
	message: '',
};

function Contact() {
	const [formFields, setFormFields] = useState(EMPTY_FORM);

	const handleSubmit = e => {
		e.preventDefault();
		setFormFields(EMPTY_FORM);
		fetch('https://formspree.io/f/xqkjaaad', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formFields),
		})
			.then(resp => resp.json())
			.then(resp =>
				alert(resp.ok ? 'Thanks for contact!' : 'somethings gone wrong')
			)
			.catch(() => alert('somethings gone wrong'));
	};

	const handleChange = e => {
		const fieldName = e.target.name;
		setFormFields({ ...formFields, [fieldName]: e.target.value });
	};

	return (
		<div>
			<h1>Contact</h1>
			<form className="form" onSubmit={handleSubmit}>
				<label className="formField">
					Name
					<input name="name" value={formFields.name} onChange={handleChange} />
				</label>
				<label className="formField">
					Email
					<input
						name="email"
						type="email"
						value={formFields.email}
						onChange={handleChange}
					/>
				</label>
				<label className="formField">
					Message
					<textarea
						name="message"
						value={formFields.message}
						onChange={handleChange}
					/>
				</label>
				<button className="button">Wyślij</button>
			</form>
		</div>
	);
}

export { Contact };
