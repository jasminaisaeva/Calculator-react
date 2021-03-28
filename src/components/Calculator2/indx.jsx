import React, { useState } from "react";

export const Calculator2 = () => {
  const [result, setResult] = useState("здесь ответ");

  const [inputValues, setInputValues] = useState({
    input1: 2,
    input2: 2,
  });

  const inputHAndler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const onPlus = () => {
    setResult(
      () => parseInt(inputValues.input1) + parseInt(inputValues.input2)
    );
  };
  const onMinus = () => {
    setResult(
      () => parseInt(inputValues.input1) - parseInt(inputValues.input2)
    );
  };

  const onMult = () => {
    setResult(
      () => parseInt(inputValues.input1) * parseInt(inputValues.input2)
    );
  };
  const onDelenie = () => {
    setResult(
      () => parseInt(inputValues.input1) / parseInt(inputValues.input2)
    );
  };

  return (
    <div className="block">
      <input
        type="number"
        value={inputValues.input1}
        onChange={inputHAndler}
        name="input1"
      />

      <input
        type="number"
        value={inputValues.input2}
        onChange={inputHAndler}
        name="input2"
      />

      <br></br>
      <h1>Calculator2</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
      <button onClick={onMult}>*</button>
      <button onClick={onDelenie}>/</button>

      <p>Sum {result}</p>
    </div>
  );
};
