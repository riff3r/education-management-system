import { IconButton, Stack, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIncomeModal from './AddIncomeModal';
import DeleteConfirmationModal from '../../common/modals/DeleteConfirmationModal';
import AddIncomePopover from './AddIncomePopover';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    item: IAccountStatement;
}
const EachAddIncomeItem: React.FC<Props> = ({ item }) => {
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleConfirmDelete = () => {
        alert(item.title);
        setDeleteModal(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `simple-popover-${item.id}` : undefined;

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='td' scope='row'>
                    {item.date}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.title}
                </TableCell>
                <TableCell component='td' scope='row' align='center'>
                    {item.amount}
                </TableCell>
                <TableCell align='center'>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                        <IconButton color='inherit' size='small' onClick={() => setModal(true)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color='error' size='small' onClick={() => setDeleteModal(true)}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>

                    {modal && <AddIncomeModal open={modal} onClose={() => setModal(false)} edit={item} />}

                    {deleteModal && (
                        <DeleteConfirmationModal
                            title={'Are you sure, You want to delete this income?'}
                            open={deleteModal}
                            onClose={() => setDeleteModal(false)}
                            onConfirm={handleConfirmDelete}
                        />
                    )}

                    {open && <AddIncomePopover id={id as string} open={open} anchorEl={anchorEl} onClose={handleClose} item={item} />}
                </TableCell>
            </TableRow>
        </>
    );
};

export default EachAddIncomeItem;
