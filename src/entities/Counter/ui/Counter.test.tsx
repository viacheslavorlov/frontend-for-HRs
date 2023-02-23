import { ComponentRender } from 'shared/config/tests/componentRender/ComponentRender';
import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
    test('counter render', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 42 } },
        });
        expect(screen.getByTestId('value')).toBeInTheDocument();
    });

    test('counter increment', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 42 } },
        });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value')).toHaveTextContent('43');
    });
    test('counter decrement', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 43 } },
        });
        fireEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value')).toHaveTextContent('42');
    });
});
