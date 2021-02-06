import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <main className="main">
                    <Switch>
                        <Route path="/" exact><Home /></Route>
                    </Switch>
                </main>

            </BrowserRouter>
        </div>
    );
}

export default App;
