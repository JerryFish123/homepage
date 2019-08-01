
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch, Redirect, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KnowAli from "./pages/KnowAli";
import Log from "./pages/Log";
import PersonalCenter from "./pages/PersonalCenter";
import Register from "./pages/Register";
import SchoolRecruitment from "./pages/SchoolRecruitment";
import SocialRecruitment from "./pages/SocialRecruitment";
const PrimaryLayout = () =>
    <div className="primary-layout">
        <ul className='main-ul'>
            <li>
                <Link to="/homepage">首页</Link>
            </li>
            <li>
                <Link to="/KnowAli">社会招聘</Link>
            </li>
            <li>
                <Link to="/Log">登录</Link>
            </li>
            <li>
                <Link to="/PersonalCenter">个人中心</Link>
            </li>
            <li>
                <Link to="/Register">注册</Link>
            </li>
            <li>
                <Link to="/SchoolRecruitment">校园招聘</Link>
            </li>
            <li>
                <Link to="/SocialRecruitment">社会招聘</Link>
            </li>
        </ul>
        <main>
            <Route path="/" component={HomePage} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/KnowAli" component={KnowAli} />
            <Route path="/Log" component={Log} />
            <Route path="/PersonalCenter" component={PersonalCenter} />
            <Route path="/Register" component={Register} />
            <Route path="/SchoolRecruitment" component={SchoolRecruitment} />
            <Route path="/SocialRecruitment" component={SocialRecruitment} />
        </main>
    </div>



const App = () =>
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>;

render(<App />, document.getElementById("root"));
