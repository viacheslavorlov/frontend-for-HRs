import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { screen, render } from '@testing-library/react';

describe('Button testing', () => {
    test('Button render', () => {
        render(<Button theme={ThemeButton.CLASSIC}>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });
});
