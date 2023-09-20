import styled from "@emotion/styled";

export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 50px;
    font-family: 'Manrope', sans-serif;
    font-size: 14;
    font-weight:600;
    color: var(--white-color);
    line-height: calc(20/14);
    border-radius: 12px;
    height: 44px;
    width: 100%;
    border: none;
    background-color: var(--blue-color);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover, :focus {
        background-color:  var(--dark-blue-color);
    }
   
`;