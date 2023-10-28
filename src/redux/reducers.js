import { createReducer } from "@reduxjs/toolkit";

// Sepet durumu için başlangıç değerleri
const initialState = {
  cartItems: [],  // Sepetin içindeki ürünlerin listesi
  subTotal: 0,    // Sepetin alt toplamı
  shipping: 0,    // Kargo ücreti
  tax: 0,         // Vergi miktarı
  total: 0,       // Toplam tutar
};

// Reducer fonksiyonunu oluştur
export const cartReducer = createReducer(
  initialState,
  {
    // Sepete ürün eklemek için kullanılır
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    // Sepetten ürün miktarını azaltmak için kullanılır
    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },

    // Sepetten belirli bir ürünü kaldırmak için kullanılır
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    // Sepetin toplam fiyatını hesaplamak için kullanılır
    calculatePrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = state.subTotal > 1000 ? 0 : 200;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.tax + state.shipping;
    },
  }
);
