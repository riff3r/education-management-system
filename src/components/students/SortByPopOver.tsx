import { IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Popover } from '@mui/material';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

type IProps = {
    sortById: string | undefined;
    openSortBy: boolean;
    sortBy: HTMLSpanElement | SVGSVGElement | null;
    handleClose: () => void;
};
const SortByPopOver = ({ sortById, openSortBy, sortBy, handleClose }: IProps) => {
    const [sort, setSort] = useState({
        fieldName: '',
        sort: '',
        value: '',
    });

    const handleSort = (fieldName: string, sort: 'ASC' | 'DESC', value: string) => {
        setSort({ fieldName, sort, value });
        handleClose();
    };

    return (
        <Popover
            id={sortById}
            open={openSortBy}
            anchorEl={sortBy}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            slotProps={{
                paper: {
                    style: { borderRadius: '12px' },
                },
            }}
            sx={{ mt: 1 }}
        >
            <Paper sx={{ width: 'fit-content', p: 1, minWidth: '211px' }}>
                <List
                    // sx={{ bgcolor: theme.palette.grey[50], borderRadius: 1.5 }}
                    component='div'
                    aria-label='main mailbox folders'
                    disablePadding
                    dense
                >
                    <ListItem
                        secondaryAction={
                            sort.value === 'A_TO_Z' && sort.sort === 'ASC' && (
                                <IconButton edge='end' aria-label='comments'>
                                    <CheckIcon color='primary' sx={{ fontSize: 18 }} />
                                </IconButton>
                            )
                        }
                        disablePadding
                        onClick={() => handleSort('first_name', 'ASC', 'A_TO_Z')}
                    >
                        <ListItemButton>
                            <ListItemText primary='A to Z (ascending)' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        secondaryAction={
                            sort.value === 'A_TO_Z' && sort.sort === 'DESC' && (
                                <IconButton edge='end' aria-label='comments'>
                                    <CheckIcon color='primary' sx={{ fontSize: 18 }} />
                                </IconButton>
                            )
                        }
                        disablePadding
                        onClick={() => handleSort('first_name', 'DESC', 'A_TO_Z')}
                    >
                        <ListItemButton>
                            <ListItemText primary='A to Z (descending)' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem
                        secondaryAction={
                            sort.value === 'DATE_ADDED' && sort.sort === 'ASC' && (
                                <IconButton edge='end' aria-label='comments'>
                                    <CheckIcon color='primary' sx={{ fontSize: 18 }} />
                                </IconButton>
                            )
                        }
                        disablePadding
                        onClick={() => handleSort('created_at', 'ASC', 'DATE_ADDED')}
                    >
                        <ListItemButton>
                            <ListItemText primary='Date Added (ascending)' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        secondaryAction={
                            sort.value === 'DATE_ADDED' && sort.sort === 'DESC' && (
                                <IconButton edge='end' aria-label='comments'>
                                    <CheckIcon color='primary' sx={{ fontSize: 18 }} />
                                </IconButton>
                            )
                        }
                        disablePadding
                        onClick={() => handleSort('created_at', 'DESC', 'DATE_ADDED')}
                    >
                        <ListItemButton>
                            <ListItemText primary='Date Added (descending)' />
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem
                        secondaryAction={
                            sort === 'DATE_MODIFIED' && (
                                <IconButton edge='end' aria-label='comments'>
                                    <CheckIcon color='primary' sx={{ fontSize: 18 }} />
                                </IconButton>
                            )
                        }
                        disablePadding
                        onClick={() => handleSort('updated_at', 'ASC', 'DATE_MODIFIED')}
                    >
                        <ListItemButton>
                            <ListItemText primary='Date Modified' />
                        </ListItemButton>
                    </ListItem> */}
                </List>
            </Paper>
        </Popover>
    );
};
export default SortByPopOver;
