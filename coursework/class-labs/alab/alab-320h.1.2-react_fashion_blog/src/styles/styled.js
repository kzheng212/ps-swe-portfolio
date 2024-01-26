import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  textAlign: center;
  backgroundColor: white;
`;

export const Header = styled.header`
  paddingTop: 2rem;
  // Inner styled component
  .inner-container {
    // Nested Styling
    h1 {
        color: red;
    }
    h2 {
        color: black;
    }
  }
`;

export const Nav = styled.nav`
  padding-top: 2rem;
  .inner-container {
    ul {
        listStyleType: : none;
        li {
            textDecoration: none;
            a {
                textDecoration: none;
            }
        }
    }
  }
`;

export const Footer = styled.footer`
  .footer-container{
    ul {
        listStyleType: 
    }
  }
`;


