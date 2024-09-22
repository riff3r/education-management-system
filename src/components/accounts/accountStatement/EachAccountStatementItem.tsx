import { TableCell, TableRow } from '@mui/material';
import React from 'react';

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
                    {item.type === 'expense' && item.amount}
                </TableCell>
                <TableCell component='td' scope='row' align='center'>
                    {item.type === 'income' && item.amount}
                </TableCell>
                <TableCell component='td' scope='row' align='center'>
                    {item.netAmount}
                </TableCell>
            </TableRow>
        </>
    );
};

export default EachAccountStatementItem;
