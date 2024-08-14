import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Stack, TableCell, TableRow } from '@mui/material';

const EachClassSubjectItem = ({ item, onSelectItem, onDelete, onActionPopover, onSelectPopoverItem }) => {
    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope='row'>{item.title}</TableCell>
                <TableCell scope='row'>{item.subjectCode}</TableCell>
                <TableCell scope='row'>{item.backgroundColor}</TableCell>
                <TableCell scope='row'>{item.medium}</TableCell>
                <TableCell scope='row'>
                    <img width={50} src={item.image} />
                </TableCell>
                <TableCell scope='row'>{item.type}</TableCell>
                <TableCell scope='row'>{item.type}</TableCell>

                <TableCell align='center'>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                        <IconButton
                            color='inherit'
                            onClick={(e) => {
                                onActionPopover(e);
                                onSelectPopoverItem(item);
                            }}
                        >
                            <MoreVertIcon />
                        </IconButton>

                        <IconButton color='inherit' size='small' onClick={() => onSelectItem(item)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color='error' size='small' onClick={() => onDelete(item)}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                </TableCell>
            </TableRow>
        </>
    );
};

export default EachClassSubjectItem;