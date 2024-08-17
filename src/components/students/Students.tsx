import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import Headline from '../common/Headline';

const Students: React.FC = () => {
    const [search, setSearch] = useState('');

    const handleSearchInput = (input: string) => {
        setSearch(input);
    };
    return (
        <Stack>
            <Headline title={'All Students'} pb={2} />
            
            <Stack bgcolor={'common.white'} borderRadius={2}>
                <Stack>
                <TextField
                        value={search}
                        name='search'
                        placeholder='Search here'
                        onChange={(event) => handleSearchInput(event.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ maxWidth: 300 }}
                    />
                </Stack>

            </Stack>
        </Stack>
    );
};

export default Students;