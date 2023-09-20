import styled from '@emotion/styled';

export const ModalWindow = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%);
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rbga(0, 0, 0, 0.12);
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CrossBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 16px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--black-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    color: var(--dark-blue-color);
  }
`;

export const Cross = styled.svg`
  stroke: currentColor;
`;
