import styled from 'styled-components';
import { Media } from '../../Assets/Mixins.jsx';

export const BoxContainer = styled.div`
  display: flex;
`;
export const Wrapper = styled.div``;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 100px;
  margin-bottom: 61px;
`;
export const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  ${Media.sm`
  grid-template-columns: 1fr ;
`}
`;
export const BottomRight = styled.div``;
export const MobileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

export const MobileButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  margin-top: 15px;
`;

export const Clear = styled.div`
  cursor: pointer;
  display: flex;
  width: 176px;
  height: 48px;
  background: #ffffff;
  border: 2px solid #000000;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.07em;
  color: #000000;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Save = styled.div`
  cursor: pointer;
  display: flex;
  width: 176px;
  height: 52px;
  background: #000000;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.07em;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
`;

export const BottomLeft = styled.div`
  ${Media.sm`
  position: fixed;
  left: 0;
  right: 0; 
  height: calc(100vh - 88px);
  background-color: #fff;
  overflow: auto;
  z-index: 101;
  padding: 20px;
  top: 88px;
  box-shadow: 0 0 0 100px #00000020;
`}
`;
export const BurgerIcon = styled.div``;

export const PaginationButton = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 32px;
  text-align: right;

  color: #b4b4b4;
`;

export const SortButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  align-items: center;
  color: #9b9b9b;

  cursor: pointer;
`;

export const SmallDivider = styled.div`
  border: 1px solid #c2c2c2;
  width: 90%;
  margin-bottom: 31px;
`;

export const CatText = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 43px;
  text-align: left;
  ${Media.sm`
  font-size: 34px;
  line-height: 37px;
  margin-top:20px;
  margin-bottom: 0px;

  `}
`;

export const CheckboxText = styled.label`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  color: #1d1d1d;
`;
export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 40px;
  ${Media.sm`
  gap: 30px;

  `}
`;
export const PriceInputBox = styled.div`
  display: flex;

  input {
    visibility: hidden;
    position: absolute;
  }
  label::before {
    display: block;
    content: '';
    height: 18px;
    width: 18px;
    min-height: 18px;
    min-width: 18px;
    border: 2px solid #000000;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.2s linear;
  }
  label {
    display: flex;
    align-items: center;
    gap: 23px;
    cursor: pointer;
  }
  label:hover::before {
    background-image: url('icons/Check.svg');
  }
  input:checked + label::before {
    background-image: url('icons/Check.svg');
  }
`;

export const Select = styled.select``;
export const RightTop = styled.div``;
export const CatBox = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 40px;
  input {
    visibility: hidden;
    position: absolute;
  }
  label::before {
    display: block;
    content: '';
    height: 18px;
    width: 18px;
    min-height: 18px;
    min-width: 18px;
    border: 2px solid #000000;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.2s linear;
  }
  label {
    display: flex;
    align-items: center;
    gap: 23px;
    cursor: pointer;
  }
  label:hover::before {
    background-image: url('icons/Check.svg');
  }
  input:checked + label::before {
    background-image: url('icons/Check.svg');
  }
  ${Media.sm`
  margin-bottom: 30px;

  `}
`;

export const Title = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 33px;
  color: #000000;
  ${Media.sm`
  font-size: 18px;
line-height: 20px;
  `}
`;
export const Subtitle = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 33px;
  color: #9b9b9b;
  ${Media.sm`
  font-size: 18px;
line-height: 20px;
  `}
`;

export const LeftTop = styled.div`
  display: flex;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;
export const BoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
  ${Media.lg`
  grid-template-columns: 1fr 1fr ;
`}
  ${Media.sm`
grid-template-columns: 1fr ;
`}
`;
