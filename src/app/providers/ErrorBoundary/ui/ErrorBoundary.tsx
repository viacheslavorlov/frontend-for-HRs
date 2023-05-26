import {
    Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import { PageError } from '@/widgets/PageError';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';

export interface ErrorBoundaryProps {
    children: ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        // eslint-disable-next-line no-console
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={<LoadingSpinner />}>
                    <PageError />
                </Suspense>
            );
        }

        return (
            <div>
                {children}
            </div>
        );
    }
}
export default ErrorBoundary;
