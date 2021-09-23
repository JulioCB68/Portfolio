import styled from "styled-components";

import {props} from './index';

export const Button = styled.button`
	width: 100%;
	background: ${props => props.primary ? "var(--Green)" : "var(--White)"};
  margin: 0 1rem 0 0;
  @media (max-width: 768px) {
		margin: 0 1rem 0 0;
  }
`;

export const Text = styled.p`
	color: var(--Black);
  padding: 1rem;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
