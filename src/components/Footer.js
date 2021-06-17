import React from 'react';

import styled from 'styled-components';
const Footer = () => {
	return (
		<Wrapper>
			<h5>
				&copy;{new Date().getFullYear()}
				<span> Nike</span>
			</h5>
			<h5>, Inc. All Rights Reserved</h5>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	height: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--clr-black);
	text-align: center;
	span {
		color: var(--clr-white);
		font-weight: bold;
	}
	h5 {
		color: var(--clr-grey);
		margin: 0.1rem;
		font-weight: 400;
		font-size: 0.8rem;
		text-transform: none;
		line-height: 1.25;
	}
	span {
		color: var(--clr-grey);
	}
	@media (min-width: 776px) {
		flex-direction: row;
	}
`;

export default Footer;
