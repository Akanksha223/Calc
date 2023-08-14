import React, { useState } from 'react';
/* interface Component{
   s
} */
const Cal: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonPress = (value: string) => {
    setInput(prevInput => prevInput + value);
  };
  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());           //eval will evaluate string as code
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonPress('7')}>7</button>
          {/* Other buttons */}
        </div>
        {/* Other rows of buttons */}
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonPress('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Cal;
