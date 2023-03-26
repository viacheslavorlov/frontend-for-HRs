import { Story } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const MemoryRouterDecorator = (Story: Story) => (
    <MemoryRouter>
        <Routes>
            <Route path="article:1" element={<Story />} />
        </Routes>
    </MemoryRouter>
);
