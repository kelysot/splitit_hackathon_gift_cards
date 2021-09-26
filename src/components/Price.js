import NumberFormat from "react-number-format";
const Price = ({ price, classN = "price", text = "" }) => {
  return (
    <div className={""}>
      <p className={classN}>
        &nbsp;<b className="bold">{text}</b>
        <br />
        {/* &nbsp;&nbsp;{price}$ */}
        <NumberFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
    </div>
  );
};

export default Price;
