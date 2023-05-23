import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: relative;
`;
export const Counter = styled.div`
  display: flex;
  position: absolute;
  background: #000000;
  width: 20px;
  height: 20px;
  bottom: -20%;
  right: -1%;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.07em;
  color: #ffffff;
  align-items: center;
  justify-content: center;
`;
export const TopHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
`;
export const Button = styled.div`
  display: flex;
`;
