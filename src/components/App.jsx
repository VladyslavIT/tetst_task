import React from 'react';
import { Card } from './Card/Card';
import { Container, Thumb } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Thumb>
        <Card />
      </Thumb>
    </Container>
  );
};
