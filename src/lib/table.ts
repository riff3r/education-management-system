import {} from '@mui/material/TableCell';

declare module '@mui/material/TableCell' {
    interface TableCellPropsVariantOverrides {
        bordered: true;
    }
}
