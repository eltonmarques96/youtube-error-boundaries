import React from "react";
import Header from "./Header";
import ErrorBoundary from "./Errorboundary";
const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <p>Hello World</p>
        <Header />
      </ErrorBoundary>
    </div>
  );
};

export default App;
