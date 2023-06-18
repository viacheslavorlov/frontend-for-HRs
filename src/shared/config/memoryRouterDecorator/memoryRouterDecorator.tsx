import { Story } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const MemoryRouterDecorator = (Story: Story) => (
    <MemoryRouter initialEntries={['/articles/1']}>
        <Routes>
            <Route path="articles/1" element={<Story path="articles/:id" />} />
        </Routes>
    </MemoryRouter>
);
