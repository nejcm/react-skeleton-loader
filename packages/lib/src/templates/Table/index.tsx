import React from 'react';
import { BaseSkeletonProps, Skeleton } from '../../Skeleton';
import * as styles from './styles';

export interface TableProps
  extends BaseSkeletonProps,
    React.HTMLAttributes<HTMLTableElement> {
  /**
   * Show table head (th) "true"
   */
  head?: boolean;
  /**
   * Number of rows "3"
   */
  rows?: number;
  /**
   * Number or columns or array of custom elements "4"
   */
  cols?: number | React.ReactNode[];
  /**
   * Array of rotating column widths. "['100%', '100%', '75%', '35%', '50%', '85%']"
   */
  widths?: (string | number)[];
}

export const Table: React.FC<TableProps> = ({
  head = true,
  rows = 3,
  cols = 4,
  widths = ['100%', '100%', '75%', '35%', '50%', '85%'],
  fromColor,
  toColor,
  style,
  className,
  children,
  ...rest
}) => {
  const sProps = { fromColor, toColor };
  const max = widths.length;
  const colIter = Array.isArray(cols) ? cols : Array(cols).fill(0);

  const td = colIter.map((_, j) => (
    <td key={`c-${j}`} style={{ ...styles.tdTh, width: widths[j % max] }}>
      <Skeleton
        width="100%"
        className="rsl-cell"
        {...sProps}
        style={styles.tdCell}
      />
    </td>
  ));

  return (
    <table
      className={`rsl-table ${className || ''}`}
      style={{ ...styles.table, ...style }}
      {...rest}
    >
      {head ? (
        <thead>
          <tr>
            {colIter.map((val, i) => (
              <th key={i} align="left" style={styles.tdTh}>
                {val || (
                  <Skeleton
                    width="100%"
                    className="s-cell"
                    {...sProps}
                    style={styles.thCell}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {Array(rows)
          .fill(0)
          .map((_, i) => (
            <tr key={i}>{td}</tr>
          ))}
        {children}
      </tbody>
    </table>
  );
};

Table.displayName = 'Table';
