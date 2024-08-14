import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { SubjectList } from '../../../helper/constant/coreConstant';
import BasicPagination from '../../common/BasicPagination';
import EachSubjectItem from './EachSubjectItem';

const SubjectTable = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject Name</TableCell>
                            <TableCell>Subject Code</TableCell>
                            <TableCell>Background Color</TableCell>
                            <TableCell>Medium</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell align='center' width={'15%'}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {SubjectList.map((subject) => (
                            <EachSubjectItem key={subject.id} item={subject} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={SubjectList} />
        </>
    );
};

export default SubjectTable;
