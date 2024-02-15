import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head">
    Namste React using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namste React Function Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
