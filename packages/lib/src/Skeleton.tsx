import { CSSProperties, HTMLAttributes, useEffect } from 'react';
import { createAnimation, cssMeasure } from './helpers';

export interface BaseSkeletonProps {
  /**
   * From color
   */
  fromColor?: string;
  /**
   * To color
   */
  toColor?: string;
}
export interface SkeletonProps
  extends BaseSkeletonProps,
    HTMLAttributes<HTMLDivElement> {
  /**
   * Rounded loader
   */
  rounded?: boolean;
  /**
   * Element width
   */
  width?: string | number;
  /**
   * Element max width
   */
  maxWidth?: string | number;
  /**
   * Element min width
   */
  minWidth?: string | number;
  /**
   * Element height
   */
  height?: string | number;
  /**
   * Element max height
   */
  maxHeight?: string | number;
  /**
   * Element min height
   */
  minHeight?: string | number;
}

/* @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  } */

const buildProps = ({
  rounded,
  fromColor = 'rgba(0, 0, 0, 0.04)',
  toColor = 'rgba(0, 0, 0, 0.06)',
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  style,
  ...rest
}: SkeletonProps): [
  CSSProperties,
  CSSProperties,
  HTMLAttributes<HTMLDivElement>,
] => {
  return [
    {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: rounded ? '50%' : '3px',
      backgroundColor: fromColor,
      width: cssMeasure(width),
      maxWidth: cssMeasure(maxWidth),
      minWidth: cssMeasure(minWidth),
      height: cssMeasure(height),
      maxHeight: cssMeasure(maxHeight),
      minHeight: cssMeasure(minHeight),
      ...style,
    },
    {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(90deg,rgba(0, 0, 0, 0),${toColor},rgba(0, 0, 0, 0))`,
      transform: 'translateX(-100%)',
      animation: 'loading 1.8s 0.5s infinite',
    },
    rest,
  ];
};

export const Skeleton = ({ className, children, ...rest }: SkeletonProps) => {
  const [wrapper, inner, other] = buildProps(rest);
  useEffect(() => {
    createAnimation();
  }, []);

  createAnimation();
  return (
    <div className={`rsl ${className || ''}`} {...other} style={wrapper}>
      <div style={inner}></div>
      {children}
    </div>
  );
};
