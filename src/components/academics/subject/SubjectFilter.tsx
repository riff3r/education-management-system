import { useState } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemText, Popover, useTheme } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

const SubjectFilter = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenPopup = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopup = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button
                variant={'outlined'}
                startIcon={<SortIcon />}
                onClick={handleOpenPopup}
                color='inherit'
                sx={{
                    width: '150px',
                    justifyContent: 'start',
                    color: `${theme.palette.action.active}`,
                    border: `1px solid ${theme.palette.action.active}`,
                    '&:hover': {
                        border: `1px solid ${theme.palette.action.active}`,
                    },
                    '&:focus': {
                        background: `transparent`,
                    },
                }}
            >
                All
            </Button>

            {open && (
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClosePopup}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <List component={'div'} sx={{ width: '134px' }}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {} /* handleSelectData('ALL') */}>
                                <ListItemText primary='All' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Popover>
            )}
        </>
    );
};

export default SubjectFilter;
