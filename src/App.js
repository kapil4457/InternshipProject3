import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Home from "./components/Home";
import Notification from "./components/Notification";

function App() {
	return (
		<>
			<Notification />
			<Container>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Container>
		</>
	);
}

export default App;
const Container = styled.div`
	display: flex;
`;
