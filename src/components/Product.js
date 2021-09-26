import Price from "./Price";
import { useLocation } from "react-router-dom";

const Product = ({
  giftcard,
  onToggle,
  giftcards,
}) => {
  const location = useLocation();
  return (
    <div className={`product`}
      // className={`product ${
      //   location.pathname === "/cart" ? "product-cart " : ""
      // } ${location.pathname === "/" ? "product-admin " : ""} ${
      //   product.reminder ? "reminder" : ""
      // }`}
      // onDoubleClick={() => onToggle(product._id)}
    >
      <div className="up">
      <h5 className="">
        Starting date:<br/>
        {giftcard.date}<br/>
        <br/>
        Expiration date:<br/>
        {giftcard.enddate}
        <p>
        <br/>
        <br/>
        {location.pathname === "/" && (
          <Price price={giftcard.amount} text={"Price:"} />
        )}</p>
        {/* {location.pathname === "/" && (
          <DeleteProduct id={giftcard._id}/>
        )} */}
      </h5>
      </div>
      {/* {location.pathname !== "/" && (
        <div className="quantity-div">
          <p className="quantity-centered">{`Quantity: ${
            product.quantity - 1
          }`}</p>
        </div>
      )} */}
      {/* {location.pathname !== "/" && location.pathname !== "/cart" && (
        <Description product={product}/>
      )}
      {location.pathname === "/home" && (
        <ItemDetails product={product} classN={"i-home"} products={products} />
      )} */}
      {/* <br /> */}
      {/* {location.pathname === "/" && (
        <ItemDetails product={product} classN={"i"} products={products} />
      )} */}
    </div>
  );
};

export default Product;
