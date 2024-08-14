import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const BasicTable = ({ tableHeader }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align='right'>Calories</StyledTableCell>
                        <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component='th' scope='row'>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align='right'>{row.calories}</StyledTableCell>
                            <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                            <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                            <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
