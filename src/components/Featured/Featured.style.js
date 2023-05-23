import styled from 'styled-components';
import { Media } from '../../Assets/Mixins.jsx';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;
`;

export const ProductTitle = styled.h1`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  ${Media.sm`
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    `}
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  letter-spacing: 0.07em;
  width: 257px;
  height: 47px;
  background: #000000;
  color: #ffffff;
  ${Media.sm`
  width:100%;
  margin-bottom:15px;
  `}
`;

export const ImageBox = styled.div`
  width: 100%;
  position: relative;
`;

export const Category = styled.p`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #656565;
  ${Media.sm`
  display:none;

  `}
`;

export const Description = styled.p`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #656565;
  ${Media.sm`
  text-align: left;
  `}
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 27px;
  margin-bottom: 54px;
  ${Media.sm`
  text-align: center;
  justify-content:center;
  `}
`;

export const ImageItem = styled.img`
  max-height: 553px;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
`;
export const ImageItemSmall = styled.img`
  max-height: 147px;
`;
export const SizeInfo = styled.span`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  text-align: right;

  color: #656565;
  ${Media.sm`
  text-align: left;
  font-size: 22px;
  line-height: 24px;

color: #656565;

  `}
`;
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 62px;
  align-items: center;
  width: 100%;
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  ${Media.sm`
  flex-direction:column;
  `}
`;
export const LeftContainer = styled.div`
  text-align: left;
  max-width: 690px;
`;
export const Divider = styled.hr`
  border: 0px;
  width: 100%;
  height: 4px;
  background-color: #e4e4e4;
`;
export const SizeContainer = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 65px;
`;

export const RightContainer = styled.div``;
export const Details = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  text-align: right;
  ${Media.sm`
  text-align: left;
  `}
`;

export const Name = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  ${Media.sm`
  text-align: center;
line-height: 150%;

  `}
`;

export const PhotoText = styled.div`
  display: flex;
  height: 67px;
  width: 271px;
  align-items: center;
  justify-content: center;
  background: white;
  position: absolute;
  bottom: 0px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;
