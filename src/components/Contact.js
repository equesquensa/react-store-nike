import React from 'react';
import styled from 'styled-components';

const Contact = () => {
	return (
		<Wrapper>
			<div className='section-center'>
				<h3>
					Get first and exclusive access to the newest styles & innovation
				</h3>
				<div className='content'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
						accusantium ea quas, quaerat autem nam cupiditate eius iste fugit
						obcaecati.
					</p>
				</div>
				<form
					className='contact-form'
					action='https://formspree.io/f/xleabwrz'
					method='POST'
				>
					<input
						type='email'
						className='form-input'
						placeholder='enter email'
						name='_replyto'
					/>
					<button type='submit' className='submit-btn'>
						Subscribe
					</button>
				</form>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	padding: 5rem 0;
	background: var(--clr-white);
	h3 {
		text-transform: none;
		color: var(--clr-orange);
	}
	p {
		line-height: 2;
		max-width: 45em;
		color: var(--clr-black);
		font-weight: 500;
	}
	.contact-form {
		width: 90vw;
		max-width: 500px;
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.form-input,
	.submit-btn {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border: 2px solid var(--clr-grey-dark);
	}
	.form-input {
		border-right: none;
		color: var(--clr-black);
		border-top-left-radius: var(--radius);
		border-bottom-left-radius: var(--radius);
	}
	.submit-btn {
		border-top-right-radius: var(--radius);
		border-bottom-right-radius: var(--radius);
	}
	.form-input::placeholder {
		color: var(--clr-grey);
		text-transform: capitalize;
	}
	.submit-btn {
		background: var(--clr-orange);
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		cursor: pointer;
		transition: var(--transition);
		color: var(--clr-black);
		font-weight: bold;
	}
	.submit-btn:hover {
		color: var(--clr-white);
		font-weight: bold;
	}
	@media (min-width: 992px) {
		.content {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			gap: 8rem;
			margin-top: 2rem;
		}
		p {
			margin-bottom: 0;
		}
	}
	@media (min-width: 1280px) {
		padding: 15rem 0;
	}
`;

export default Contact;
