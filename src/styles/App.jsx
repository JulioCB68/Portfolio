import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  color: var(--White);
  overflow: hidden;
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

export const SubText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: var(--GreyLight);
  padding: 1rem 0 2rem;
`;

export const ContainerButtons = styled.div`
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

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const AboutMe = styled.p`
  text-align: center;
  padding: 1.875rem;
  width: 46.563rem;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: var(--GreyLight);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Contact = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 5rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
  }
`;

export const Projects = styled.div`
  padding: 7rem 0;
`;

export const ProjectTitle = styled.h1`
  text-align: center;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
  color: #f9f9f9;
  padding: 1.875rem 0;
`;

export const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem 5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
    padding: 0 2rem;
  }
`;

export const Services = styled.div`
  padding: 8rem 0;
`;

export const ServicesTitle = styled.div`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  /* identical to box height */

  text-align: center;

  color: #f9f9f9;
  padding: 1.875rem 0;
`;

export const Service = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
    padding: 0 2rem;
  }
`;

export const Skills = styled.div`
  padding: 0 0 5rem;
`;

export const SkillsTitle = styled.div`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  /* identical to box height */

  text-align: center;
  padding: 5rem 0;
  color: #f9f9f9;
`;

export const Skill = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
    padding: 0 2rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 3.75rem;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextFooter = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: #f9f9f9;

  >span {
    color: #00DF5E;
  }
`;
