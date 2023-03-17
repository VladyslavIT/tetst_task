import styled from 'styled-components';

export const CardWrapper = styled.div`
   width: 280px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 380px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;
`;
export const MainPicture = styled.img`
  width: 308px;
  height: 168px;

  @media (max-width: 767px) {
    width: 238px;
  }
`;

export const RectangleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: 26px;
`;
export const Rectangle = styled.img`
  width: 100%;
  height: 6px;
`;

export const Boy = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 100;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 26px;
  gap: 16px;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const Info = styled.span`
`;
