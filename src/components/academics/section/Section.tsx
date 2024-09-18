import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';
import SectionTable from './SectionTable';
import AddOrEditSectionModal from './AddOrEditSectionModal';

const Section = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Section'}
                description={'Manage all your Section from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        New Section
                    </Button>
                }
                mb={2}
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

                    <SectionTable />
                </Stack>
            </Stack>

            {modal && <AddOrEditSectionModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default Section;
