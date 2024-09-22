import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';

import AddOrEditExpenseModal from './AddOrEditExpenseModal';
import AddExpenseTable from './AddExpenseTable';

const AddExpense = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Add Expense'}
                description={'Manage all your Expense from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        New Expense
                    </Button>
                }
                pb={2}
            />
            <Stack bgcolor={'common.white'} borderRadius={2}>
                <Stack spacing={2} p={2}>
                    <TextField
                        value={search}
                        name='search'
                        placeholder='Search here'
                        onChange={handleSearchInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ maxWidth: 300 }}
                    />

                    <AddExpenseTable />
                </Stack>
            </Stack>

            {modal && <AddOrEditExpenseModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default AddExpense;
