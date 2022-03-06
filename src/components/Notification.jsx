import React from "react";
import styled from "styled-components";
const Notification = () => {
	return (
		<>
			<Container>Lorem Ipsum is simply dummy text of the printing</Container>
		</>
	);
};

export default Notification;
const Container = styled.div`
	background-color: #3772ff;
	font-size: 14px;
	line-height: 26px;
	font-family: "Poppins", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;
