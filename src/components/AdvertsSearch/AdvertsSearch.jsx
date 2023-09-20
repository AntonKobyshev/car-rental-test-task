import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { updateFilters } from 'redux/adverts/advertsSlice';
import makes from './makes.json';
import {
  Container,
  SearchForm,
  Btn,
  FilterInput,
  FormElement,
  GroupInput,
  TextLabel,
  FilterInputLeft,
  FilterInputRight,
} from './AdvertsSearch.styled';

export default function AdvertsSearch() {
  const dispatch = useDispatch();

  let prices = [];
  for (let i = 30; i <= 250; i += 10) {
    prices.push(i);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const inputs = e.target.elements;
    const values = {
      make: inputs.make.value,
      price: inputs.price.value,
      mileageFrom: inputs.mileageFrom.value,
      mileageTo: inputs.mileageTo.value,
    };
    dispatch(updateFilters(values));
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <FormElement>
          <TextLabel htmlFor="make">Car brand</TextLabel>
          <FilterInput
            list="car-makes"
            id="brand"
            name="make"
            autoComplete="off"
            placeholder="Enter the text"
          />
          <datalist id="car-makes">
            {makes.map(make => (
              <option key={nanoid()} value={make}></option>
            ))}
          </datalist>
        </FormElement>

        <FormElement>
          <TextLabel htmlFor="price">Price/ 1 hour </TextLabel>
          <FilterInput
            list="car-prices"
            id="price"
            name="price"
            autoComplete="off"
            placeholder="To $"
          />
          <datalist id="car-prices">
            {prices.map(price => (
              <option key={nanoid()} value={price}></option>
            ))}
          </datalist>
        </FormElement>

        <FormElement>
          <TextLabel htmlFor="mileageFrom">Сar mileage / km</TextLabel>
          <GroupInput>
            <FilterInputLeft
              type="number"
              id="mileageFrom"
              name="mileageFrom"
              autoComplete="off"
              placeholder="From"
            />
            <FilterInputRight
              type="number"
              id="mileageTo"
              name="mileageTo"
              autoComplete="off"
              placeholder="To"
            />
          </GroupInput>
        </FormElement>

        <Btn type="submit">Search</Btn>
      </SearchForm>
    </Container>
  );
}
