import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  // Redux store'dan gelen sepet verilerini almak için useSelector kullanılır.
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );

  // Redux eylemlerini tetiklemek için useDispatch kullanılır.
  const dispatch = useDispatch();

  // Ürün miktarını artırmak için kullanılan işlev.
  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });

    // Sepet fiyatlarını yeniden hesaplamak için "calculatePrice" eylemini tetikler.
    dispatch({ type: "calculatePrice" });
  };

  // Ürün miktarını azaltmak için kullanılan işlev.
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    // Sepet fiyatlarını yeniden hesaplamak için "calculatePrice" eylemini tetikler.
    dispatch({ type: "calculatePrice" });
  };

  // Ürünü sepetten kaldırmak için kullanılan işlev.
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });

    // Sepet fiyatlarını yeniden hesaplamak için "calculatePrice" eylemini tetikler.
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          // Sepet boş değilse her bir ürün için bir "CartItem" bileşeni oluşturur.
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          // Sepet boşsa "Cart is Empty" yazısını gösterir.
          <h1>Cart is Empty</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: $ {subTotal}</h2>
        <h2>Shipping: $ {shipping}</h2>
        <h2>Tax: $ {tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>Rs. {price}</p>
    </article>

    <div>
      {/* Ürün miktarını azaltmak için düğme. */}
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p> {/* Ürün miktarını gösterir. */}
      {/* Ürün miktarını artırmak için düğme. */}
      <button onClick={() => increment(id)}>+</button>
    </div>

    {/* Ürünü sepetten kaldırmak için "deleteHandler" işlevini tetiklemek için silme simgesi. */}
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
