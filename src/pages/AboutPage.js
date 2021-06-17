import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import nikeImg from '../assets/nike-page.jpg';

const AboutPage = () => {
	return (
		<main>
			<PageHero title='about' />
			<Wrapper className='page section section-center'>
				<img src={nikeImg} alt='nike' />
				<article>
					<div className='title'>
						<h2>our story</h2>
						<div className='underline'></div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
							amet rem optio excepturi, voluptates distinctio aperiam ullam
							minima praesentium labore eum voluptatibus quo ex doloribus eaque!
							Iusto sapiente assumenda unde ipsa enim eveniet sed nesciunt.
							Deserunt dolor facere odio sit repellendus suscipit sapiente,
							tempore sint debitis incidunt totam fugit repudiandae?
						</p>
					</div>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-black);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
