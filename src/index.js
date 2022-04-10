import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./components/App";
import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";

const Nav = () => (
        // <nav>
        //     <Link to="/">Home</Link> |
        //     <Link to="/contact">Contact</Link> |
        //     <Link to="/products">Products</Link> 
        // </nav>
        
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink> |
            <NavLink to="/contact" activeClassName="active">Contact</NavLink> |
            <NavLink to="/products" activeClassName="active">Products</NavLink> 
        </nav>
)

const Header = () =>  (
    <header>
        <h1>Githup Finder</h1>
    </header>
);

const HomePage = () => (
    <>
        <div>Home Page</div>
    </>
);

const ContactPage = () => (
    <>
        <div>Contact Page</div>
    </>
);

const ProductPage = () => (
    <>
        <div>Producs Page</div>
    </>
);

const NotFound = () => (
    <>
        <div>404 Page</div>
    </>
);

const routes = (
    <BrowserRouter>
        <Header />
        <Nav/>
        <Switch>
            <Route exact path="/" component = { HomePage} />
            <Route path="/contact" component = { ContactPage} />
            <Route path="/products" component = { ProductPage} />
            <Route  exact component = { NotFound } />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("root"));
