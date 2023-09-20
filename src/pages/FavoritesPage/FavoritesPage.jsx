import React from 'react';
import { useSelector } from 'react-redux';
import { selectorFavoriteAdverts } from 'redux/adverts/selectors';
import AdvertListItem from 'components/AdvertListItem';
import { Container, List } from './FavoritesPage.styled';
import {
  NoCarImage,
  NoCarPage,
  Text,
} from 'pages/CatalogPage/CatalogPage.styled';

export default function FavoritesPage() {
  const favoriteAdverts = useSelector(selectorFavoriteAdverts);

  const renderFavoriteAdverts = () => {
    if (favoriteAdverts.length === 0) {
      return (
        <NoCarPage>
          <Text>Sorry, there are currently no favorite cars here.</Text>
          <NoCarImage />
        </NoCarPage>
      );
    }

    return (
      <List>
        {favoriteAdverts.map(advert => (
          <AdvertListItem key={advert.id} advert={advert} isFavorite={true} />
        ))}
      </List>
    );
  };

  return <Container>{renderFavoriteAdverts()}</Container>;
}
