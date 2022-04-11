import React from "react";
import "../styles/main.scss";
import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";
const Nav = () => (
    // <nav>
    //     <Link to="/">Home</Link> |
    //     <Link to="/contact">Contact</Link> |
    //     <Link to="/products">Products</Link> 
    // </nav>
    
    <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink> |
        <NavLink to="/contact#email" activeClassName="active">Contact</NavLink> |
        <NavLink exact to="/products" activeClassName="active">Products</NavLink> |
        <NavLink to="/products/12?orderby=price" activeClassName="active">Products Detail 12</NavLink> |

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

const ContactPage = (props) => {
    console.log(props);
    return (
        <>
            <div>Contact Page</div>
        </>
    );
}

const ProductPage = () => (
    <>
        <div>Producs Page</div>
    </>
);

const ProductDetailsPage = (props) => {
    console.log(props);
    return (
        <>
            <div>Produtcs Details Page</div>
            <div>{props.match.params.id}</div>
        </>
    );
}

const NotFound = () => (
    <>
        <div>404 Page</div>
    </>
);

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Nav/>
        <Switch>
            <Route exact path="/" component = { HomePage} />
            <Route path="/contact" component = { ContactPage} />
            <Route exact path="/products" component = { ProductPage} />
            <Route path="/products/:id" component = { ProductDetailsPage} />
            <Route  exact component = { NotFound } />
        </Switch>
    </BrowserRouter>
)


export default AppRouter;