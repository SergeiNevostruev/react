import React from 'react';
// import Input from './Input';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <div className="form_inputs">{children}</div>
  </div>
);

export default Form;
