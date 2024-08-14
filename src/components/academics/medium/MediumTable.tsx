import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import BasicPagination from '../../common/BasicPagination';
import EachMediumItem from './EachMediumItem';
import { MediumList } from '../../../helper/constant/coreConstant';

const MediumTable = () => {
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
                        {MediumList.map((medium) => (
                            <EachMediumItem key={medium.id} item={medium} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <BasicPagination list={MediumList} />
        </>
    );
};

export default MediumTable;
