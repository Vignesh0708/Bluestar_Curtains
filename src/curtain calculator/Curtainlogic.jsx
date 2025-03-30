  // frontend/src/App.js
import { useState } from 'react';
import axios from 'axios';

function Curtainlogic() {
  const [lengthInches, setLengthInches] = useState('');
  const [widthInches, setWidthInches] = useState('');
  const [totalCost, setTotalCost] = useState(null);

  const calculateCost = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        length: lengthInches,
        width: widthInches,
      });
      setTotalCost(response.data.totalCost);
    } catch (error) {
      console.error('Error calculating cost:', error);
      alert('Failed to calculate cost');
    }
  };

  return (
    <div className="App">
      <h1>Curtain Cost Calculator</h1>
      <div>
        <label>Length (in inches): </label>
        <input
          type="number"
          value={lengthInches}
          onChange={(e) => setLengthInches(e.target.value)}
        />
      </div>

      <div>
        <label>Width (in inches): </label>
        <input
          type="number"
          value={widthInches}
          onChange={(e) => setWidthInches(e.target.value)}
        />
      </div>

      <button onClick={calculateCost}>Calculate</button>

      {totalCost !== null && <h2>Total Curtain Cost: Rs. {totalCost}</h2>}
    </div>
  );
}

export default Curtainlogic;
