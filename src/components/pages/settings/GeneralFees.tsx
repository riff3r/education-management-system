import { Button, Divider, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import Headline from '../../common/Headline';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

const GeneralFees = () => {
    const [feesType, setFeesType] = useState(1);
    return (
        <>
            <Headline
                title={'General Fees Settings'}
                description={'Manage all your Fees from this dashboard.'}
                // action={
                //     <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                //         New Class
                //     </Button>
                // }
                pb={2}
            />
            <Stack bgcolor={'common.white'} borderRadius={2} mt={2} width={700} mx={'auto'}>
                <Grid container spacing={2} p={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <InputLabel required id='shift-label'>
                            Fee Particulars for
                        </InputLabel>
                        <Select
                            labelId='shift-label'
                            id='shift'
                            value={feesType}
                            onChange={(e) => setFeesType(e.target.value as number)}
                            // input={<OutlinedInput label='Class Teacher' />}
                            // MenuProps={MenuProps}
                            fullWidth
                        >
                            <MenuItem value={1}>All Student</MenuItem>
                            <MenuItem value={2}>Specific Class</MenuItem>
                            <MenuItem value={3}>Specific Student</MenuItem>
                        </Select>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {feesType === 2 && (
                            <>
                                <InputLabel required id='shift-label'>
                                    Fee Particulars for
                                </InputLabel>
                                <Select
                                    labelId='shift-label'
                                    id='shift'
                                    value={feesType}
                                    onChange={(e) => setFeesType(e.target.value as number)}
                                    // input={<OutlinedInput label='Class Teacher' />}
                                    // MenuProps={MenuProps}
                                    fullWidth
                                >
                                    <MenuItem value={1}>All Student</MenuItem>
                                    <MenuItem value={2}>Specific Class</MenuItem>
                                    <MenuItem value={3}>Specific Student</MenuItem>
                                </Select>
                            </>
                        )}

                        {feesType === 3 && <TextField label='Search Student' fullWidth required />}
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'ADMISSION FEE'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'REGISTRATION FEE'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'ART MATERIAL'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'TRANSPORT'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'BOOKS'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'UNIFORM'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'FINE'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>

                    <Grid size={{ xs: 6, md: 8 }}>
                        <TextField value={'OTHERS'} label='Particular Label' fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Grid>
                </Grid>

                <Divider sx={{ width: '100%', mt: 2 }} />

                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={1} p={2}>
                    <Button variant='contained' color='primary' type='submit' /* onClick={handleSubmit} */>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

export default GeneralFees;
