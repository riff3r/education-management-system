import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';
import ClassTable from './ClassTable';
import AddOrEditClassModal from './AddOrEditClassModal';

const Class = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Class'}
                description={'Manage all your Class from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        New Class
                    </Button>
                }
                pb={2}
            />
            <Stack bgcolor={'common.white'} borderRadius={2}>
                <Divider light />

                <Stack spacing={2} p={2}>
                    <TextField
                        value={search}
                        name='search'
                        placeholder='Search'
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

                    <ClassTable />
                </Stack>
            </Stack>

            {modal && <AddOrEditClassModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default Class;
