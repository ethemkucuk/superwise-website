import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


  

const img1 =
  "https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";

  const img2 = "https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";
  const img3= "https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";
  const img4="https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";
  const img5="https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";


  const img6="https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";
  const img7="https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";

  const img8 ="https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";
  const img9="https://wgntv.com/wp-content/uploads/sites/5/2023/02/what-is-the-history-behind-the-teddy-bear_.jpg?w=760";
const Home = () => {
  const productList = [
    
    {
      name: "Product1",
      price: 700,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Product2",
      price: 1000,
      imgSrc: img2,
      id: "2",
    },
    {
        name: "Product3",
        price: 1200,
        imgSrc: img3,
        id: "3",
      },
    {
        name: "Product5",
        price: 600,
        imgSrc: img4,
        id: "4",
      },
    {
        name: "Product6",
        price: 1200,
        imgSrc: img5,
        id: "5",
      },
    {
        name: "Product7",
        price: 800,
        imgSrc: img6,
        id: "6",
      },
    {
        name: "Product8",
        price: 900,
        imgSrc: img7,
        id: "7",
      },
    {
        name: "Product9",
        price: 1100,
        imgSrc: img8,
        id: "8",
      },
    {
        name: "Product10",
        price: 700,
        imgSrc: img9,
        id: "9",
      },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>$ {price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;