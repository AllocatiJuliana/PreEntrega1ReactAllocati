import { BsFillCartPlusFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsFillCartPlusFill size={20} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
