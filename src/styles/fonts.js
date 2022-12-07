import styled from "styled-components";
import TypeTag from "./typeTag";

const StyledFont = styled(TypeTag)`
  font-weight: ${({ weight }) => (weight ? weight : "700")};
  color: ${({ color }) => (color ? color : "var(--color-black)")};
  font-size: ${({ size }) => (size ? size : "var(--font-18)")};
`;

export default StyledFont;
