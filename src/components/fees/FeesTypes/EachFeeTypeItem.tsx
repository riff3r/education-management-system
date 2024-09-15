import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Stack, TableCell, TableRow } from '@mui/material';
import DeleteConfirmationModal from '../../common/modals/DeleteConfirmationModal';
import AddOrEditFeesTypeModal from './AddOrEditFeesTypeModal';
import FeeTypePopover from './FeeTypePopover';

type Props = {
    item: {
        id: number;
        title: string;
    };
};
const EachFeeTypeItem: React.FC<Props> = ({ item }) => {
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleConfirmDelete = () => {
        alert(item.title);
        setDeleteModal(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='td' scope='row'>
                    {item.title}
                </TableCell>

                <TableCell align='center'>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                        <IconButton color='inherit' onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>

                        <IconButton color='inherit' size='small' onClick={() => setModal(true)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color='error' size='small' onClick={() => setDeleteModal(true)}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>

                    {modal && <AddOrEditFeesTypeModal open={modal} onClose={() => setModal(false)} edit={item} />}

                    {deleteModal && (
                        <DeleteConfirmationModal
                            title={'Are you sure, You want to delete this class?'}
                            open={deleteModal}
                            onClose={() => setDeleteModal(false)}
                            onConfirm={handleConfirmDelete}
                        />
                    )}

                    {open && <FeeTypePopover id={id as string} open={open} anchorEl={anchorEl} onClose={handleClose} item={item} />}
                </TableCell>
            </TableRow>
        </>
    );
};

export default EachFeeTypeItem;