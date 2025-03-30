//  // frontend/src/App.js
// import { useState } from 'react';
//  import './Backend.mjs'

// function  Curtainlogic() {
//   const [lengthInches, setLengthInches] = useState('');
//   const [widthInches, setWidthInches] = useState('');
//   const [fabricPricePerMeter, setFabricPricePerMeter] = useState('');
//   const [totalCost, setTotalCost] = useState(null);

//   const calculateCurtainCost = async () => {
//     if (!lengthInches || !widthInches || !fabricPricePerMeter) {
//       alert('Please fill all fields');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/api/calculate-curtain', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           lengthInches: parseFloat(lengthInches),
//           widthInches: parseFloat(widthInches),
//           fabricPricePerMeter: parseFloat(fabricPricePerMeter)
//         })
//       });

//       const data = await response.json();

//       if (data.error) {
//         alert(`Error: ${data.error}`);
//       } else {
//         setTotalCost(data.totalCost);
//       }
//     } catch (error) {
//       alert('Error connecting to the server');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Curtain Cost Calculator</h1>
//       <div>
//         <label>Length (in inches): </label>
//         <input
//           type="number"
//           value={lengthInches}
//           onChange={(e) => setLengthInches(e.target.value)}
//         />
//       </div>

//       <div>
//         <label>Width (in inches): </label>
//         <input
//           type="number"
//           value={widthInches}
//           onChange={(e) => setWidthInches(e.target.value)}
//         />
//       </div>

//       <div>
//         <label>Fabric Price (per meter in Rs.): </label>
//         <input
//           type="number"
//           value={fabricPricePerMeter}
//           onChange={(e) => setFabricPricePerMeter(e.target.value)}
//         />
//       </div>

//       <button onClick={calculateCurtainCost}>Calculate</button>

//       {totalCost !== null && <h2>Total Curtain Cost: Rs. {totalCost}</h2>}
//     </div>
//   );
// }

// export default  Curtainlogic;
