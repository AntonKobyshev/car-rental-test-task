import styled from '@emotion/styled';
import home from '../../assets/images/home.png';

export const Container = styled.div`
  background-image: url(${home});
  background-size: cover;
  width: 1184px;
  height: 768px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.47;
  text-align: left;
  padding: 24px 0px;
  color: var(--dark-blue-color);
`;

export const AadvantagesList = styled.ul`
  margin-left: 24px;
  margin-top: 12px;
  width: 520px;
  font-size: 18px;
  font-weight: 700;
  line-height: calc(28 / 24);
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: circle;
  color: var(--blue-color);
`;
export const AadvantagesItem = styled.li`
  list-style-type: disc;
`;
