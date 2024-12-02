import { useSelector } from "react-redux";

const Cart = () => {
    
    const cart = useSelector((state) => state.cart);
  return <div>
    <h1>Cart</h1>
    <p>total Items: {cart.total}</p>
    </div>;
};

export default Cart;
