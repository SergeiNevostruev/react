import React from 'react';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  console.log('render', title);

  const addHandler = () => {
    console.log(count);

    setCount((prev) => prev + step);
    // setCount((prev) => prev + step);
    // setCount((prev) => prev + step);
    // setCount((prev) => prev + step);
    console.log(count);
  };

  const removeHandler = () => {
    setCount(count - step);
  };

  return (
    <div>
      <div>
        <h5>{title}</h5>
        <p>{`${count} штук`}</p>
        <button type="button" onClick={removeHandler}>
          Убрать {step} ед
        </button>
        <button type="button" onClick={addHandler}>
          Добавить {step} ед
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setStep(step + 1)}>
          увеличить шаг 1 ед
        </button>
        <button type="button" onClick={() => setStep(step - 1)}>
          уменьшить шаг 1 ед
        </button>
      </div>
    </div>
  );
};

export default Counter;
