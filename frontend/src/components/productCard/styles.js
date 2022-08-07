import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;
  width: 304px;
  background: white;
  border-radius: 8px;
  position: relative;

  .priceContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .previousPrice {
      color: var(--grayscale-600);
      text-decoration-line: line-through;
      font-size: 14px;
      font-weight: 500;
    }

    .price {
      color: var(--red-500);
      font-size: 20px;
      font-weight: 600;
    }

    .installments {
      color: var(--grayscale-700);
      letter-spacing: -0.005em;
      font-weight: 500;
      font-size: 12px;
      span {
        color: var(--grayscale-900);
      }
    }
  }

  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

export const AddToWish = styled.button`
  position: absolute;
  right: 20px;
  background: ${({ isFavorite }) =>
    isFavorite ? "var(--red-500)" : "var(--grayscale-200)"};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  color: ${({ isFavorite }) =>
    isFavorite ? "var(--grayscale-0)" : "var(--grayscale-900)"};

  &:hover {
    color: ${({ isFavorite }) =>
      isFavorite ? "var(--grayscale-0)" : "var(--red-500)"};
    background: ${({ isFavorite }) =>
      isFavorite ? "var(--red-600)" : "var(--pink-100)"};
    cursor: pointer;
  }
`;
