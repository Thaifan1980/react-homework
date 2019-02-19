import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import IndexPage from "./components/index/IndexPage";
import AboutPage from "./components/about/AboutPage";
import CatalogPage from "./components/Catalog/CatalogPage";
import Footer from "./components/Footer/Footer";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/product/:id" component={ProductDetailsPage} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
