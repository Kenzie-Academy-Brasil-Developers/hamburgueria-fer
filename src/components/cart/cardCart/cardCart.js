import styled from "styled-components";

const StyledCardCart = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  .divImg {
    width: 80px;
    height: 80px;
    background: var(--color-grey-0);
    border-radius: 8px;
  }
  .divImg > img {
    width: 100%;
  }
`;
export default StyledCardCart;
