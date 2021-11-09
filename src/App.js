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
import Login from "./components/Login";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/login" element={<Login />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/" element={<Home />} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
