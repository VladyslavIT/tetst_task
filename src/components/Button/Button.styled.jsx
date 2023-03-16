import styled from 'styled-components';

export const ButtonThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  cursor: pointer;
  &:hover {
    background-color: moccasin;
    transform: scale(1.02) rotateX(0deg) translateZ(25px);
  }
`;
