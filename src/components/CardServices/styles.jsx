import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  background: #212121;
  border: 1px solid #333333;
  border-bottom: 5px solid #00DF5E;
  padding: 1.875rem;
  display: flex;
  
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 15%;
  padding: 0 0 2rem;
`;

export const Text = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  width: 30%;
  color: #828282;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
