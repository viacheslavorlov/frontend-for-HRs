import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
// eslint-disable-next-line fsd-architecture-checker/layers-imports-order
import { ThemeProvider } from '@/app/providers/TemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={Theme.LIGHT}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
