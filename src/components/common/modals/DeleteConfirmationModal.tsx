import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Stack, Typography } from '@mui/material';
import { DeleteConfirmIcon } from '../../../assets/icons/Icons';
import React from 'react';

interface IProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
}

const DeleteConfirmationModal: React.FC<IProps> = ({ open, onClose, onConfirm, title, description }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle align='center' sx={{ p: 3, pb: 1 }}>
                <DeleteConfirmIcon />
            </DialogTitle>
            <DialogContent sx={{ p: 3, width: 280 }}>
                <Stack textAlign={'center'} spacing={1}>
                    <Typography variant='h5'>{title || 'Are you sure, You want to delete this campaign?'}</Typography>
                    <Typography variant='body2' color={'text.secondary'}>
                        {description || 'Are you sure you want to delete this item? This action cannot be undone.'}
                    </Typography>
                </Stack>
            </DialogContent>

            <Divider />
            <DialogActions sx={{ p: 3 }}>
                <Button onClick={onClose} variant='tonal' color='inherit' fullWidth>
                    Cancel
                </Button>
                <Button onClick={onConfirm} color='error' fullWidth>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirmationModal;
