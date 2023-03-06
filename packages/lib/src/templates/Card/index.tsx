import React from 'react';
import { cssMeasure } from '../../helpers';
import { BaseSkeletonProps, Skeleton } from '../../Skeleton';
import { Paragraph } from '../Paragraph';
import * as styles from './styles';

export interface CardProps
  extends BaseSkeletonProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card width
   */
  width?: string | number;
  /**
   * Card max width
   */
  maxWidth?: string | number;
  /**
   * Display image loader "false"
   */
  image?: boolean;
  /**
   * Display header loader "false"
   */
  header?: boolean;
  /**
   * Display paragraph loader "false"
   */
  paragraph?: boolean;
}

export const Card = ({
  width,
  maxWidth,
  image,
  header,
  paragraph,
  className,
  children,
  style,
  fromColor,
  toColor,
  ...rest
}: CardProps) => {
  const sProps = { fromColor, toColor };
  return (
    <div
      className={`rsl-card ${className || ''}`}
      style={{
        width: cssMeasure(width),
        maxWidth: cssMeasure(maxWidth),
        ...styles.card,
        ...style,
      }}
      {...rest}
    >
      {image ? (
        <Skeleton
          {...sProps}
          className="rsl-image"
          height={200}
          style={styles.image}
        />
      ) : null}
      {header || paragraph ? (
        <Paragraph header={header} lines={paragraph ? 3 : 0} {...sProps} />
      ) : null}
      {children}
    </div>
  );
};
