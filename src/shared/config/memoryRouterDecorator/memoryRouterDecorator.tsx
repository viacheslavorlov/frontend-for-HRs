import { Story } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const MemoryRouterDecorator = (Story: Story) => (
    <MemoryRouter>
        <Routes>
            <Route path="profile/:1" element={<Story />} />
        </Routes>
    </MemoryRouter>
);
