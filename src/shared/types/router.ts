import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line fsd-architecture-checker/layers-imports-order
import { UserRole } from '@/entities/User'; // valid exclude

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
