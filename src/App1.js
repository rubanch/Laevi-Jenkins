
// import React, { useState } from 'react';

// function App1() {
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [sum, setSum] = useState(0);

//   const calculateSum = () => {
//     const num1 = parseFloat(number1);
//     const num2 = parseFloat(number2);
//     const result = num1 + num2;
//     setSum(result);
//   };

//   return (
//     <div>
//       <h2 data-testid="label1">Sum of Two Numbers</h2>
//       <input
//       data-testid="testbox1"
//         type="text"
//         value={number1}
//         onChange={(e) => setNumber1(e.target.value)}
//       />
//       <input data-testid="testbox2"
      
//         type="text"
//         value={number2}
//         onChange={(e) => setNumber2(e.target.value)}
//       />
//       <button onClick={calculateSum}>Calculate Sum</button>
//       <p>Answer :   {sum}</p>
//     </div>
//   );
// };

// export default App1;
