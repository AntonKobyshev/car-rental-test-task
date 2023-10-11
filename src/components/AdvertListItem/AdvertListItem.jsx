import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/Modal';
import AdvertModal from 'components/AdvertModal/AdvertModal';
import getCity from 'helpers/getCity';
import getCountry from 'helpers/getCountry';
import getAccessory from 'helpers/getAccessory';
import { setFavorite } from 'redux/adverts/advertsSlice';
import Button from 'components/Button';
import {
  CatalogItem,
  Container,
  ImageAuto,
  TitleAuto,
  Model,
  FavoriteBtn,
  Heart,
  FavoriteHeart,
  List,
  ListItem,
  InfoAuto,
} from './AdvertListItem.styled';
import svg from '../../assets/images/icons/sprite.svg';
import placeholderImage from '../../assets/images/placeholder-image.png';

export default function AdvertListItem({ advert, isFavorite }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [imageError, setImageError] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = advert;

  const maxModelLength = 8;
  const truncatedModel =
    model.length > maxModelLength
      ? model.slice(0, maxModelLength) + '...'
      : model;

  const country = getCountry(address);
  const city = getCity(address);
  const accessory = getAccessory(accessories);

  const dispatch = useDispatch();

  const handleClickFavorite = () => {
    dispatch(setFavorite(advert));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <CatalogItem>
      <Container>
        <ImageAuto
          src={imageError ? placeholderImage : img}
          alt={make}
          onError={handleImageError}
        />
        <FavoriteBtn type="button" onClick={handleClickFavorite}>
          {isFavorite ? (
            <FavoriteHeart width="18" height="18">
              <use href={svg + '#heart'}></use>
            </FavoriteHeart>
          ) : (
            <Heart width="18" height="18">
              <use href={svg + '#heart'}></use>
            </Heart>
          )}
        </FavoriteBtn>

        <TitleAuto>
          <p>
            {make} <Model>{truncatedModel}</Model>, {year}
          </p>
          <p>{rentalPrice}</p>
        </TitleAuto>
        <InfoAuto>
          <List>
            <ListItem>{city}</ListItem>
            <ListItem>{country}</ListItem>
            <ListItem>{rentalCompany}</ListItem>
          </List>

          <List>
            <ListItem>{type}</ListItem>
            <ListItem>{model}</ListItem>
            <ListItem>{id}</ListItem>
            <ListItem>{accessory}</ListItem>
          </List>
        </InfoAuto>

        <Button text={'Learn more'} onClick={toggleModal} />
        {showModal && (
          <Modal onClose={toggleModal}>
            <AdvertModal advert={advert} />
          </Modal>
        )}
      </Container>
    </CatalogItem>
  );
}
