import React from "react";
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
	Link,
} from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/" element={<Home />} />
					<Route path="/detail" element={<Detail />} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
