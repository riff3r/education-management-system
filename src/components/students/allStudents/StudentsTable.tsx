import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import BasicPagination from '../../common/BasicPagination';
import { MediumList } from '../../../helper/constant/coreConstant';
import EachStudentItem from './EachStudentItem';

const StudentsTable = () => {
    return (
        <>
            <TableContainer>
                <Table variant={"bordered"} sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='center' width={'20%'}>
                                Action
                            </TableCell>
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
