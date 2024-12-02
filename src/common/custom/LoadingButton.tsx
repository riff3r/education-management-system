import { FC, ReactNode } from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface IProps extends ButtonProps {
    children: ReactNode;
    loading?: boolean;
}

const LoadingButton: FC<IProps> = ({ children, loading, ...rest }) => {
    return (
        <Button {...rest} disabled={loading || rest.disabled}>
            {loading ? <CircularProgress size={24} color="inherit" /> : children}
        </Button>
    );
};

export default LoadingButton;