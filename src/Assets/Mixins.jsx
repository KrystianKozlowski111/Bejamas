import { css } from 'styled-components';

 const Breakpoints = {
  xs: 480,
  sm: 767,
  md: 969,
  lg: 1024,
  xlg: 1280,
  xxlg: 1440,
  xxxlg: 1620,
  xxxxlg: 1820,
};

export const Media = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
