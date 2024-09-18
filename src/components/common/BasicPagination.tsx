import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem, Pagination, Select, Stack, styled, Typography, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

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

interface BasicPaginationProps {
    list: any[]; // Replace 'any' with the actual type of your list items
}

const BasicPagination: React.FC<BasicPaginationProps> = ({ list }) => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
        setRowsPerPage(parseInt(event.target.value as string, 10));
        setPage(1);
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
                    {[10, 20, 30, 40, 50].map((value) => (
                        <CustomMenuItem key={value} value={value}>
                            {value}
                        </CustomMenuItem>
                    ))}
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