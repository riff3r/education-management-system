import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CHART_OF_ACCOUNT } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachChartAccountItem from './EachChartAccountItem';

const ChartOfAccountsTable: React.FC = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align='center'>Type</TableCell>
                            <TableCell align='center' width={'20%'}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {CHART_OF_ACCOUNT.map((item) => (
                            <EachChartAccountItem key={item.id} item={item} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={[]} />
        </>
    );
};

export default ChartOfAccountsTable;
