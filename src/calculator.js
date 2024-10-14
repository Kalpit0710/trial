import { useState } from 'react';

const Calculator = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('0');

    const handleAddition = () => {
        setResult(Number(input1) + Number(input2));
    };

    const handleSubtraction = () => {
        setResult(Number(input1) - Number(input2));
    };

    const handleMultiplication = () => {
        setResult(Number(input1) * Number(input2));
    };

    const handleDivision = () => {
        if (Number(input2) === 0) {
            setResult('Error! Division by 0');
        } else {
            setResult(Number(input1) / Number(input2));
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Simple Calculator</h1>
            <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Enter first number"
                style={{ marginRight: '10px' }}
            />
            <input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="Enter second number"
                style={{ marginRight: '10px' }}

            />
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleAddition}>Add</button>
                <button onClick={handleSubtraction} style={{ marginLeft: '10px' }}>Subtract</button>
                <button onClick={handleMultiplication} style={{ marginLeft: '10px' }}>Multiply</button>
                <button onClick={handleDivision} style={{ marginLeft: '10px' }}>Divide</button>
            </div>
            <h2 style={{marginTop: '20px'}}>Result: {result}</h2>
        </div>
    );
}

export default Calculator;
