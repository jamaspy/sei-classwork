import React from 'react';
import CorrectAnswer from './CorrectAnswer/CorrectAnswer'
import WrongAnswer from './WrongAnswer/WrongAnswer'
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <WrongAnswer />
      <CorrectAnswer />
      <Counter />
    </div>
  );
}

export default App;
