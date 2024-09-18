import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Stack, TableCell, TableRow } from '@mui/material';
import React from 'react';

interface EachClassSubjectItemProps {
    item: IClassWithSubject;
    onSelectItem: (item: IClassWithSubject) => void;
    onDelete: (item: IClassWithSubject) => void;
    onActionPopover: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onSelectPopoverItem: (item: IClassWithSubject) => void;
}

const EachClassSubjectItem: React.FC<EachClassSubjectItemProps> = ({
    item,
    onSelectItem,
    onDelete,
    onActionPopover,
    onSelectPopoverItem,
}) => {
    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.subjectCode}</TableCell>
                <TableCell>{item.backgroundColor}</TableCell>
                <TableCell>{item.medium}</TableCell>
                <TableCell>
                    <img width={50} src={item.image} alt={item.title} />
                </TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell align="center">
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                        <IconButton
                            color="inherit"
                            onClick={(e) => {
                                onActionPopover(e);
                                onSelectPopoverItem(item);
                            }}
                        >
                            <MoreVertIcon />
                        </IconButton>

                        <IconButton color="inherit" size="small" onClick={() => onSelectItem(item)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="error" size="small" onClick={() => onDelete(item)}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                </TableCell>
            </TableRow>
        </>
    );
};

export default EachClassSubjectItem;
