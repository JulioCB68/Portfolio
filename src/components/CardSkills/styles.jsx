import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 9.375rem;
  background: #212121;
  border: 1px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    width: 30%;
  }
`;
