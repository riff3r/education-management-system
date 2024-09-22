import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';
import AddIncomeTable from './AddIncomeTable';
import AddIncomeModal from './AddIncomeModal';


const AddIncome = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Add Income'}
                description={'Manage all your Income from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        New Income
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

                    <AddIncomeTable />
                </Stack>
            </Stack>

            {modal && <AddIncomeModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default AddIncome;
