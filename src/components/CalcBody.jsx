import { useState } from 'react';
import '../css/CalcBody.css'
import Button from './Button';
import Screen from './Screen';

const btnValues = [
    ["C", "**", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

const CalcBody = () => {
  const [val, setval] = useState("");

  const onButtonClick = (buttontext) => {
    if (buttontext === "C"){
      setval("")
    } else if (buttontext === "="){
      try{
        const result = eval(val)
        setval(result)
      } catch(error){
        setval("Invalid Syntax")
      }
    } else{
      const newVal = val + buttontext
      setval(newVal)
    }
  }

    return (
        <div className="body">
            <Screen value={val} />
            <div className='buttonBox'>
            {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => onButtonClick(btn)}
              />
            );
          })
        }
            </div>
        </div>
    );
}

export default CalcBody;


