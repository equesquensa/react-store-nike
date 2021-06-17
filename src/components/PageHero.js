import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product }) => {
	return (
		<Wrapper>
			<div className='section-center'>
				<h3>
					<Link to='/'>Home </Link>
					{product && <Link to='/products'>/ Products</Link>}/ {title}
				</h3>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--clr-black);
	width: 100%;
	min-height: 10vh;
	display: flex;
	align-items: center;
	color: var(--clr-white);
	a {
		color: var(--clr-orange-light);
		padding: 0.5rem;
		transition: var(--transition);
	}
	a:hover {
		color: var(--clr-orange);
	}
`;

export default PageHero;