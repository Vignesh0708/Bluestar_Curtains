//   // backend/server.js
//  const express = require('express');
//  const cors = require('cors');
//  const app = express();
 
//  app.use(cors()); // Enable CORS for cross-origin requests
//  app.use(express.json()); // Parse incoming JSON data
 
//  // Function to calculate curtain fabric and total cost
//  function calculateCurtains(data) {
//      const { lengthInches, widthInches, fabricPricePerMeter } = data;
 
//      // Step 1: Adjust length in meters
//      let adjustedLength = lengthInches + 12;
//      let lengthMeters = Math.ceil(adjustedLength / 39);
 
//      // Step 2: Determine panels needed based on width
//      let panels = getPanelsNeeded(widthInches);
 
//      // Step 3: Calculate total fabric meters
//      let totalFabricMeters = panels * lengthMeters;
 
//      // Step 4: Calculate stitching charges (only in backend)
//      let stitchingCharges = panels * 250; // Rs. 250 per panel
 
//      // Step 5: Calculate fabric cost
//      let fabricCost = totalFabricMeters * fabricPricePerMeter;
 
//      // Step 6: Calculate total curtain cost
//      let totalCost = fabricCost + stitchingCharges;
 
//      return { totalCost }; // Return only the total cost
//  }
 
//  // Function to determine the number of panels based on width
//  function getPanelsNeeded(width) {
//      if (width <= 29) return 1;
//      else if (width <= 39) return 2;
//      else if (width <= 48) return 2;
//      else if (width <= 72) return 3;
//      else if (width <= 96) return 4;
//      else if (width <= 120) return 5;
//      else return 6;
//  }
 
//  // API Route to calculate curtain cost
//  app.post('/api/calculate-curtain', (req, res) => {
//      const { lengthInches, widthInches, fabricPricePerMeter } = req.body;
 
//      // Validate inputs
//      if (!lengthInches || !widthInches || !fabricPricePerMeter) {
//          return res.status(400).json({ error: 'All fields are required!' });
//      }
 
//      const result = calculateCurtains({ lengthInches, widthInches, fabricPricePerMeter });
//      res.json(result);
//  });
 
//  // Start the backend server
//  const PORT = 3000;
//  app.listen(PORT, () => {
//      console.log(`Backend is running at http://localhost:${PORT}`);
//  });
 