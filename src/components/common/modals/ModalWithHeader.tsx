import React from 'react';
import { Divider, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
};

interface IProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: any;
    footer?: any;
    width?: number;
}

const ModalWithHeader: React.FC<IProps> = ({ open, onClose, title = 'Text in a modal', children, footer, ...rest }) => {
    return (
        <div>
            <Modal open={open} onClose={onClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
                <Box sx={style} {...rest}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2}>
                        <Typography id='modal-modal-title' variant='h6' component='h2'>
                            {title}
                        </Typography>

                        <IconButton size='small' color='error' onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>

                    <Divider />

                    {children}

                    {footer}
                </Box>
            </Modal>
        </div>
    );
};

export default ModalWithHeader;
