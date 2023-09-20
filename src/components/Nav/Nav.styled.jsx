import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-left: 120px;
`;

export const NavigateItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: var(--black-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--white-color);
  }
`;

export const ActiveNavigateItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: var(--white-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
