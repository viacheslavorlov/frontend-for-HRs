import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePaths } from 'shared/config/routeConfig/routes';
import { UserRole } from 'entities/User/model/types/user';
import { useMemo } from 'react';
import { getUserRole } from 'entities/User/model/selectors/getUserRole/getUserRole';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRole);
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requredRole) => userRoles?.includes(requredRole));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
