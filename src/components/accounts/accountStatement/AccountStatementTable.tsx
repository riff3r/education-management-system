import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { ACCOUNT_STATEMENT } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachAccountStatementItem from './EachAccountStatementItem';

const AccountStatementTable: React.FC = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align='center'>Debit</TableCell>
                            <TableCell align='center'>Credit</TableCell>
                            <TableCell align='center'>Net Balance</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {ACCOUNT_STATEMENT.map((item) => (
                            <EachAccountStatementItem key={item.id} item={item} />
                        ))}

                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component='td' scope='row'></TableCell>
                            <TableCell component='td' scope='row'>
                                <Typography variant='subtitle2'>Total</Typography>
                            </TableCell>
                            <TableCell component='td' scope='row' align='center'>
                                <Stack>
                                    <Typography variant='subtitle2' color='error'>
                                        $ 1231523
                                    </Typography>
                                    <Typography variant='subtitle2' color={'error'}>
                                        Expense
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell component='td' scope='row' align='center'>
                                <Stack>
                                    <Typography variant='subtitle2' color='success'>
                                        $ 1231523
                                    </Typography>
                                    <Typography variant='subtitle2' color={'success'}>
                                        Income
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell component='td' scope='row' align='center'>
                                <Stack>
                                    <Typography variant='subtitle2' color='secondary'>
                                        $ 1231523
                                    </Typography>
                                    <Typography variant='subtitle2' color={'secondary'}>
                                        Net Profit
                                    </Typography>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={[]} />
        </>
    );
};

export default AccountStatementTable;
