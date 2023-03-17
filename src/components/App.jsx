import React from 'react';
import { Card } from './Card/Card';
import users from '../users.json';
import { Container, Thumb, List } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Thumb>
        <List>
          {users.map(item => (
            <Card key={users.id} {...item} />
          ))}
        </List>
      </Thumb>
    </Container>
  );
};
