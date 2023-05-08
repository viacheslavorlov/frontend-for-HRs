import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/TemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={Theme.LIGHT}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
