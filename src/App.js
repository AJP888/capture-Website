import React from "react";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;

// The Main App holds Global Style aswell as the AbourUs Component
// About Us Component is made us of three child components
// GlobalStyle creates a stylng around all the different components
