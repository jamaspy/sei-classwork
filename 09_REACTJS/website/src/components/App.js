import React from 'react';
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import Column from "./Column"
function App() {
  return (
    <div className="App">

      <Header />
      <div className="container">
        <div className="row">
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;
