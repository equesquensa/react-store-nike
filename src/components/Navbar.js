import React from 'react';
import styled from 'styled-components';
import logo from '../assets/nike2.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Nav = () => {
	const { openSidebar } = useProductsContext();
	const { myUser } = useUserContext();

	return (
		<NavContainer>
			<div className='nav-center'>
				<div className='nav-header'>
					<Link to='/'>
						<img src={logo} alt='nike' />
					</Link>
					<button type='button' className='nav-toggle' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					{links.map((link) => {
						const { id, text, url } = link;
						return (
							<li key={id}>
								<Link to={url}>{text}</Link>
							</li>
						);
					})}
					{myUser && (
						<li>
							<Link to='/checkout'>checkout</Link>
						</li>
					)}
				</ul>
				<CartButtons />
			</div>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;

	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			height: 100px;
			margin-left: -15px;
			filter: brightness(0.1);
		}
		img:hover {
			filter: brightness(1);
		}
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--clr-black);
		cursor: pointer;
		svg {
			font-size: 2rem;
		}
	}
	.nav-links {
		display: none;
	}
	.cart-btn-wrapper {
		display: none;
	}
	@media (min-width: 992px) {
		.nav-toggle {
			display: none;
		}
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--clr-black);
				font-size: 1.2rem;
				font-weight: bold;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				&:hover {
					border-bottom: 3px solid var(--clr-orange);
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`;

export default Nav;
