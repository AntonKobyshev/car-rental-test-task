import styled from "@emotion/styled";
import noCarImage from "../../assets/images/no-cars-image.png";

export const Container = styled.div`
    width: 1184px;
    margin-left: auto;
    margin-right:auto;

`;

export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 150px;
    margin-left: auto;
    margin-right: auto;
    font-family: "Manrope";
    text-decoration-line: underline;
    font-size: 16px;
    font-weight: 500;
    color: var(--blue-color);
    line-height: calc(24/16);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover, :focus {
        color:  var(--dark-blue-color);
    }
`;

export const NoCarPage = styled.div`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NoCarImage= styled.div`
    width: 1280px;
    height: 768px;
    margin-top: 100px;
    background-image: url(${noCarImage});
    background-size: contain;
    background-repeat:no-repeat;
    background-position: center;
`;

export const Text = styled.p`
    font-size: 38px;
    font-weight: 600;
    line-height: 1.47;
    text-align: center;
    color: var(--grey-color);
`;