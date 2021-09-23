import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: 0 auto;
	color: var(--White);
`;

//---------------------------------- NAVBAR ----------------------------------//
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
	@media (max-width: 768px) {
		padding: 0 2rem;
		border-bottom: 1px solid var(--White);
	}
`;

export const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
	font-weight: bold;
	font-size: 1.5rem;
	line-height: 2rem;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: var(--Green);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 500ms ease-in;
    width: 100%;
  }
`;

export const Links = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
	font-size: 1rem;
	line-height: 1.5rem;
  &:hover {
    color: var(--Green);
  }
`;

//---------------------------------- MAIN ----------------------------------//

export const Main = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
  padding: 9rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 9rem 2rem;
  }
`;

export const Resume = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  width: 13rem;
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 26px;
  }
`;

export const SubText =  styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #828282;
  padding: 1rem 0 2rem;
`;

export const ContainerButtons =  styled.div`
  display: flex;
  width: 47%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
    margin: 2rem 1rem;
  }
`;

export const Image = styled.img`
	width: 70%;
`;



// proximo commit colocar "fix navbar"
