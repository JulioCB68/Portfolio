import styled from "styled-components";

export const Card = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
  justify-content: center;
	flex-direction: column;
`;

export const Text = styled.p`
	color: var(--GreyLight);
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const Title = styled.h1`
  font-size: 18px;
	line-height: 23px;
	padding: 1.25rem 0 0.5rem;
`;

export const Icon = styled.img`
	width: 50%;
`;

export const ContainerIcon = styled.div`
	width: 4.5rem;
	height: 4.5rem;
	display: flex;
	align-items: center;
  justify-content: center;
	background: var(--Grey);
	border-radius: 50%;
`;




