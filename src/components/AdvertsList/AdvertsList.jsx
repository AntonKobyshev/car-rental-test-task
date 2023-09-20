import { useSelector } from 'react-redux';
import { selectorFavoriteAdverts } from 'redux/adverts/selectors';

import AdvertListItem from 'components/AdvertListItem';
import { List } from './AdvertsList.styled';

export default function AdvertsList({ adverts }) {
  const favoriteAdverts = useSelector(selectorFavoriteAdverts);
  const favoritesId = favoriteAdverts.map(advert => advert.id);

  return (
    <List>
      {adverts.map(advert => (
        <AdvertListItem
          key={advert.id}
          advert={advert}
          isFavorite={favoritesId.includes(advert.id)}
        />
      ))}
    </List>
  );
}
