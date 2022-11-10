import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const initialState = []

  const [variantInfo, setVariantInfo] = useState(initialState)
  const [total, setTotal] = useState(0.00)

  function handleSize(item) {
    setVariantInfo(variantInfo => [...variantInfo, item]);
  }

  function handleTotal(item) {
    setTotal(Math.round((total+item + Number.EPSILON) * 100) / 100);
  }
	
  function myFunction(event, name, price){
    console.log(variantInfo)
    handleSize(name);
    handleTotal(price);
  }

  function MyButton({ item, onClick }) {
    // console.log(item.price)
    return (
      <button onClick={event => myFunction(event, item.name, item.price)}>
        <p>Add to Cart</p>
      </button>
    );
  }

  let content;
  if (variantInfo?.length > 0) {
    let visited = []
    let movies = 0
    content = variantInfo.map(item => {
          if (!visited.includes(item)){
            movies = variantInfo.filter(item1 => item1 === item)
            visited = [...visited, item]
            return <p>{item} x{movies.length}</p>
          }

    })
  } else {
    content = <p>Nothing in your cart... Yet!</p>
  }

  console.log(content)


  return (
    <div className="App">
      <h1>The Bakery of Grinds and Sighs</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div>
          <BakeryItem item={item}></BakeryItem>
          <MyButton item={item} onClick={myFunction}/>
        </div>
      ))}

      <div>
        <h2>Cart</h2>
        <div>
          <p>${total}</p>
          <div>
          {content}
          </div>
        </div>
            
      </div>
    </div>
  );
}

export default App;
