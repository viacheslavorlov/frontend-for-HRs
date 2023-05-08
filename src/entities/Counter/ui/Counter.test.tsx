import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('counter render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 42 } },
        });
        expect(screen.getByTestId('value')).toBeInTheDocument();
    });

    test('counter increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 42 } },
        });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value')).toHaveTextContent('43');
    });
    test('counter decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 43 } },
        });
        fireEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value')).toHaveTextContent('42');
    });
});
