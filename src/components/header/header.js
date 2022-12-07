import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  height: 139px;
  background: var(--color-grey-0);
  transition: 1s ease;

  .containerHeader {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    justify-content: center;
  }
  form {
    max-width: 365px;
  }

  @media (min-width: 768px) {
    height: 120px;

    .containerHeader {
      margin: 0 auto;
      max-width: 1300px;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
export default StyledHeader;
