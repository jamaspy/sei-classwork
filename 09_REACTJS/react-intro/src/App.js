import React from 'react';
import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';
function App() {
  return (
    <div className="App">
      <HelloWorld /> 
      <HelloUser name="James" />
      <HelloUser name="Sam" />
      <HelloUser name="Jen" />
    </div>
  );
}

export default App;
