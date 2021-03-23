import React from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AppNav />
				<main className="main">
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
