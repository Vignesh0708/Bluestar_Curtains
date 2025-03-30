
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(cors());
app.use(express.json());

const fabricPricePerMeter = 500;

function calculateCurtains(data) {
    const { length, width } = data;
    let adjustedLength = parseFloat(length) + 12;
    let lengthMeters = Math.ceil(adjustedLength / 39);
    let panels = getPanelsNeeded(parseFloat(width));
    let totalFabricMeters = panels * lengthMeters;
    let stitchingCharges = panels * 250;
    let fabricCost = totalFabricMeters * fabricPricePerMeter;
    let totalCost = fabricCost + stitchingCharges;

    return { totalCost };
}


function getPanelsNeeded(width) {
    if (width <= 29) return 1;
    else if (width <= 39) return 2;
    else if (width <= 48) return 2;
    else if (width <= 72) return 3;
    else if (width <= 96) return 4;
    else if (width <= 120) return 5;
    else return 6;
     
}

console.log(getPanelsNeeded);

 
 


app.post('/calculate', (req, res) => {
    try {
        const totalCost = calculateCurtains(req.body);
        res.json(totalCost);
    } catch (error) {
        res.status(500).json({ error: 'Calculation error' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
