import React from "react";
import Button from "../../common/button";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RegularIcon from "@fortawesome/free-regular-svg-icons";
import * as SolidIcon from "@fortawesome/free-solid-svg-icons";
import { toReal } from "../../utils/index";

const ProductCard = ({
  product,
  onFavoriteProduct,
  onRemoveFavoriteProduct,
  onRemoveFromCart,
  onAddToCart,
  isAdded,
}) => {
  return (
    <S.Container>
      <S.AddToWish
        isFavorite={product.isFavorite}
        type="button"
        onClick={() =>
          product.isFavorite
            ? onRemoveFavoriteProduct(product.id)
            : onFavoriteProduct(product.id)
        }
      >
        <FontAwesomeIcon
          fontSize={30}
          icon={product.isFavorite ? SolidIcon.faHeart : RegularIcon.faHeart}
        />
      </S.AddToWish>
      <img alt={product.name} src="image.png" />
      <p>{product.name}</p>
      <div className="priceContainer">
        <p className="previousPrice">R$ {toReal(product.previousPrice)}</p>
        <p className="price">R$ {toReal(product.price)}</p>
        <p className="installments">
          em até <span>10x de R$ {toReal(product.price / 10)} </span>sem juros
        </p>
      </div>
      <Button
        isAdded={isAdded}
        label={isAdded ? "ADICIONADO" : "ADICIONAR"}
        type="button"
        onClick={() => (isAdded ? onRemoveFromCart() : onAddToCart())}
      />
    </S.Container>
  );
};

export default ProductCard;
