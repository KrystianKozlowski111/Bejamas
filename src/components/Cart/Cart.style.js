import styled from 'styled-components';

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 10;

  background: #ffffff;
  border: 4px solid #e4e4e4;
`;

export const CartX = styled.div`
  display: flex;

  justify-content: flex-end;

  cursor: pointer;
`;
export const CartText = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 9px;
`;
export const CartPrice = styled.div`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 32px;
  /* identical to box height */

  color: #656565;
`;
export const RemoveAllButton = styled.div`
  cursor: pointer;
  display: flex;
  width: 392px;
  height: 55px;
  background: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 3px solid #000000;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.07em;
  color: #000000;
`;
export const CartImage = styled.img`
  max-width: 150px;
  max-height: 86px;
  width: 100%;
`;
