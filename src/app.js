import React from "react";
import Portfolio from "./components/portfolio";

const App = () => {
  console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
  return (
    <div>
      <Portfolio />
    </div>
  );
};

export default App;
