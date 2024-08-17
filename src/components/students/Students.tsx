import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, MenuItem, OutlinedInput, Select, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import Headline from '../common/Headline';
import { ClassList } from '../../helper/constant/coreConstant';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SortByPopOver from './SortByPopOver';

const Students: React.FC = () => {
    const [search, setSearch] = useState('');

    const handleSearchInput = (input: string) => {
        setSearch(input);
    };

    const [sortBy, setSortBy] = React.useState<HTMLSpanElement | SVGSVGElement | null>(null);

    const handleSortBy = (event: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        setSortBy(event.currentTarget);
    };

    const openSortBy = Boolean(sortBy);
    const sortById = openSortBy ? 'simple-popover' : undefined;

    return (
        <Stack>
            <Headline title={'All Students'} pb={2} />

            <Stack bgcolor={'common.white'} borderRadius={2}>
                <Stack direction={'row'} justifyContent={'space-between'} p={2}>
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

                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Select
                            labelId='shift-label'
                            id='shift'
                            value={10}
                            // onChange={handleChange}
                            input={<OutlinedInput label='Class' />}
                            // MenuProps={MenuProps}
                            sx={{ width: 150 }}
                        >
                            <MenuItem value={10}>Select Class</MenuItem>
                            {ClassList.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.title}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            labelId='shift-label'
                            id='shift'
                            value={10}
                            // onChange={handleChange}
                            input={<OutlinedInput label='Class' />}
                            sx={{ width: 150 }}
                        >
                            <MenuItem value={10}>Student Status</MenuItem>
                            <MenuItem value={1}>Active</MenuItem>
                            <MenuItem value={1}>In Active</MenuItem>
                        </Select>

                        <Button
                            variant={'tonal'}
                            color={'inherit'}
                            startIcon={<SwapVertIcon />}
                            onClick={handleSortBy}
                            sx={{ ':focus': { bgcolor: 'transparent' } }}
                        >
                            Sort By
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

            <SortByPopOver sortById={sortById} openSortBy={openSortBy} sortBy={sortBy} handleClose={() => setSortBy(null)} />
        </Stack>
    );
};

export default Students;
