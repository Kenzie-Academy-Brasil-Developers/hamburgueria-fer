import styled from "styled-components";

const StyledCart = styled.ul`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  height: min-content;
  background: #fafafa;

  .headerCard {
    background: var(--color-primary);
    padding: 10px;
    border-radius: 8px 0px;
    display: flex;
    align-items: center;
    height: 65px;
  }

  @media (min-width: 900px) {
    width: 365px;
  }
`;
export default StyledCart;
