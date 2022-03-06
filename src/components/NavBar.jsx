import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
	return (
		<>
			<Container>
				<Account>
					<div className="two">
						<Photo>N</Photo>
						<Name>Name</Name>
					</div>
					<SideLeft>
						<img src="slide-left.png" alt="image" />
					</SideLeft>
				</Account>
				<Link>
					<NavLink exact activeClassName="active" to="/Home">
						<img src="Category.png" alt="" /> <p>Home</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/section1">
						<img src="Category1.png" alt="" />
						<p>Section 1</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/section2">
						<img src="Category2.png" alt="" />
						<p>Section 2</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/section3">
						<img src="Category3.png" alt="" />
						<p>Section 3</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/section4">
						<img src="Category4.png" alt="" />
						<p>Section 4</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/section5">
						<img src="Category5.png" alt="" />
						<p>Section 5</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/section6">
						<img src="Category6.png" alt="" />
						<p>Section 6</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/section7">
						<img src="Category7.png" alt="" />
						<p>Section 7</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/">
						<img src="Category8.png" alt="" />
						<p>Section 8</p>
					</NavLink>
					<NavLink exact activeClassName="active" to="/docs">
						<img src="Documentaion.png" alt="" />
						<p>Documentation</p>
					</NavLink>
				</Link>
				<Base>
					<div className="main">
						<div className="main2">
							<Photo2>N</Photo2>
							<p>$0.90</p>
						</div>
						<div className="main3">Buy $XYZ</div>
					</div>
					<div className="mains">
						<div className="global">
							<img src="Vector.png" alt="" />
						</div>
						<div className="mode">
							<div className="night">
								<img src="Night.png" alt="" />
							</div>
							<div className="day">
								<Photo3 />
							</div>
						</div>
					</div>
				</Base>
			</Container>
		</>
	);
};

export default NavBar;
const Container = styled.div`
	width: 18%;
	height: 96.5vh;
	border-right: 1px solid gray;
	position: fixed;
	.active {
		color: #fff;
		background-color: #353945;
	}
`;
const Account = styled.div`
	height: 10vh;
	border: 2px solid black;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 3rem;
	.two {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		font-size: 1.8rem;
		font-weight: 600;
		color: white;
	}
`;

const Link = styled.div`
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 10px;

	a {
		width: 80%;
		height: 2.1rem;
		border-radius: 5px;
		padding: 0 1rem;
		align-self: center;
		gap: 1rem;
		text-decoration: none;
		color: gray;
		display: flex;
		justify-content: left;
		align-items: center;
		p {
			color: inherit;
			background-color: inherit;
		}
		img {
			color: inherit;
			background-color: inherit;
		}
	}
`;

const Base = styled.div`
	color: white;
	padding: 0 1rem;
	height: 25%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	aling-items: flex-end;
	gap: 1rem;

	.main {
		display: flex;
		gap: 1rem;

		.main2,
		.main3 {
			height: 2.8rem;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}
		.main2 {
			background-color: #353945;
			border-radius: 7px;
			cursor: pointer;
			p {
				background-color: inherit;
			}
		}
		.main3 {
			background-color: #a3e3ff;
			color: #5895ff;
			font-weight: 650;
			border-radius: 7px;
			cursor: pointer;
		}
	}

	.mains {
		display: flex;
		padding: 0 1rem;
		gap: 2rem;
		img {
			cursor: pointer;
		}
		.global {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.mode {
			display: flex;
			border-radius: 20px;
			width: 5rem;
			height: 2rem;
			justify-content: space-between;
			padding: 0 0.5rem;
			background-color: #353945;
			align-items: center;
			.night,
			.day {
				background-color: inherit;
				img {
					background-color: inherit;
				}
			}
		}
	}
`;

const Photo = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #3772ff;
	color: white;
	font-size: 1.3rem;
	font-weight: 600;
`;

const Photo2 = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #3772ff;
	color: white;
	font-size: 1rem;
	font-weight: 600;
`;

const Photo3 = styled.div`
	width: 1.3rem;
	height: 1.3em;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #3772ff;
	color: white;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
`;

const Name = styled.div``;

const SideLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 1.3rem;
	}
`;
