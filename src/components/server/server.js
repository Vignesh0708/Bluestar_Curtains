const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const RAZORPAY_SECRET = "YOUR_RAZORPAY_SECRET"; // Replace with your actual Razorpay secret key

// Webhook route
app.post("/webhook", (req, res) => {
    const receivedSignature = req.headers["x-razorpay-signature"];
    const expectedSignature = crypto
        .createHmac("sha256", RAZORPAY_SECRET)
        .update(JSON.stringify(req.body))
        .digest("hex");

    if (receivedSignature === expectedSignature) {
        console.log("✅ Webhook Verified:", req.body);
        res.status(200).json({ message: "Webhook received successfully!" });
    } else {
        console.log("❌ Webhook Verification Failed");
        res.status(400).json({ message: "Invalid signature" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Webhook server running on port ${PORT}`));
