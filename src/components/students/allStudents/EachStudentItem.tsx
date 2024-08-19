import { Checkbox, IconButton, Stack, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import DeleteConfirmationModal from '../../common/modals/DeleteConfirmationModal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddOrEditMediumModal from '../../academics/medium/AddOrEditMediumModal';
import StudentsPopover from './StudentsPopover';
const EachStudentItem = ({ item }) => {
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleConfirmDelete = () => {
        alert(item.name);
        setDeleteModal(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <TableRow>
                <TableCell component='td' scope='row'>
                    <Checkbox color='primary' size='small' />
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.name}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.class}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.Section}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.grNumber}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.rollNumber}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.gender}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.admissionDate}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.guardianName}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.guardianMobile}
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

                    {modal && <AddOrEditMediumModal open={modal} onClose={() => setModal(false)} edit={item} />}

                    {deleteModal && (
                        <DeleteConfirmationModal
                            title={'Are you sure, You want to delete this medium?'}
                            open={deleteModal}
                            onClose={() => setDeleteModal(false)}
                            onConfirm={handleConfirmDelete}
                        />
                    )}

                    {open && <StudentsPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} medium={item} />}
                </TableCell>
            </TableRow>
        </>
    );
};

export default EachStudentItem;
