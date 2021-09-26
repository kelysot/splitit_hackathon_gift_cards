import Grid from "@material-ui/core/Grid";
import { Image, StyleSheet } from "react-native";
import Button from "./Button";
import Product from "./Product";

import Bless from "./Bless"
import { useLocation } from "react-router-dom";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: 110,
    height: 110,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  biglogo:{
    width: 213,
    height: 113,
    marginLeft: 55,
  }
});
const GridProduct = ({
  giftcard,
  onToggle,
  onDelete,
  giftcards,
  text="",
  linkGiftcard,
}) => {
  let props = {
    width: "inherit",
    height: "inherit",
    zoomWidth: 500,
    img: giftcard._image,
  };

  const location = useLocation();
  return (
    <div className="border">
      <Grid item>
        {location.pathname === "/home" && (
          <Button
            text="Add to Cart"
            onClick={() => onToggle(giftcard._id)}
            color="steelblue"
          />
        )}
        <div className="">
          <Product
            giftcard={giftcard}
            onDelete={onDelete}
            onToggle={onToggle}
            className="home-product"
            products={giftcard}
          />
          <Bless giftcard={giftcard}/>
          <p className="space center"></p>
          <Image
            style={styles.biglogo}
            className="cart-images "
            source={{
              uri: giftcard.image,
            }}
          />
          <Button text="Choose Me" color="#B084BA
" onClick={linkGiftcard} classN="btn left-border" giftcard={giftcard}/>
        </div>
      </Grid>
    </div>
  );
};

export default GridProduct;
