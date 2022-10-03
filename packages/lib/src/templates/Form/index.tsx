import React, { Fragment } from 'react';
import { cssMeasure } from '../../helpers';
import { BaseSkeletonProps, Skeleton } from '../../Skeleton';
import * as styles from './styles';

export interface FormProps
  extends BaseSkeletonProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of inputs "3"
   */
  inputs?: number;
  /**
   * Input height
   */
  inputHeight?: string | number;
  /**
   * Show button loader "true"
   */
  button?: boolean;
  /**
   * Show input label loader "true"
   */
  label?: boolean;
  /**
   * Array of rotating input widths. "['100%']"
   */
  widths?: (string | number)[];
}

export const Form: React.FC<FormProps> = ({
  inputs = 3,
  inputHeight = 46,
  button = true,
  label = true,
  widths = ['100%'],
  fromColor,
  toColor,
  className,
  children,
  ...rest
}) => {
  const sProps = { fromColor, toColor };
  const max = widths.length || 0;
  const height = cssMeasure(inputHeight);
  return (
    <div className={`rsl-form ${className || ''}`} {...rest}>
      {[...Array(inputs)].map((_, i) => (
        <Fragment key={i}>
          {label ? (
            <Skeleton className="rsl-label" {...sProps} style={styles.label} />
          ) : null}
          <Skeleton
            className="rsl-input"
            width={widths[i % max] || '100%'}
            style={{ ...styles.input, height }}
            {...sProps}
          />
        </Fragment>
      ))}
      {button ? (
        <Skeleton
          className="rsl-button"
          style={{ ...styles.button, height }}
          {...sProps}
        />
      ) : null}
      {children}
    </div>
  );
};

Form.displayName = 'Form';
