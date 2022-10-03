import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';
import { Table } from '../templates/Table';

describe('Table', () => {
  test('renders table with props', () => {
    const className = 'custom-element';
    const rows = 2;
    const cols = 5;

    const { container, getByTestId } = render(
      <Table
        className={className}
        data-testid="target"
        head={false}
        rows={rows}
        cols={cols}
      />,
    );
    const element = getByTestId('target');
    expect(element).toHaveClass(className);
    expect(container.querySelectorAll('.rsl-cell')).toHaveLength(rows * cols);
  });

  test('renders table with head nodes', () => {
    const cols = ['Col 1', 'Col 2', <span data-testid="target">Col 3</span>];

    const { getByTestId, getByText } = render(
      <Table head={true} cols={cols} />,
    );
    expect(getByTestId('target')).toBeDefined();
    expect(getByText('Col 2')).toBeDefined();
  });

  test('renders table with children', () => {
    const { getByTestId } = render(
      <Table>
        <tr>
          <td colSpan={3}>
            <Skeleton data-testid="target" height={25} />
          </td>
        </tr>
      </Table>,
    );
    const element = getByTestId('target');
    expect(element).toBeDefined();
  });
});
