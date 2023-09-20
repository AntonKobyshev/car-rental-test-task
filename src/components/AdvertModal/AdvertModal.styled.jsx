import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 461px;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 14px;
`;

export const ImageAuto = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleAuto = styled.h1`
  font-size: 18px;
  color: var(--black-color);
  font-weight: 500;
  line-height: calc(24 / 18);
`;

export const Model = styled.span`
  color: var(--blue-color);
`;

export const InfoAuto = styled.div`
  margin-top: 8px;
`;

export const Description = styled.p`
  color: var(--black-color);
  line-height: calc(20 / 14);
  margin-top: 14px;
`;

export const InfoTitle = styled.h2`
  font-size: 14px;
  color: var(--black-color);
  line-height: calc(20 / 14);
  font-weight: 500;
`;

export const RentalConditionsList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const RentalConditionsListItem = styled.li`
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

export const ItemValue = styled.span`
  color: var(--blue-color);
  font-weight: 600;
`;

export const LinkPhone = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  font-weight: 600;
  color: var(--white-color);
  line-height: calc(20 / 14);
  border-radius: 12px;
  height: 44px;
  width: 168px;
  border: none;
  background-color: var(--blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: var(--dark-blue-color);
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-size: 12px;
  color: var(--grey-color);
  line-height: calc(18 / 12);
  margin-top: 4px;
`;

export const ListItem = styled.li`
  &:not(:last-child)::after {
    content: '';
    height: 16px;
    width: 1px;
    display: inline-block;
    background-color: var(--light-grey-color);
    margin-left: 9px;
  }
`;
