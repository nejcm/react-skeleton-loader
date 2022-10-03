import React from 'react';
import { BaseSkeletonProps, Skeleton } from '../../Skeleton';
import { Paragraph } from '../Paragraph';
import * as styles from './styles';

export interface CommentProps
  extends BaseSkeletonProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar size "45"
   */
  avatarSize?: number;
  /**
   * Display avatar image as rounded "true"
   */
  avatarRounded?: boolean;
  /**
   * Number of comment lines "3"
   */
  lines?: number;
}

export const Comment: React.FC<CommentProps> = ({
  avatarSize = 45,
  avatarRounded = true,
  lines = 3,
  className,
  children,
  fromColor,
  toColor,
  style,
  ...rest
}) => {
  const sProps = { fromColor, toColor };
  return (
    <div
      className={`rsl-comment ${className || ''}`}
      style={{ ...styles.comment, ...style }}
      {...rest}
    >
      <Skeleton
        className="rsl-avatar"
        rounded={avatarRounded}
        width={avatarSize}
        height={avatarSize}
        style={styles.image}
        {...sProps}
      />
      <div style={styles.content}>
        <Paragraph header={false} lines={lines} {...sProps} />
        {children}
      </div>
    </div>
  );
};
