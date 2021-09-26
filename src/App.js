import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import GridProduct from "./components/GridProduct";
import Grid from "@material-ui/core/Grid";
import GiftCard from './components/GiftCard'
import { useLocation } from "react-router-dom";
function App() {
  
  const _image = "https://marketplace.magento.com/media/catalog/product/cache/adc9a2293be371a515eb30a463d80c57/e/a/ea15_splitit-logo-240.png";
  const GC_DURATION = 90; // 90 days default duration of giftcard
  const [showAddProduct, setShowAddProduct] = useState(false);

  const [giftcards, setGiftcards] = useState([
    {
      _id: 1,
      amount: 100,
      date: "30-05-2021",
      enddate: "30-05-2022",
      duration: GC_DURATION,
      image: _image,
      reminder: false,
      text: "To my love",
    },
    {
      _id: 2,
      amount: 300,
      date: "20-05-2021",
      enddate: "20-05-2022",
      duration: GC_DURATION,
      image: _image,
      reminder: false,
      text: "To my fabulous mom",
    },
    {
      _id: 3,
      amount: 600,
      date: "10-05-2021",
      enddate: "10-05-2022",
      duration: GC_DURATION,
      image: _image,
      reminder: false,
      text: `For the top boss alive`,
    },
    {
      _id: 4,
      amount: 9900,
      date: "10-05-2021",
      enddate: "10-05-2022",
      duration: GC_DURATION,
      image: _image,
      reminder: false,
      text: "For the best best friend",
    },
  ])


  //toggle reminder
  const toggleReminder = (id) => {
    setGiftcards(
      giftcards.map((giftcard) =>
      giftcard._id === id
          ? { ...giftcard, reminder: !giftcard.reminder }
          : giftcard
      )
    );
  };

  // //Add product
  // const addProduct = (product) => {
  //   axios
  //     .post("http://localhost:8000/products", {
  //       text: product.text,
  //       price: product.price,
  //       description: product.description,
  //       show_description: product.show_description,
  //       image: product.image,
  //       reminder: product.reminder,
  //       url: product.url,
  //       quantity: product.quantity - 1,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const addGC = (giftcard)=>{
    const newGC = {
      _id:giftcard.id,
      amount:giftcard.amount,
      date:giftcard.date,
      duration:GC_DURATION,
      image: _image,
      reminder: false,
    }
    setGiftcards(...giftcards, newGC);
  }
  // delete a prod
  const deleteProduct = (id) => {
    setGiftcards(giftcards.filter((giftcard) => giftcard._id !== id));
  };

  return (
    <Router>
      <div className="container">
        < Header/>
        <Route path='/giftcard' exact render={(props)=>(
          <>
          <GiftCard />
          </>
        )}/>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddProduct && (
                <AddProduct
                  onAdd={addGC}
                  giftcards={giftcards}
                />
              )}
              {giftcards.length > 0 ? (
                <Grid container spacing={1}>
                  {giftcards.map((giftcard) => (
                    <GridProduct
                      key={giftcard._id}
                      giftcard={giftcard}
                      onToggle={toggleReminder}
                      onDelete={deleteProduct}
                      giftcards={giftcards}
                    />
                   
                  ))}
                </Grid>
              ) : (
                "No products to show"
              )}
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
