// Nuevo archivo: components/Calculator.tsx
import { useState } from 'react';

export function CalculatorContent() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + op);
    setIsNewNumber(true);
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f0f0f0] p-4">
      {/* Display */}
      <div className="bg-white p-4 rounded-lg mb-4 text-right">
        <div className="text-gray-500 text-sm h-6">{equation}</div>
        <div className="text-2xl font-semibold">{display}</div>
      </div>

      {/* Botones */}
      <div className="grid grid-cols-4 gap-2">
        <button onClick={handleClear} className="col-span-2 p-4 bg-[#e1e1e1] hover:bg-[#d1d1d1] rounded-lg font-semibold">
          C
        </button>
        <button onClick={() => handleOperator('/')} className="p-4 bg-[#e1e1e1] hover:bg-[#d1d1d1] rounded-lg font-semibold">
          ÷
        </button>
        <button onClick={() => handleOperator('*')} className="p-4 bg-[#e1e1e1] hover:bg-[#d1d1d1] rounded-lg font-semibold">
          ×
        </button>
        
        {[7,8,9].map(num => (
          <button key={num} onClick={() => handleNumber(num.toString())} className="p-4 bg-white hover:bg-[#f5f5f5] rounded-lg font-semibold">
            {num}
          </button>
        ))}
        <button onClick={() => handleOperator('-')} className="p-4 bg-[#e1e1e1] hover:bg-[#d1d1d1] rounded-lg font-semibold">
          -
        </button>
        
        {[4,5,6].map(num => (
          <button key={num} onClick={() => handleNumber(num.toString())} className="p-4 bg-white hover:bg-[#f5f5f5] rounded-lg font-semibold">
            {num}
          </button>
        ))}
        <button onClick={() => handleOperator('+')} className="p-4 bg-[#e1e1e1] hover:bg-[#d1d1d1] rounded-lg font-semibold">
          +
        </button>
        
        {[1,2,3].map(num => (
          <button key={num} onClick={() => handleNumber(num.toString())} className="p-4 bg-white hover:bg-[#f5f5f5] rounded-lg font-semibold">
            {num}
          </button>
        ))}
        <button onClick={handleEqual} className="p-4 bg-[#0078d4] hover:bg-[#006cbd] text-white rounded-lg font-semibold">
          =
        </button>
        
        <button onClick={() => handleNumber('0')} className="col-span-2 p-4 bg-white hover:bg-[#f5f5f5] rounded-lg font-semibold">
          0
        </button>
        <button onClick={() => handleNumber('.')} className="p-4 bg-white hover:bg-[#f5f5f5] rounded-lg font-semibold">
          .
        </button>
      </div>
    </div>
  );
}