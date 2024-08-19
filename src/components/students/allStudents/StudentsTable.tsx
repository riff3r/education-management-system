import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import BasicPagination from '../../common/BasicPagination';
import { MediumList } from '../../../helper/constant/coreConstant';
import EachStudentItem from './EachStudentItem';

const StudentsTable = () => {
    return (
        <>
            <TableContainer>
                <Table variant={'bordered'} sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox color='primary' size='small' />
                            </TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Section</TableCell>
                            <TableCell>GR Number</TableCell>
                            <TableCell>Roll Number</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Admission Date</TableCell>
                            <TableCell>Guardian Name</TableCell>
                            <TableCell>Guardian Mobile</TableCell>
                            <TableCell align='center'>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {MediumList.map((medium) => (
                            <EachStudentItem key={medium.id} item={medium} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={MediumList} />
        </>
    );
};

export default StudentsTable;
