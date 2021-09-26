
import GridProduct from "./Bless";

const GiftCard = ({
    giftcard,
    onToggle,
    onDelete,
}) => {

  return (
    <div className="border">
        <GridProduct giftcard={giftcard} onToggle={onToggle} onDelete={onDelete}/>
    </div>
  );
};

export default GridProduct;
