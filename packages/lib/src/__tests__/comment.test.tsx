import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';
import { Comment } from '../templates/Comment';

describe('Comment', () => {
  test('renders comment with props', () => {
    const className = 'custom-element';
    const { container, getByTestId } = render(
      <Comment
        className={className}
        data-testid="target"
        avatarSize={75}
        avatarRounded={false}
        lines={5}
      />,
    );
    const element = getByTestId('target');
    const avatar = container.querySelector('.rsl-avatar');
    expect(element).toHaveClass(className);
    expect(avatar).not.toBeNull();
    expect(avatar).toHaveStyle({
      width: '75px',
      height: '75px',
    });
    expect(container.querySelectorAll('.rsl-line')).toHaveLength(5);
  });

  test('renders comment with children', () => {
    const { getByTestId } = render(
      <Comment>
        <Skeleton data-testid="target" height={25} />
      </Comment>,
    );
    const element = getByTestId('target');
    expect(element).toBeDefined();
  });
});
