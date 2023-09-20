import { nanoid } from 'nanoid';
import getCity from 'helpers/getCity';
import getCountry from 'helpers/getCountry';
import getShortName from 'helpers/getShortName';
import {
  Container,
  ContainerInfo,
  ImageAuto,
  TitleAuto,
  Model,
  InfoAuto,
  Description,
  InfoTitle,
  RentalConditionsList,
  ItemValue,
  RentalConditionsListItem,
  LinkPhone,
  List,
  ListItem,
} from './AdvertModal.styled';

export default function AdvertModal({ advert }) {
  if (!advert) {
    return;
  }

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = advert;

  const city = getCity(address);
  const country = getCountry(address);
  const rentalConditionsArray = rentalConditions.split('\n');
  const minAgeArray = rentalConditionsArray[0].split(': ');

  const reg = /(?=\B(?:\d{3})+(?!\d))/g;
  const millageChanged = mileage.toString().replace(reg, ',');

  const phoneNumber = `tel:+380000000000`;

  return (
    <Container>
      <ImageAuto src={img} alt={make} />
      <ContainerInfo>
        <div>
          <TitleAuto>
            {make} <Model>{model}</Model>, {year}
          </TitleAuto>
          <InfoAuto>
            <List>
              <ListItem>{city}</ListItem>
              <ListItem>{country}</ListItem>
              <ListItem>Id: {id}</ListItem>
              <ListItem>Year: {year}</ListItem>
              <ListItem>Type: {type}</ListItem>
            </List>
            <List>
              <ListItem>Fuel Consumption: {fuelConsumption}</ListItem>
              <ListItem>Fuel Engine Size: {engineSize}</ListItem>
            </List>
          </InfoAuto>

          <Description>{description}</Description>
        </div>

        <div>
          <InfoTitle>Accessories and functionalities:</InfoTitle>
          <List>
            {accessories.map(accessory => (
              <ListItem key={nanoid()}>{getShortName(accessory)}</ListItem>
            ))}
          </List>
          <List>
            {functionalities.map(functionality => (
              <ListItem key={nanoid()}>{getShortName(functionality)}</ListItem>
            ))}
          </List>
        </div>
        <div>
          <InfoTitle>Rental Conditions:</InfoTitle>
          <RentalConditionsList>
            <RentalConditionsListItem>
              {minAgeArray[0]}: <ItemValue>{minAgeArray[1]}</ItemValue>
            </RentalConditionsListItem>
            <RentalConditionsListItem>
              {' '}
              {rentalConditionsArray[1]}
            </RentalConditionsListItem>
            <RentalConditionsListItem>
              {rentalConditionsArray[2]}
            </RentalConditionsListItem>
            <RentalConditionsListItem>
              Mileage: <ItemValue>{millageChanged}</ItemValue>
            </RentalConditionsListItem>
            <RentalConditionsListItem>
              Price: <ItemValue>{rentalPrice}</ItemValue>
            </RentalConditionsListItem>
          </RentalConditionsList>
        </div>
      </ContainerInfo>
      <LinkPhone to={phoneNumber}>Rental car</LinkPhone>
    </Container>
  );
}
