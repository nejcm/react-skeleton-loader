const colors = {
  info: 'rgb(56, 132, 255)',
  success: 'rgb(0, 204, 136)',
  warning: 'rgb(255, 204, 0)',
  danger: 'rgb(243, 32, 19)',
  default: 'rgb(0, 0, 0, .3)',
  infoLight: 'rgba(56, 132, 255, .1)',
  successLight: 'rgba(0, 219, 136, .1)',
  warningLight: 'rgba(255, 204, 0, .1)',
  dangerLight: 'rgba(243, 32, 19, .1)',
  defaultLight: 'rgba(0, 0, 0, .04)',
};

export const containerCss = (type: string): React.CSSProperties => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  margin: '2rem 0',
  padding: '1.25rem 1rem',
  backgroundColor: colors[`${type}Light`],
  borderLeft: '4px solid ${getColor}',
  borderRadius: '5px',
});

export const spanCss = (
  type: string,
  variant = 'outer',
): React.CSSProperties => ({
  lineHeight: 0,
  ...(variant !== 'outer'
    ? { marginRight: '1rem' }
    : {
        position: 'absolute',
        top: '-12px',
        left: '-12px',
        boxShadow: '0 0 0 6px var(--ifm-background-color)',
        backgroundColor: 'var(--ifm-background-color)',
        borderRadius: '50%',
      }),
});

export const svgCss = (type: string): React.CSSProperties => ({
  color: colors[`${type}`],
});

export const divCss: React.CSSProperties = {
  width: '100%',
  flex: '1 1 auto',
};
