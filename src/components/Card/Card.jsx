import React, { useEffect, useState } from 'react';
import { boy, picture, rectangle } from '../../images/index';
import { Logo } from 'components/Logo/Logo';
import { Button } from 'components/Button/Button';
import {
  CardItem,
  CardTitle,
  CardWrapper,
  ImageWrapper,
  MainPicture,
  MainWrapper,
  RectangleWrapper,
  Rectangle,
  Boy,
  InfoWrapper,
  Info,
} from './Card.styled';

const Card = ({ id, user, tweets, followers }) => {
  const [follow, setFollow] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

  useEffect(() => {
    const followStatus = localStorage.getItem(`card:${id}`);
    if (followStatus !== null) {
      const user = JSON.parse(followStatus);
      setFollow(user.following);
      setFollowerCount(user.count);
    }
  }, [id]);

  const onFollow = () => {
    if (!follow) {
      setFollow(true);
      setFollowerCount(followerCount + 1);
      localStorage.setItem(
        `card:${id}`,
        JSON.stringify({ following: true, count: followerCount + 1 })
      );
      return;
    }
    setFollow(false);
    setFollowerCount(followerCount - 1);
    localStorage.setItem(
      `card:${id}`,
      JSON.stringify({ following: false, count: followerCount - 1 })
    );
  };

  const formattedCount = followerCount.toLocaleString('en-US', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <>
    <CardItem>
    <CardTitle>{user}</CardTitle>
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
          <Info>{tweets} TWEETS</Info>
          <Info>{formattedCount} FOLLOWERS</Info>
        </InfoWrapper>

        <Button onFollow={onFollow} follow={follow} />
      </CardWrapper>
      </CardItem>
    </>
  );
};

export { Card };
