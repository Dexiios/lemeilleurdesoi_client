import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";
import ScrollToTop from "./pages/ScrollToTop";
import TermsPage from "./pages/terms";

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route name="home" path="/" component={Home} exact />
          <Route name="contact" path="/contact" component={ContactPage} exact />
          <Route name="terms" path="/terms" component={TermsPage} exact />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
