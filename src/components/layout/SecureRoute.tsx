import { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CookieService from '../../services/CookieService';

interface IProps {
    children: ReactNode;
}

const SecureRoute: FC<IProps> = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const isAuth = !!CookieService.getCookie('secure_auth_access');
        if (!isAuth) {
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    if (isAuthenticated === null) {
        return null;
    }

    return <Fragment>{children}</Fragment>;
};

export default SecureRoute;