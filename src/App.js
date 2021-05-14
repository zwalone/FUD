import React from 'react';
import './App.css';
import CustomAppBar from './components/CustomAppBar';

function App() {

  return (
    <div className="App">
      <CustomAppBar search={(output) => console.log(output)}/>
      <p>[Empty Page]</p>
      <img alt="test" src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"/>
    </div>
  );
}

export default App;
