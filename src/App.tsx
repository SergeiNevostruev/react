import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NameComponent from './NameComponent';
import Counter from './Counter';
import Form from './Form';
import Input from './Input';

const App = () => (
  <div className="wrapper">
    <h1>React App</h1>
    <NameComponent firstName="Сергей" lastName="Невоструев" />
    <Counter title="ананас" />
    <Counter title="яблоко" />
    <Form title="AUTH">
      <Input />
      <Input />
    </Form>
    <Form title="Registration">
      <Input />
      <Input />
      <Input />
      <Input />
    </Form>
  </div>
);

export default App;
