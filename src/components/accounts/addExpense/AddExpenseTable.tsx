import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ACCOUNT_STATEMENT } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachAddExpenseItem from './EachAddExpenseItem';

const AddExpenseTable: React.FC = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align='center'>Amount</TableCell>
                            <TableCell align='center'>Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {ACCOUNT_STATEMENT.map((item) => (
                            <EachAddExpenseItem key={item.id} item={item} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={[]} />
        </>
    );
};

export default AddExpenseTable;
