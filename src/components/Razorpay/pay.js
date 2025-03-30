import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate("/checkout");
    };

    return (  // ✅ Added return statement here
        <div>
            <h1>Buy Curtains</h1>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default Product;
