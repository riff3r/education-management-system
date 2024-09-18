import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { SubjectList } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachClassSubjectItem from './EachClassSubjectItem';
import ClassesWithSubjectPopover from './ClassesWithSubjectPopover';
import DeleteConfirmationModal from '../../common/modals/DeleteConfirmationModal';
import { useState } from 'react';
import AddOrEditClassesWithSubjectModal from './AddOrEditClassesWithSubjectModal';

const ClassesWithSubjectTable = () => {
    const [selectedItem, setSelectedItem] = useState<IClassWithSubject | null>(null);
    const [selectedPopoverItem, setSelectedPopoverItem] = useState<IClassWithSubject | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean | IClassWithSubject[]>(false);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDelete = (item: IClassWithSubject) => {
        setDeleteModal([item]); // Here we set the deleteModal state to the array of items to delete
    };

    const handleConfirmDelete = () => {
        if (deleteModal && typeof deleteModal !== 'boolean') {
            alert(deleteModal[0]?.title); // Assuming deleteModal contains an array of items
        }
        setDeleteModal(false); // Close the modal after confirmation
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                            <TableCell align="center" width={'15%'}>
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
                                onDelete={handleDelete} // Use handleDelete here
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={SubjectList} />

            {selectedItem && (
                <AddOrEditClassesWithSubjectModal open={!!selectedItem} onClose={() => setSelectedItem(null)} edit={selectedItem} />
            )}

            {deleteModal && (
                <DeleteConfirmationModal
                    title="Are you sure, You want to delete this Section?"
                    open={!!deleteModal}
                    onClose={() => setDeleteModal(false)}
                    onConfirm={handleConfirmDelete}
                />
            )}

            {open && (
                <ClassesWithSubjectPopover
                    id={id as string}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    item={selectedPopoverItem as IClassWithSubject}
                />
            )}
        </>
    );
};

export default ClassesWithSubjectTable;
