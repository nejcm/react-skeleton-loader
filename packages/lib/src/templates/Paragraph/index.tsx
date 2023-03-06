import React from 'react';
import { BaseSkeletonProps, Skeleton } from '../../Skeleton';
import * as styles from './styles';

export interface ParagraphProps
  extends BaseSkeletonProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show header
   */
  header?: boolean;
  /**
   * Number of pragraph lines "3"
   */
  lines?: number;
  /**
   * Array of rotating line widths. "['100%', '100%', '75%', '35%', '50%', '85%']"
   */
  widths?: (string | number)[];
}

export const Paragraph = ({
  header,
  lines = 3,
  widths = ['100%', '100%', '75%', '35%', '50%', '85%'],
  fromColor,
  toColor,
  className,
  children,
  ...rest
}: ParagraphProps) => {
  const max = widths.length || 0;
  const sProps = { fromColor, toColor };
  return (
    <div className={`rsl-paragraph ${className || ''}`} {...rest}>
      {header && (
        <Skeleton
          className="rsl-header"
          width="50%"
          {...sProps}
          style={styles.header}
        />
      )}
      {lines > 0
        ? [...Array(lines)].map((_, i) => (
            <Skeleton
              key={i}
              className="rsl-line"
              width={widths[i % max] || '100%'}
              style={styles.line}
              {...sProps}
            />
          ))
        : null}
      {children}
    </div>
  );
};
