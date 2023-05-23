import styled from 'styled-components';
import { Media } from '../../Assets/Mixins.jsx';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  ${Media.sm`
  width:max-content;
  margin:0 auto;
  `}
`;
export const BestSeller = styled.div`
  position: absolute;
  width: 127px;
  height: 29px;
  left: 0;
  top: 0;

  background: #ffffff;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;

  color: #000000;
`;
export const ImageBox = styled.div`
  position: relative;
  &:hover {
    div:last-child {
      visibility: visible;
      opacity: 1;
    }
  }
  ${Media.sm`
  width:max-content;
  margin:0 auto;
  `}
`;
export const Image = styled.img`
  max-height: 390px;
  max-width: 100%;

  ${Media.sm`
  display: block;
  margin: 0 auto;
  `}
`;
export const Name = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 37px;
  color: #000000;
`;
export const Category = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;

  color: #656565;
`;
export const Price = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 32px;

  color: #656565;
`;
export const Cart = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 0;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.07em;
  width: 100%;
  color: #ffffff;
  background: #000000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear;
`;
