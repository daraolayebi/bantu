import React from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Discover from "./pages/Discover";
import AuthLayout from "./components/layouts/AuthLayout";
import MainLayout from "./components/layouts/MainLayout";
import "./assets/scss/App.scss";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path={["/signup", "/login"]}>
						<AuthLayout>
							<Switch>
								<Route path="/signup" component={SignUp}></Route>
								<Route path="/login" component={Login}></Route>
							</Switch>
						</AuthLayout>
					</Route>
					<Route path={["/", "/discover", "/jobs"]}>
						<MainLayout>
							<Switch>
								<Route path="/jobs" component={Jobs}></Route>
								<Route path="/discover" component={Discover}></Route>
								<Route path="/" exact component={Home}></Route>
							</Switch>
						</MainLayout>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
