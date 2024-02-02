import React, { useState, useMemo, useCallback } from "react";
import "./MemoCallbackExample.css";

const MemoCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation memoized with useMemo
  const expensiveResult = useMemo(() => {
    console.log("Expensive calculation");
    let result = 0;
    for (let i = 0; i < count * 10011; i++) {
      result += Math.random();
    }
    return result;
  }, [count]);



  const handleTextChange = useCallback(
      (e) => {
        console.log("Text changed");
        setText(e.target.value);
      },
      []
  );

  return (
      <div className="center-content">
        <h3 style={{color: "deeppink"}}>в этом примере вычисления внутри useMemo будут повторно выполняться только при count, `expensiveResult` в  примере вычисляется с использованием цикла, который добавляет случайные числа</h3>
        <h4 style={{color: "purple"}}>Count: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>

        <h4 style={{color: "yellow"}}>Expensive Result: {expensiveResult.toFixed(2)}</h4>
        <hr />


        <label style={{color: "red"}}>
          <h3 style={{color: "orange"}}>useCallback используется для запоминания функций, предотвращая ненужное повторное создание функций при каждом рендеринге.</h3>
          Enter Text:
          <input type="text" value={text} onChange={handleTextChange} />
          <h4 style={{color: "blue"}}>Number of Characters: {text.length}</h4>
        </label>

        {/*<p>Number of Characters: {text.length}</p>*/}
        <hr />
      </div>
  );
};

export default MemoCallbackExample;
