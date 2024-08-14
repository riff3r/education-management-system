import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem, Pagination, Select, Stack, styled, Typography } from '@mui/material';
import { useState } from 'react';

const StyledPagination = styled(Pagination)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    width: 'unset',
    boxShadow: 'none',
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 600,
    '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.palette.primary.light,
    },
    ':hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));

const MenuProps = {
    PaperProps: {
        style: {
            // paddingLeft: '8px',
        },
    },
};

const BasicPagination = ({ list }) => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={1}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography variant='body2' color={'text.secondary'}>
                    Rows Per Page:
                </Typography>
                <Select
                    value={rowsPerPage}
                    sx={{ width: '86px !important' }}
                    onChange={handleChangeRowsPerPage}
                    IconComponent={ExpandMoreIcon}
                    MenuProps={MenuProps}
                >
                    <CustomMenuItem color='text.primary' value={10}>
                        10
                    </CustomMenuItem>
                    <CustomMenuItem color='text.primary' value={20}>
                        20
                    </CustomMenuItem>
                    <CustomMenuItem color='text.primary' value={30}>
                        30
                    </CustomMenuItem>
                    <CustomMenuItem color='text.primary' value={40}>
                        40
                    </CustomMenuItem>
                    <CustomMenuItem color='text.primary' value={50}>
                        50
                    </CustomMenuItem>
                </Select>
            </Stack>
            <StyledPagination
                count={Math.ceil(list.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                variant={'outlined'}
                shape={'rounded'}
            />
        </Stack>
    );
};

export default BasicPagination;
