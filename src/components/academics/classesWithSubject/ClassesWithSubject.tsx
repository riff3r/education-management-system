import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';
import ClassesWithSubjectTable from './ClassesWithSubjectTable';
import AddOrEditClassesWithSubjectModal from './AddOrEditClassesWithSubjectModal';

const ClassesWithSubject = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Classes With Subject'}
                description={'Manage all your Classes With Subject'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        Assign Subjects
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

                    <ClassesWithSubjectTable />
                </Stack>
            </Stack>

            {modal && <AddOrEditClassesWithSubjectModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default ClassesWithSubject;
