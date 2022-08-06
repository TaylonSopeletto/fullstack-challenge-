import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  background: ${({ isAdded }) =>
    isAdded ? "var(--green-100)" : "var(--green-400)"};
  border-radius: 5px;
  color: ${({ isAdded }) =>
    isAdded ? "var(--grayscale-900)" : "var(--grayscale-0)"};
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  height: 48px;

  &:hover {
    background: ${({ isAdded }) =>
      isAdded ? "var(--green-600)" : "var(--green-600)"};
    color: ${({ isAdded }) =>
      isAdded ? "var(--grayscale-0)" : "var(--grayscale-0)"};
    cursor: pointer;
  }
`;
