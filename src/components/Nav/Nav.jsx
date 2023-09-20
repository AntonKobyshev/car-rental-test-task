import { useLocation } from 'react-router-dom';
import { Navigation, NavigateItem, ActiveNavigateItem } from './Nav.styled';

export default function Nav() {
  const location = useLocation();

  return (
    <Navigation>
      {location.pathname === '/' ? (
        <ActiveNavigateItem to="/">Home</ActiveNavigateItem>
      ) : (
        <NavigateItem to="/">Home</NavigateItem>
      )}
      {location.pathname === '/catalog' ? (
        <ActiveNavigateItem to="/">Catalog</ActiveNavigateItem>
      ) : (
        <NavigateItem to="/catalog">Catalog</NavigateItem>
      )}
      {location.pathname === '/favorites' ? (
        <ActiveNavigateItem to="/favorites">Favorites</ActiveNavigateItem>
      ) : (
        <NavigateItem to="/favorites">Favorites</NavigateItem>
      )}
    </Navigation>
  );
}
