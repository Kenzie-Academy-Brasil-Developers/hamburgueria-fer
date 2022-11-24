import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: ${({ size }) => (size ? size : 'var(--font-14)')};
    font-weight:  ${({ weight }) => (weight ? weight : '600')}; 
    padding: 0px 20px;
    gap: 10px;
    height: ${({height}) => ( height ? height : '40px')};

    background: ${({background}) => ( background ? background : 'var(--color-primary)')};
    color: ${({color}) => (color ? color : 'var(--color-white)')};

    border: 2px solid ${({border}) => ( border ? border : 'var(--color-primary)')};
    border-radius: 8px;

 ` 