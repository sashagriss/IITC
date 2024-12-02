const products = [
  { id: 1, name: "coke", price: 8 },
  { id: 2, name: "pepsi", price: 8 },
];
import { addItem, removeItem } from "../store/Slices/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const handleAttItem = (item) => {
    const itemData = {
      ...item,
      quantity: 1,
      totalItemPrice: item.price,
    };
    dispatch(addItem(itemData));
  };
  return (
    <div>
      <h1>Products</h1>
      {products.map((prod) => (
        <div key={prod.id}>
          <span>
            {prod.name}: - {prod.price}$
          </span>
          <button onClick={() => handleAttItem(prod)}></button>
        </div>
      ))}
    </div>
  );
};

export default Products;
