import React from 'react';
import { leftCss, rightCss, wrapperCss } from './styles';

const Ref = ({ to, name, ...rest }) => {
  return (
    <a href={to} {...rest}>
      <div style={wrapperCss}>
        <span style={leftCss}>{name}</span>
        <span style={rightCss}>{to}</span>
      </div>
    </a>
  );
};
export { Ref };
