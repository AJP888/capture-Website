import React from "react";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

// Import Router
import { Switch, Route } from "react-router-dom";

// Import Nav
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work"></Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// The Main App holds Global Style aswell as the AbourUs Component
// About Us Component is made us of three child components
// GlobalStyle creates a stylng around all the different components

// REACT ROUTER DOM
//Step1.
// Wrap Project in wrap router Dom
// In Index Import {BrowserRouter} from 'react-router-dom';
// Wrap <BrowserRouter> around the <App/> Component

// Step2
// import { Switch, Route } from "react-router-dom"; in App.js
// Wrap every component page i.e <AboutUs/> in a Route <Route></Route>
// Wrap <Swtich></Switch> around all the Routes
