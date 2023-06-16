import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('counter render', () => {
        act(() => {
            componentRender(<Counter />, {
                initialState: { counter: { value: 42 } },
            });
        });
        expect(screen.getByTestId('value')).toBeInTheDocument();
    });

    test('counter increment', () => {
        act(() => {
            componentRender(<Counter />, {
                initialState: { counter: { value: 42 } },
            });
        });
        act(() => {
            fireEvent.click(screen.getByTestId('increment'));
        });
        expect(screen.getByTestId('value')).toHaveTextContent('43');
    });
    test('counter decrement', () => {
        act(() => {
            componentRender(<Counter />, {
                initialState: { counter: { value: 43 } },
            });
        });
        act(() => {
            fireEvent.click(screen.getByTestId('decrement'));
        });
        expect(screen.getByTestId('value')).toHaveTextContent('42');
    });
});
