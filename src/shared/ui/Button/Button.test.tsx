import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { screen, render } from '@testing-library/react';

describe('Button testing', () => {
    test('Button render classic', () => {
        render(<Button theme={ButtonTheme.CLASSIC}>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });
    test('Button render clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });
});
