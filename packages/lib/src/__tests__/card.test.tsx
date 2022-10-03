import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';
import { Card } from '../templates/Card';

describe('Card', () => {
  test('renders card with props', () => {
    const className = 'custom-element';
    const { container, getByTestId } = render(
      <Card
        className={className}
        data-testid="target"
        width="50%"
        maxWidth={300}
        image={false}
        header={false}
        paragraph={true}
      />,
    );
    const element = getByTestId('target');
    expect(element).toHaveStyle({
      width: '50%',
      maxWidth: '300px',
    });
    expect(element).toHaveClass(className);
    expect(container.querySelector('.rsl-image')).toBeNull();
    expect(container.querySelector('.rsl-header')).toBeNull();
    expect(container.querySelector('.rsl-line')).not.toBeNull();
  });

  test('renders card with props', () => {
    const { container } = render(
      <Card
        width="50%"
        maxWidth={250}
        image={true}
        header={true}
        paragraph={false}
      />,
    );
    expect(container.querySelector('.rsl-image')).not.toBeNull();
    expect(container.querySelector('.rsl-header')).not.toBeNull();
    expect(container.querySelector('.rsl-line')).toBeNull();
  });

  test('renders card with children', () => {
    const { getByTestId } = render(
      <Card>
        <Skeleton data-testid="target" height={25} />
      </Card>,
    );
    const element = getByTestId('target');
    expect(element).toBeDefined();
  });
});
