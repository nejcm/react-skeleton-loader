import React from 'react';
import { AlertTriangle, CheckCircle, Info, XCircle } from 'react-feather';
import { containerCss, divCss, spanCss, svgCss } from './styles';

const icons = {
  default: Info,
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  danger: XCircle,
};

const Hint = ({
  icon = true,
  type = 'default',
  children,
  style,
  variant,
  ...rest
}) => {
  const Icon = icons[type];

  return (
    <div
      style={{
        ...containerCss(type),
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <span style={spanCss(type, variant)}>
          <Icon style={svgCss(type)} size={27} />
        </span>
      )}
      <div style={divCss}>{children}</div>
    </div>
  );
};

export { Hint };
