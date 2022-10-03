import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';

describe('Skeleton', () => {
  it('renders skeleton', () => {
    const { getByText } = render(
      <Skeleton>
        <span>Hello</span>
      </Skeleton>,
    );
    const element = getByText(/Hello/i);
    expect(element).toBeInTheDocument();
  });

  it('renders skeleton with props', () => {
    const { getByTestId } = render(<Skeleton data-testid="target" />);
    const element = getByTestId('target');
    expect(element).toHaveClass('rsl');
  });

  it('renders skeleton rectengle with props', () => {
    const { getByTestId } = render(
      <Skeleton
        data-testid="target"
        width={100}
        maxHeight={200}
        minHeight={'3rem'}
      />,
    );
    const element = getByTestId('target');
    expect(element).toHaveStyle({
      width: '100px',
      maxHeight: '200px',
      minHeight: '3rem',
    });
  });

  it('renders rounded skeleton with props', () => {
    const { getByTestId } = render(
      <Skeleton data-testid="target" rounded width={50} height={50} />,
    );
    const element = getByTestId('target');
    expect(element).toBeDefined();
    expect(element).toHaveStyle({
      width: '50px',
      height: '50px',
    });
  });
});
