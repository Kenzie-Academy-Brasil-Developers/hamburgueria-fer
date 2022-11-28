import styled from "styled-components";

const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .divValue {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledVazio = styled.div`
  height: 150px;
  background: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export { StyledTotal, StyledVazio };
