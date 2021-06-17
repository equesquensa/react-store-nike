import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import nikeImg3 from '../assets/nike-page3.jpg';
import nikeImg2 from '../assets/nike-page2.jpg';

const Hero = () => {
	return (
		<Wrapper className='section-center'>
			<article className='content'>
				<h1>
					Just <br />
					Do <br />
					it.
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					nesciunt perferendis, numquam reprehenderit iusto blanditiis rerum
					unde quas earum officia!
				</p>
				<Link to='/products' className='btn hero-btn'>
					Shop now
				</Link>
			</article>
			<article className='img-container'>
				<img src={nikeImg3} alt='nike 1' className='main-img' />
				<img src={nikeImg2} alt='nike 2' className='accent-img' />
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}
	h1 {
		color: var(--clr-orange);
		text-align: center;
		display: flex;
		justify-content: flex-start;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--clr-black);
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
		.accent-img {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 250px;
			transform: translateX(-50%);
			border-radius: var(--radius);
		}
		.img-container::before {
			content: '';
			position: absolute;
			width: 10%;
			height: 80%;
			background: var(--clr-orange);
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`;

export default Hero;
