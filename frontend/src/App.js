import { useState } from "react";
import ProductCard from "./components/productCard";
import * as S from "./styles";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2599,
      previousPrice: 2813,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2599,
      previousPrice: 2813,
      isFavorite: false,
    },
  ]);

  const onFavoriteProduct = (id, product) => {
    const newFavorites = favorites.map((item) => item);
    if (!newFavorites.find((item) => item.id === id)) {
      newFavorites.push(product);
    }
    setFavorites(favorites);

    const newProducts = products.map((item) => item);
    const favoriteProduct = newProducts.findIndex((item) => item.id === id);
    newProducts[favoriteProduct].isFavorite = true;
    setProducts(newProducts);
  };

  const onRemoveFavoriteProduct = (id) => {
    const newFavorites = favorites.map((item) => item);
    const index = newFavorites.findIndex((item) => item.id === id);
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);

    const newProducts = products.map((item) => item);
    const favoriteProduct = newProducts.findIndex((item) => item.id === id);
    newProducts[favoriteProduct].isFavorite = false;
    setProducts(newProducts);
  };

  const onAddToCart = (product) => {
    const newCart = cart.map((item) => item);
    if (!newCart.find((item) => item.id === product.id)) {
      newCart.push(product);
    }
    setCart(newCart);
  };

  const onRemoveFromCart = (product) => {
    const newCart = cart.map((item) => item);
    const index = newCart.findIndex((item) => item.id === product.id);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="App">
      <S.ProductList>
        {products.map((product, key) => (
          <ProductCard
            isAdded={cart.find((item) => item.id === product.id)}
            onAddToCart={() => onAddToCart(product)}
            onRemoveFromCart={() => onRemoveFromCart(product)}
            onFavoriteProduct={(id) => onFavoriteProduct(id, product)}
            onRemoveFavoriteProduct={(id) =>
              onRemoveFavoriteProduct(id, product)
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
