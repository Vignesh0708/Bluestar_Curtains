import { useEffect } from "react";

const Checkout = () => {
    useEffect(() => {
        const loadRazorpay = async () => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            document.body.appendChild(script);
        };
        loadRazorpay();
    }, []);

    const handlePayment = () => {
        const options = {
            key: "YOUR_RAZORPAY_KEY", // 🔹 Replace with your Razorpay API key
            amount: 50000, // 🔹 Amount in paisa (50000 = ₹500)
            currency: "INR",
            name: "My Curtain Store",
            description: "Purchase Curtains",
            image: "https://your-logo-url.com/logo.png", // 🔹 Optional: Add your store logo
            handler: function (response) {
                alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            },
            prefill: {
                name: "Bhagavan",
                email: "bhagavan@example.com",
                contact: "9876543210",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handlePayment}>Pay with Razorpay</button>
        </div>
    );
};

export default Checkout;
