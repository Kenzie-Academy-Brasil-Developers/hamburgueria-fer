import styled from "styled-components";

const StyledList = styled.ul`
  padding: 20px;
  width: 100vw;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  li {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-grey-20);
    border-radius: 8px;
    width: 280px;
    height: 360px;
    transition: 0.5s ease;
  }
  li:hover {
    box-shadow: 10px 10px 19px -11px rgba(0, 0, 0, 0.75);
  }

  .divImg {
    background-color: var(--color-grey-0);
    height: 50%;
    width: 276px;
    border-radius: 8px 0px;
    display: flex;
    overflow: hidden;
    align-items: flex-end;
    justify-content: space-evenly;
  }
  .divImg img {
    max-width: 277px;
  }
  .divInf {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 50%;
    padding: 20px;
  }

  @media (min-width: 700px) {
    overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 900px) {
    width: 940px;
  }

  @media (min-width: 1300px) {
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export default StyledList;
