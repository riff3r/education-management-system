import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import BasicPagination from '../../common/BasicPagination';
import { ClassList, MediumList } from '../../../helper/constant/coreConstant';
import EachFeeTypeItem from './EachFeeTypeItem';

const FeeTypeTable = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell align='center' width={'20%'}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {ClassList.map((medium) => (
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
