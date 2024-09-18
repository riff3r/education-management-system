import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';
import MediumTable from './MediumTable';
import AddOrEditMediumModal from './AddOrEditMediumModal';

const Medium = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Medium'}
                description={'Manage all your medium from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        New Medium
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

                    <MediumTable />
                </Stack>
            </Stack>

            {modal && <AddOrEditMediumModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default Medium;
