const express = require('express');
const router = express.Router();

 
const calculateCurtainCost = (length, width, fabricPrice) => {

  
    const adjustedLength = length + 12;

    
    const lengthInMeters = Math.ceil(adjustedLength / 39);

    
    const panelWidth = 18;
    const panels = Math.ceil(width / panelWidth);

    
    const totalFabric = panels * lengthInMeters;

   
    const fabricCost = totalFabric * fabricPrice;

    
    const stitchingCost = panels * 250;

  
    const totalCost = fabricCost + stitchingCost;

    return { adjustedLength, lengthInMeters, panels, totalFabric, fabricCost, stitchingCost, totalCost };
};

 
router.post('/Curtainlogic', (req, res) => {
    const { length, width, fabricPrice } = req.body;

    if (!length || !width || !fabricPrice) {
        return res.status(400).json({ error: 'Please provide length, width, and fabric price.' });
    }

    const result = calculateCurtainCost(length, width, fabricPrice);
    res.json(result);
});

module.exports = router;
