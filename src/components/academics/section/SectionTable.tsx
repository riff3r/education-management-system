import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import BasicPagination from '../../common/BasicPagination';
import EachSectionItem from './EachSectionItem';
import { SectionList } from '../../../helper/constant/coreConstant';

const SectionTable = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='center' width={'20%'}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {SectionList.map((section) => (
                            <EachSectionItem key={section.id} item={section} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={SectionList} />
        </>
    );
};

export default SectionTable;
