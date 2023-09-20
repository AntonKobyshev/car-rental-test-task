import React from 'react';
import {
  Container,
  Title,
  AadvantagesList,
  AadvantagesItem,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <Title> Unlock Freedom: Rent Your Dream Car </Title>
      <AadvantagesList>
        <AadvantagesItem>
          Convenient Booking: Our online booking system makes it easy to reserve
          the car of your choice in advance, saving you time and ensuring
          availability.{' '}
        </AadvantagesItem>
        <AadvantagesItem>
          Competitive Pricing: We provide competitive and transparent pricing
          with no hidden fees, making it cost-effective for your budget.{' '}
        </AadvantagesItem>
        <AadvantagesItem>
          Flexible Rental Periods: Whether you need a car for a day, a week, or
          longer, our flexible rental options cater to various durations.{' '}
        </AadvantagesItem>
        <AadvantagesItem>
          Airport Pickup: We offer convenient airport pickup services, so you
          can start your journey as soon as you arrive.{' '}
        </AadvantagesItem>
        <AadvantagesItem>
          Easy Return: Returning the vehicle is hassle-free, with multiple
          drop-off locations for your convenience.
        </AadvantagesItem>
      </AadvantagesList>
    </Container>
  );
}
