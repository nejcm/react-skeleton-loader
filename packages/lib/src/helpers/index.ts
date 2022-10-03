export const cssMeasure = (
  value: string | number | undefined | null,
): string | undefined => {
  return value ? (typeof value === 'string' ? value : `${value}px`) : undefined;
};

let initialized = false;
export const createAnimation = () => {
  if (initialized || typeof window == 'undefined' || !window.document) return;
  initialized = true;
  const styleEl = document.createElement('style');
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;

  const keyFrames = `
    @keyframes loading {
      100% {
        transform: translateX(100%);
      }
    }
  `;

  if (styleSheet) styleSheet.insertRule(keyFrames, 0);
};
