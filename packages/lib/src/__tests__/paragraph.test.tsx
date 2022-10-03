import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';
import { Paragraph } from '../templates/Paragraph';

describe('Paragraph', () => {
  test('renders paragraph with props', () => {
    const className = 'custom-element';
    const id = 'id';

    const { container, getByTestId } = render(
      <Paragraph
        className={className}
        id={id}
        data-testid="target"
        header={false}
      />,
    );
    const element = getByTestId('target');
    expect(element).toHaveClass(className);
    expect(element).toHaveAttribute('id', id);
    expect(container.querySelector('.rsl-header')).toBeNull();
  });

  test('renders paragraph with different widths', () => {
    const lines = 4;
    const widths = ['5rem', 100, '50%', '200px'];

    const { container } = render(<Paragraph lines={lines} widths={widths} />);
    const foundLines = container.querySelectorAll('.rsl-line');
    expect(foundLines).toHaveLength(lines);
    expect(foundLines[2]).toHaveStyle({ width: widths[2] });
  });

  test('renders paragraph with empty widths should be always 100%', () => {
    const lines = 2;
    const widths: number[] = [];

    const { container } = render(<Paragraph lines={lines} widths={widths} />);
    const line = container.querySelector('.rsl-line');
    expect(line).toHaveStyle({ width: '100%' });
  });

  test('renders paragraph witout lines', () => {
    const lines = 0;
    const widths: number[] = [];

    const { container } = render(<Paragraph lines={lines} widths={widths} />);
    const line = container.querySelector('.rsl-line');
    expect(line).toBeNull();
  });

  test('renders paragraph with children', () => {
    const { getByTestId } = render(
      <Paragraph>
        <Skeleton data-testid="target" height={25} />
      </Paragraph>,
    );
    const element = getByTestId('target');
    expect(element).toBeDefined();
  });
});
