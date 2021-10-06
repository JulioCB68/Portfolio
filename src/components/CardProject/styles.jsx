import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #212121;
  border: 1px solid #333333;
  padding: 1.25rem 1.5rem;
`;

export const Project = styled.div`
  width: 100%;
  height: 8.125rem;
  background: #171717;
  border: 1px solid #333333;
`;

export const Title = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 0.875rem;
  text-align: center;

  color: #ffffff;
  padding: 1rem 0;
`;

export const Techs = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.125rem;
  text-align: center;

  color: #828282;
`;
