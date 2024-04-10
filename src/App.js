import React, { Fragment } from 'react';
import './App.css';

// components
import Register from './components/Register'; 
import InputTodo from "./components/InputTodo";
import ListTodos from './components/ListTodo';


function App() {
  return (
    <main className='App'>
      <Register />
  <Fragment>
    <div className='container'>
      <InputTodo/>
      <ListTodos/>
    </div>  
  </Fragment>
  </main>
  );
}

export default App;
