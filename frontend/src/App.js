import { useEffect, useReducer } from "react";
import ProductCard from "./components/productCard";
import * as S from "./styles";
import fetchProducts from "./fetch/products";

const initialState = {
  products: [],
  cart: [],
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loadProducts":
      return { ...state, products: action.products };

    case "addItemToFavorite":
      if (!state.favorites.find((item) => item.id === action.product.id)) {
        return { ...state, favorites: state.favorites.push(action.product) };
      } else {
        return state;
      }

    case "removeItemFromFavorite":
      const favProductIndex = state.favorites.findIndex(
        (item) => item.id === action.product.id
      );
      return {
        ...state,
        favorites: state.favorites.splice(favProductIndex, 1),
      };

    case "addItemToCart":
      if (!state.cart.find((item) => item.id === action.product.id)) {
        return { ...state, cart: state.cart.push(action.product) };
      } else {
        return state;
      }

    case "removeItemFromCart":
      const cartProductIndex = state.cart.findIndex(
        (item) => item.id === action.product.id
      );
      return { ...state, cart: state.cart.splice(cartProductIndex, 1) };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts
      .listProducts()
      .then((res) =>
        dispatch({ type: "loadProducts", products: res.data.results })
      );
  }, []);

  return (
    <div className="App">
      <S.ProductList>
        {state.products.length > 0 &&
          state.products.map((product, key) => (
            <ProductCard
              isAdded={
                state.cart.length > 0 &&
                state.cart.find((item) => item.id === product.id)
              }
              isFavorite={
                state.favorites.length > 0 &&
                state.favorites.find((item) => item.id === product.id)
              }
              onAddToCart={() => dispatch({ type: "addItemToCart", product })}
              onRemoveFromCart={() =>
                dispatch({ type: "removeItemFromCart", product })
              }
              onFavoriteProduct={() =>
                dispatch({ type: "addItemToFavorite", product })
              }
              onRemoveFavoriteProduct={() =>
                dispatch({ type: "removeItemFromFavorite", product })
              }
              product={product}
              key={key}
            />
          ))}
      </S.ProductList>
    </div>
  );
}

export default App;
