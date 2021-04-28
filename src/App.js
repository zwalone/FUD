import React from 'react';
import './App.css';
import CustomAppBar from './components/CustomAppBar';

function App() {
  return (
    <div className="App">
      <CustomAppBar search={(output) => console.log(output)}/>
      <p>[Empty Page]</p>
    </div>
  );
}

export default App;
