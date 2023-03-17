import React from 'react';
import { Card } from './Card/Card';
import users from '../users.json';
import { Container, Thumb, Title, List } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Thumb>
        <Title>Join the community and follow our users to stay connected!</Title>
        <List>
          {users.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </List>
      </Thumb>
    </Container>
  );
};
