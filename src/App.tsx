import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.generated.css';

function App(): JSX.Element {
  return (
    <div className='text-center'>
      <header className='bg-purple-darker m-6 p-6 rounded shadow-lg'>
        <img src={logo} className='App-logo text-center' alt='logo' />
        <p className='text-base'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
