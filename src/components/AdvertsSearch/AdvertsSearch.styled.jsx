import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 50px;
  font-family: 'Manrope', sans-serif;
  font-size: 14;
  font-weight: 600;
  color: var(--white-color);
  line-height: calc(20 / 14);
  border-radius: 12px;
  height: 48px;
  width: 136px;
  border: none;
  background-color: var(--blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  :focus {
    background-color: var(--dark-blue-color);
  }
`;
export const SearchForm = styled.form`
  display: flex;
  gap: 18px;
  align-items: end;
  margin-left: auto;
  margin-right: auto;
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  height: 48px;
  padding: 14px 18px;
  font-size: 18px;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
  border-radius: 14px;
  background-color: #f7f7fb;
  color: var(--black-color);
  border: none;
`;

export const GroupInput = styled.div`
  display: flex;
`;

export const TextLabel = styled.label`
  font-size: 14px;
  color: #8a8a89;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const FilterInputLeft = styled.input`
  box-sizing: border-box;
  height: 48px;
  width: 160px;
  padding: 14px 18px;
  font-size: 18px;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: #f7f7fb;
  color: var(--black-color);
  border-right-color: var(--grey-color);
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
`;

export const FilterInputRight = styled.input`
  box-sizing: border-box;
  height: 48px;
  width: 160px;
  padding: 14px 18px;
  font-size: 18px;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: #f7f7fb;
  color: var(--black-color);
  border: none;
`;
