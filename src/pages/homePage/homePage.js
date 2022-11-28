import styled from "styled-components";

const StyledHome = styled.div`
  margin: 0 auto;
  flex-direction: column;
  max-width: 1300px;
  display: flex;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export default StyledHome;
