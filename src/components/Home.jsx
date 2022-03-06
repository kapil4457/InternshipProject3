import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
	const [display, setDisplay] = useState("flex");
	const [coin, setCoin] = useState([]);
	const click = () => {
		if (display == "flex") {
			setDisplay("none");
		}
	};

	const data = async () => {
		const info = await axios.get(
			"https://raw.githubusercontent.com/akshita151199/APIs/main/data"
		);
		setCoin(info?.data?.data[0]);
	};

	console.log(coin);
	useEffect(() => {
		data();
	}, []);
	return (
		<>
			<Container>
				<Left>
					<Header>
						<h2>Section</h2>
						<Wallet>
							<div>
								<img src="Wallet.png" alt="" />
								0.2 $XYZ
							</div>
							<div className="tier">Tier 1</div>
						</Wallet>
					</Header>
					<Notice style={{ display: display }}>
						<div className="cross" onClick={click}>
							<img src="cross.png" alt="" />
						</div>
						<div className="text">
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</div>
							<div className="btn">Tutorial</div>
						</div>
						<div className="image">
							<img src="eleven.png" alt="" />
						</div>
					</Notice>
					<Balance>
						<L>
							<div className="head1">Your rewards</div>
							<div className="head2">$ 0.26231428</div>
							<div className="head3">
								<div>$40 AVAX</div>
								<div>$10 BNB</div>
								<div>$210 BTC</div>
							</div>
						</L>
						<R>
							<div>
								<img src="Link.png" alt="" />
								<p>Custom link</p>
							</div>
						</R>
					</Balance>
					<Referal>
						<One>
							<div className="per">
								<img src="bag.png" alt="" />
								<p>12% of fee</p>
							</div>
							<div className="per2">
								<div className="ref">Your referral link for xyz </div>
								<div className="lin">
									<p>https://unityexchange.design</p>
									<img src="ungroup.png" alt="" />{" "}
								</div>
							</div>
						</One>
						<Two>
							<div className="per">
								<img src="bag.png" alt="" />
								<p>12% of fee</p>
							</div>
							<div className="per2">
								<div className="ref">Your referral link for xyz </div>
								<div className="lin">
									<p>https://unityexchange.design</p>
									<img src="ungroup.png" alt="" />{" "}
								</div>
							</div>
						</Two>
					</Referal>
					<Tab>
						<div className="t1">First Tab</div>
						<div className="t2">Second Tab</div>
					</Tab>
					<Head>
						<p>ASSET</p>
						<p>AMOUNT</p>
						<p>USER ACCOUNT</p>
						<p>REFERRAL EARNING</p>
					</Head>
					<BTC>
						<div className="com1">
							<div className="coinImg">
								<img src={coin?.img} alt="" />
							</div>
							<div>
								<div>{coin?.asset}</div>
								<div className="com1-1">
									<div className="typ">{coin?.type}</div>
									<div className="com1-1-1">
										<img src={coin?.chain?.img} alt="" />
										<p>{coin?.chain?.name}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="com2">
							<div>{coin.amount}</div>
							<div>BNB</div>
						</div>
						<div className="com3">{coin?.user}</div>
						<div className="com4">
							<div>{coin.amount} BNB</div>
							<div className="com4-1">
								View on BSC scan <img src="Link.png" alt="" />
							</div>
						</div>
					</BTC>
				</Left>
				<Right>
					<Option>
						<div className="avalanche">
							<img src="Ellipse.png" alt="" />
							<p>Avalanche</p>
							<img src="downArrow.png" alt="" />
						</div>
						<div className="user">
							<img src="Wallet.png" alt="" />
							<p>{coin.user}</p>
							<img src="downArrow.png" alt="" />
						</div>
					</Option>

					<CustomLink>
						<div className="haed">
							<img src="arrow-left.png" alt="" />
							<p>Custom Link</p>
						</div>
						<div className="input">
							<a href="https://testnet.xyz.xyz/trade?ref=">
								https://testnet.xyz.xyz/trade?ref=
							</a>
							<input type="text" placeholder="ENTER" />
						</div>
					</CustomLink>

					<Btns>
						<div className="btn1">
							<img src="Link.png" alt="" />
							<p>Custom link</p>
						</div>
						<div className="btn2">
							<img src="deposit.png" alt="" />
							<p>Cancel</p>
						</div>
					</Btns>
				</Right>
			</Container>
		</>
	);
};

export default Home;

const Btns = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	.btn1 {
		width: 40%;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #3772ff;
		gap: 0.8rem;
		cursor: pointer;
		border-radius: 7px;
		img {
			background-color: #3772ff;
		}
		p {
			background-color: #3772ff;
		}
	}
	.btn2 {
		cursor: pointer;
		display: flex;
		width: 35%;
		height: 2rem;
		border-radius: 10px;
		gap: 0.4rem;
		border: 1px solid gray;
		align-items: center;
		justify-content: center;
	}
`;
const Container = styled.div`
	color: white;
	width: 82%;
	margin-left: 18%;
	display: grid;
	grid-template-columns: 70% 30%;
`;
const Left = styled.div`
	border-right: 1px solid gray;
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;
const Right = styled.div`
	display: flex;
	flex-direction: column;
`;

const Option = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-evenly;
	.avalanche {
		background-color: #353945;
		width: 10vw;
		cursor: pointer;
		height: 2.3rem;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		img,
		p {
			background-color: #353945;
		}
	}
	.user {
		cursor: pointer;
		border: 1px solid #2c5ccf;
		width: 10vw;
		height: 2.3rem;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		p {
			width: 30%;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}
`;
const CustomLink = styled.div`
	padding: 2rem;
	.haed {
		width: 100%;
		gap: 0.6rem;
		display: flex;
		align-items: center;
	}
	.input {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 2rem;
		a {
			text-decoration: none;
			color: white;
		}
		input {
			width: 80%;
			padding: 0 1rem;
			color: white;
			height: 2.5rem;
			font-size: 0.9rem;
			border-radius: 10px;
			background-color: #242731;
			border: none;
			outline: none;
		}
	}
`;
const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	padding-bottom: 0;

	h2 {
		cursor: pointer;
		width: 15%;
		text-align: center;
		border-bottom: 2px solid #3772ff;
	}
`;
const Wallet = styled.div`
	width: 25%;
	display: flex;
	border-radius: 5px;
	background-color: #191b20;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.7rem;
	font-size: 0.9rem;
	div {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		background-color: inherit;
		img {
			background-color: inherit;
		}
	}

	.tier {
		background-color: #a3e3ff;
		color: #3772ff;
		width: 3rem;
		border: 1px solid white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: 650;
	}
`;
const Notice = styled.div`
	margin-top: 1rem;
	border-radius: 6px;
	padding: 0 1.5rem;
	background-color: #abe8ff;
	width: 90%;
	align-self: center;
	height: 13vh;
	color: black;
	display: flex;
	position: relative;
	.cross {
		width: 1.3rem;
		height: 1.3rem;
		display: flex;
		right: 0rem;
		border-radius: 50%;
		cursor: pointer;
		justify-content: center;
		align-items: center;
		background-color: white;
		position: absolute;
	}
	div {
		color: inherit;
		background-color: inherit;
	}
	img {
		color: inherit;
		background-color: inherit;
	}
	.text {
		padding-top: 0.7rem;

		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		.btn {
			width: 20%;
			height: 1.7rem;
			background-color: white;
			color: black;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 7px;
			cursor: pointer;
			font-size: 0.9rem;
		}
	}
	.image {
		padding-left: 2rem;
		img {
			padding-top: 0.5rem;

			width: 6rem;
		}
	}
`;

const Balance = styled.div`
	height: 19vh;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-self: center;
	padding: 1rem 1rem;

	border-radius: 15px;
	background-color: #191b20;
	div {
		background-color: inherit;
	}
`;
const L = styled.div`
	display: flex;
	flex-direction: column;
	.head2 {
		font-size: 2rem;
		padding-bottom: 1rem;
		font-weight: 600;
	}
	.head3 {
		display: flex;
		gap: 1rem;

		div {
			width: 5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 9px;
			font-size: 0.9rem;
			background-color: #353945;
			color: white;
		}
	}
`;
const R = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 50%;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #3772ff;
		gap: 0.8rem;
		cursor: pointer;
		border-radius: 7px;
		img {
			background-color: #3772ff;
		}
		p {
			background-color: #3772ff;
		}
	}
`;

const Referal = styled.div`
	width: 90%;
	height: 10rem;
	align-self: center;
	display: flex;
	justify-content: space-evenly;
`;
const One = styled.div`
	padding: 1rem;
	width: 46%;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	background-color: #14161a;

	.per {
		background-color: inherit;
		display: flex;
		align-items: center;
		font-size: 1.4rem;
		font-weight: 700;
		img,
		p {
			background-color: inherit;
		}
	}
	.per2 {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		background-color: inherit;

		.ref {
			background-color: inherit;

			color: gray;
		}
		.lin {
			background-color: #242731;
			display: flex;
			justify-content: space-between;
			padding: 0rem 1rem;
			height: 2rem;
			align-items: center;
			border-radius: 7px;
			p,
			img {
				background-color: inherit;
			}
			img {
				width: 1rem;
				height: 1rem;
				cursor: pointer;
			}
		}
	}
`;
const Two = styled.div`
	padding: 1rem;
	width: 46%;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	background-color: #14161a;

	.per {
		background-color: inherit;
		display: flex;
		align-items: center;
		font-size: 1.4rem;
		font-weight: 700;
		img,
		p {
			background-color: inherit;
		}
	}
	.per2 {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		background-color: inherit;

		.ref {
			background-color: inherit;

			color: gray;
		}
		.lin {
			background-color: #242731;
			display: flex;
			justify-content: space-between;
			padding: 0rem 1rem;
			height: 2rem;
			align-items: center;
			border-radius: 7px;
			p,
			img {
				background-color: inherit;
			}
			img {
				width: 1rem;
				height: 1rem;
				cursor: pointer;
			}
		}
	}
`;

const Tab = styled.div`
	width: 90%;
	padding-top: 0.5rem;
	align-self: center;
	display: flex;
	gap: 2rem;
	font-size: 1.4rem;
	.t1 {
		border-bottom: 2px solid #3772ff;
		cursor: pointer;
	}
	.t2 {
		color: #808191;
		cursor: pointer;
	}
`;

const Head = styled.div`
	display: flex;
	width: 90%;
	background-color: #191b20;
	align-self: center;
	height: 2.4rem;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 10px;
	p {
		color: gray;
		background-color: inherit;
	}
`;
const BTC = styled.div`
	background-color: #0e1014;
	color: white;
	width: 90%;
	align-self: center;
	height: 3.7rem;
	display: flex;
	gap: 1.2rem;
	border-radius: 8px;
	p {
		background-color: #0e1014;
	}
	div {
		background-color: #0e1014;
	}
	img {
		background-color: #0e1014;
	}
	.com1,
	.com2,
	.com4 {
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.com3 {
		padding-top: 1.1rem;
		aling-self: center;
		width: 20%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.com4 {
		width: 23%;
		padding-left: 1rem;
		display: flex;
		flex-direction: column;
		.com4-1 {
			color: gray;
			font-size: 0.8rem;
			img {
				width: 10px;
				cursor: pointer;
			}
		}
	}

	.com1 {
		gap: 1rem;
		display: grid;
		grid-template-columns: 30% 70%;
		.coinImg {
			padding-left: 0.8rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.com1-1 {
			width: 100%;
			display: flex;
			gap: 0.5rem;
			.typ {
				color: gray;
				font-size: 0.9rem;
			}

			.com1-1-1 {
				background-color: #353945;
				font-size: 0.7rem;
				display: flex;
				gap: 0.5rem;
				width: 55%;
				border-radius: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					background-color: #353945;
					width: 0.8rem;
				}
				p {
					background-color: #353945;
				}
			}
		}
	}
`;
