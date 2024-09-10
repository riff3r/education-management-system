import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Headline from '../../common/Headline';
import AddOrEditFeesTypeModal from './AddOrEditFeesTypeModal';
import FeeTypeTable from './FeeTypeTable';

const FeesTypes = () => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Headline
                title={'Fees Types'}
                description={'Manage all your Fees Types from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                        New Fee Type
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

                    <FeeTypeTable />
                </Stack>
            </Stack>

            {modal && <AddOrEditFeesTypeModal open={modal} onClose={() => setModal(false)} />}
        </>
    );
};

export default FeesTypes;
