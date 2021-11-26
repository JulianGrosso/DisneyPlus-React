import React from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} exact />
					<Route path="/detail/:id" element={<Detail />} exact />
					<Route path="/home" element={<Home />} exact />
				</Routes>
			</Router>
		</>
	);
}

export default App;
