import { useState, useEffect } from "react";
import ProductCard from "./components/productCard";
import * as S from "./styles";
import fetchProducts from "./fetch/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchProducts.listProducts().then((res) => setProducts(res.data.results));
  }, []);

  const onFavoriteProduct = (product) => {
    const newFavorites = favorites.map((item) => item);
    if (!newFavorites.find((item) => item.id === product.id)) {
      newFavorites.push(product);
    }
    setFavorites(favorites);

    const newProducts = products.map((item) => item);
    const favoriteProduct = newProducts.findIndex(
      (item) => item.id === product.id
    );
    newProducts[favoriteProduct].isFavorite = true;
    setProducts(newProducts);
  };

  const onRemoveFavoriteProduct = (product) => {
    const newFavorites = favorites.map((item) => item);
    const index = newFavorites.findIndex((item) => item.id === product.id);
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);

    const newProducts = products.map((item) => item);
    const favoriteProduct = newProducts.findIndex(
      (item) => item.id === product.id
    );
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
      <p>{process.env.NODE_ENV}</p>
      <S.ProductList>
        {products.map((product, key) => (
          <ProductCard
            isAdded={cart.find((item) => item.id === product.id)}
            onAddToCart={() => onAddToCart(product)}
            onRemoveFromCart={() => onRemoveFromCart(product)}
            onFavoriteProduct={() => onFavoriteProduct(product)}
            onRemoveFavoriteProduct={() => onRemoveFavoriteProduct(product)}
            product={product}
            key={key}
          />
        ))}
      </S.ProductList>
    </div>
  );
}

export default App;
