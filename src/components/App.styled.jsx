import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 20px 36px 20px;

  @media (min-width: 1280px) {
    padding: 0 20px;
  }
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  @media (min-width: 1280px) {
    height: 100vh;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
