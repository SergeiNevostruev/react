import React, { SyntheticEvent } from 'react';

type NameComponentPropsType = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  const { lastName, firstName } = props;
  const handler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };
  const mainHandler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };

  return (
    <div role="presentation" className="name_wrapper" onClick={mainHandler}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button type="button" onClick={handler}>
        Click
      </button>
    </div>
  );
};

export default NameComponent;
