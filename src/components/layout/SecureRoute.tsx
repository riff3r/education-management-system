import { FC, Fragment, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CookieService from '../../services/CookieService';

interface IProps {
    children: ReactNode;
}

const SecureRoute: FC<IProps> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!CookieService.getCookie('secure_auth_access')) {
            navigate('/login');
        }
    }, []);

    return <Fragment>{children}</Fragment>;
};

export default SecureRoute;