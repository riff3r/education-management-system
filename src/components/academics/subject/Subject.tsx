import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';
import AddOrEditSubjectModal from './AddOrEditSubjectModal';
import SubjectFilter from './SubjectFilter';
import SubjectTable from './SubjectTable';

const Subject = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Subjects'}
                description={'Manage all your Subjects from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        New Subjects
                    </Button>
                }
                pb={2}
            />
            <Stack bgcolor={'common.white'} borderRadius={2}>
                <Divider light />

                <Stack spacing={2} p={2}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
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

                        <SubjectFilter />
                    </Stack>

                    <SubjectTable />
                </Stack>
            </Stack>

            {modal && <AddOrEditSubjectModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default Subject;
