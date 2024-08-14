import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { SubjectList } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachClassSubjectItem from './EachClassSubjectItem';
import ClassesWithSubjectPopover from './ClassesWithSubjectPopover';
import DeleteConfirmationModal from '../../common/modals/DeleteConfirmationModal';
import { useState } from 'react';
import AddOrEditClassesWithSubjectModal from './AddOrEditClassesWithSubjectModal';

const ClassesWithSubjectTable = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedPopoverItem, setSelectedPopoverItem] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleConfirmDelete = () => {
        alert(deleteModal.title);
        setDeleteModal(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    console.log(selectedItem);
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Class Name</TableCell>
                            <TableCell>Shift</TableCell>
                            <TableCell>Semester</TableCell>
                            <TableCell>Medium</TableCell>
                            <TableCell>Section</TableCell>
                            <TableCell>Core Subjects</TableCell>
                            <TableCell>Elective Subjects</TableCell>
                            <TableCell align='center' width={'15%'}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {SubjectList.map((subject) => (
                            <EachClassSubjectItem
                                key={subject.id}
                                item={subject}
                                onSelectItem={setSelectedItem}
                                onSelectPopoverItem={setSelectedPopoverItem}
                                onActionPopover={handleClick}
                                onDelete={setDeleteModal}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={SubjectList} />

            {selectedItem && (
                <AddOrEditClassesWithSubjectModal open={selectedItem} onClose={() => setSelectedItem(null)} edit={selectedItem} />
            )}

            {deleteModal && (
                <DeleteConfirmationModal
                    title={'Are you sure, You want to delete this Section?'}
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                    onConfirm={handleConfirmDelete}
                />
            )}

            {open && <ClassesWithSubjectPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} item={selectedPopoverItem} />}
        </>
    );
};

export default ClassesWithSubjectTable;
