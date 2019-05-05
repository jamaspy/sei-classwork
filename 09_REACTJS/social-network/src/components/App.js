import React from 'react';
import Profile from "./Profile"
import Clock from "./Clock"

function App() {
  return (
    <div className="App">
      <Clock />
      <Profile name="Groucho" age="101" motto = "No Gods No Mssters" pic="http://fillmurray.com/400/400" />
      <Profile name="Harpo" age="88" motto = "" pic="http://fillmurray.com/400/400" />
      <Profile name="Chico" age="199" motto = "No Gods No Mssters" pic="http://fillmurray.com/400/400" />
    </div>
  );
}

export default App;
