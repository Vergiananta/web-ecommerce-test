import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/home/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/pages/LandingPage.js";
import ProfilePage from "views/pages/ProfilePage.js";
import SignUp from "./views/examples/SignUp";
import VendorLoginPage from "./views/pages/VendorLoginPage";
import Vendor from "./views/Vendor/VendorStore";
import {CookiesProvider} from "react-cookie";
import ProductStore from "./views/product/ProductStore";
import {Redirect} from "react-router";
import User from "./views/User/UserStore";
import ChatForum from "./chat/ChatForum";



ReactDOM.render(
    <BrowserRouter>
        <CookiesProvider>
        <Switch>
            <Switch>
                <Route path="/index" render={props => <ProductStore {...props} />} />
                <Route path="/vendor" render={props => <Vendor/>} />
                <Route path="/user" render={props => <User/>} />
                <Route path="/forum" render={props => <ChatForum/>} />
                <Redirect from="/" to="/index" />


            </Switch>
        </Switch>
        </CookiesProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
