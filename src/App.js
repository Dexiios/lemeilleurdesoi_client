import React from "react";
import "./App.css";
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";
import ScrollToTop from "./pages/ScrollToTop";
import TermsPage from "./pages/terms";
import NotFoundPage from "./pages/NotFoundPage";
import FirstServicePage from "./pages/firstServicePage";
import SecondServicePage from "./pages/secondServicePage";
import ThirdServicePage from "./pages/thirdServicePage";

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route name="home" path="/" component={Home} exact />
          <Route name="contact" path="/contact" component={ContactPage} exact />
          <Route name="terms" path="/terms" component={TermsPage} exact />
          <Route path="/404" component={NotFoundPage} exact/>
          <Route path="/consultationindividuelle" component={FirstServicePage} exact/>
          <Route path="/seancedegroupe" component={SecondServicePage} exact/>
          <Route path="/ammaassis" component={ThirdServicePage} exact/>
          <Redirect to="/404" />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
