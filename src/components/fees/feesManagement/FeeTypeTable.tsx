import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FEES_TYPES, MediumList } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachFeeTypeItem from './EachFeeTypeItem';

const FeeTypeTable = () => {
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
                        {FEES_TYPES.map((medium) => (
                            <EachFeeTypeItem key={medium.id} item={medium} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={MediumList} />
        </>
    );
};

export default FeeTypeTable;
