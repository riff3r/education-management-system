import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FEES_TYPES } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachFeeTypeItem, { FeeTypeItem } from './EachFeeTypeItem';

const FeeTypeTable: React.FC = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align='center' width={'20%'}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {(FEES_TYPES as FeeTypeItem[]).map((feeType) => (
                            <EachFeeTypeItem key={feeType.id} item={feeType} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={[]} />
        </>
    );
};

export default FeeTypeTable;