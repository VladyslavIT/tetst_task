import React from 'react';
import picture from '../../images/main_pic.png';
import rectangle from '../../images/Rectangle.png';
import boy from '../../images/Boy2x.png';
import { Logo } from 'components/Logo/Logo';
import { Button } from 'components/Button/Button';
import {
  CardWrapper,
  ImageWrapper,
  MainPicture,
  MainWrapper,
  RectangleWrapper,
  Rectangle,
  Boy,
  InfoWrapper,
} from './Card.styled';

const Card = () => {
  return (
    <>
      <CardWrapper>
        <ImageWrapper>
          <Logo />

          <MainWrapper>
            <MainPicture src={picture} alt="main" />
          </MainWrapper>
        </ImageWrapper>
        <RectangleWrapper>
          <Boy src={boy} alt="boy" />
          <Rectangle src={rectangle} alt="rectangle" />
        </RectangleWrapper>

        <InfoWrapper>
          <span>777 TWEETS</span>
          <span>100,500 FOLLOWERS</span>
        </InfoWrapper>

        <Button />
      </CardWrapper>
    </>
  );
};

export { Card };
