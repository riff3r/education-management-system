import React from 'react';
import { Stack, TableCell, TableRow, Typography } from '@mui/material';

interface Props {
    item: IAccountStatement;
}
const EachAccountStatementItem: React.FC<Props> = ({ item }) => {
    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='td' scope='row'>
                    {item.date}
                </TableCell>
                <TableCell component='td' scope='row'>
                    {item.title}
                </TableCell>
                <TableCell component='td' scope='row' align='center'>
                    {item.type === 'expense' && (
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={.5}>
                            <Typography color='error' component={'span'}>
                                ৳
                            </Typography>
                            <span>{item.amount}</span>
                        </Stack>
                    )}
                </TableCell>
                <TableCell component='td' scope='row' align='center'>
                    {item.type === 'income' && (
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={.5}>
                            <Typography color='success' component={'span'}>
                                ৳
                            </Typography>
                            <span>{item.amount}</span>
                        </Stack>
                    )}
                </TableCell>
                <TableCell component='td' scope='row' align='center'>
                    ৳ {item.netAmount}
                </TableCell>
            </TableRow>
        </>
    );
};

export default EachAccountStatementItem;
