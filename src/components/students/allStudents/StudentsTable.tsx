import React from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { STUDENT_LIST } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachStudentItem, { TStudent } from './EachStudentItem';


const StudentsTable: React.FC = () => {
    return (
        <>
            <TableContainer>
                <Table /* variant={'bordered'} */ sx={{ minWidth: 650 }}>
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
                        {(STUDENT_LIST as TStudent[]).map((student) => (
                            <EachStudentItem key={student.id} item={student} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={[]} />
        </>
    );
};

export default StudentsTable;
