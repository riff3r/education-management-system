import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ClassList } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachClassItem from './EachClassItem';

const ClassTable = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Shift</TableCell>
                            <TableCell>Monthly Fee</TableCell>
                            <TableCell>Section</TableCell>
                            <TableCell align='center' width={'20%'}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {ClassList.map((medium) => (
                            <EachClassItem key={medium.id} item={medium} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={[]} />
        </>
    );
};

export default ClassTable;
