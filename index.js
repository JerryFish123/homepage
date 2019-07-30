
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KnowAli from "./pages/KnowAli";
import Log from "./pages/Log";
import PersonalCenter from "./pages/PersonalCenter";
import Register from "./pages/Register";
import SchoolRecruitment from "./pages/SchoolRecruitment";
import SocialRecruitment from "./pages/SocialRecruitment";
// require('./index.css');
// import "./index.css"
const PrimaryLayout = () =>
    <div className="primary-layout">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/KnowAli">KnowAli</Link>
            </li>
            <li>
                <Link to="/Log">Log</Link>
            </li>
            <li>
                <Link to="/PersonalCenter">PersonalCenter</Link>
            </li>
            <li>
                <Link to="/Register">Register</Link>
            </li>
            <li>
                <Link to="/SchoolRecruitment">SchoolRecruitment</Link>
            </li>
            <li>
                <Link to="/SocialRecruitment">SocialRecruitment</Link>
            </li>
        </ul>
        <main>
            <Route path="/" exact component={HomePage} />
            <Route path="/KnowAli" component={KnowAli} />
            <Route path="/Log" component={Log} />
            <Route path="/PersonalCenter" component={PersonalCenter} />
            <Route path="/Register" component={Register} />
            <Route path="/SchoolRecruitment" component={SchoolRecruitment} />
            <Route path="/SocialRecruitment" component={SocialRecruitment} />
        </main>
    </div>


const UsersPage = () => <h1>User Page</h1>;

const App = () =>
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>;

render(<App />, document.getElementById("root"));
