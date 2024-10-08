import { List, ListItemButton, ListItemIcon, ListItemText, Popover, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import DeleteConfirmationModal from '../../common/modals/DeleteConfirmationModal';
import AddOrEditFeesTypeModal from './AddOrEditFeesTypeModal';

type Props = {
    id: string;
    open: boolean;
    onClose: () => void;
    anchorEl: HTMLButtonElement | null;
    item: {
        title: string;
        type: string;
        amount: number;
        status: boolean;
    };
};

const FeeTypePopover: React.FC<Props> = ({ id, open, onClose, anchorEl, item }) => {
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleEdit = () => {
        setModal(true);
    };

    const handleOpenDelete = () => {
        setDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        alert(item.title);
        setDeleteModal(false);
        onClose();
    };

    return (
        <>
            <Popover
                id={id}
                open={open}
                sx={{ marginTop: '10px' }}
                anchorEl={anchorEl}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                elevation={6}
            >
                <List component='div' aria-label='main mailbox folders' dense>
                    <ListItemButton onClick={handleEdit}>
                        <ListItemIcon>
                            <EditIcon sx={{ fontSize: '20px' }} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography color={'text.primary'} variant='body2' fontWeight={400}>
                                Edit
                            </Typography>
                        </ListItemText>
                    </ListItemButton>

                    <ListItemButton onClick={handleOpenDelete}>
                        <ListItemIcon>
                            <DeleteIcon sx={{ fontSize: '20px' }} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography color={'text.primary'} variant='body2' fontWeight={400}>
                                Delete
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Popover>

            {modal && (
                <AddOrEditFeesTypeModal
                    open={modal}
                    onClose={() => {
                        setModal(false);
                        onClose();
                    }}
                    edit={item}
                />
            )}

            {deleteModal && (
                <DeleteConfirmationModal
                    title={'Are you sure, You want to delete this fee type?'}
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </>
    );
};

export default FeeTypePopover;
