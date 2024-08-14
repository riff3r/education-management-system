import { Box, Button, Divider, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material';
import { SubjectList } from '../../helper/constant/coreConstant';
import Headline from '../common/Headline';

const StudentAdmission = () => {
    return (
        <Stack>
            <Headline title={'Admission Form'} pb={2} />

            <Stack bgcolor={'common.white'} borderRadius={2}>
                <Box p={2}>
                    <Grid container spacing={2} mb={3}>
                        <Grid item xs={12}>
                            <Typography variant='subtitle1' mb={1}>
                                Academic Information
                            </Typography>
                            <Divider light />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} name='admissionNumber' label='Admission Number' required fullWidth />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabel id='shift-label' required>
                                Select Class
                            </InputLabel>
                            <Select
                                labelId='shift-label'
                                id='shift'
                                multiple
                                value={[]}
                                // onChange={handleChange}
                                input={<OutlinedInput label='Class Teacher' />}
                                // MenuProps={MenuProps}
                                fullWidth
                            >
                                <MenuItem value={1}>asd</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabel id='shift-label' required>
                                Session Year
                            </InputLabel>
                            <Select
                                labelId='shift-label'
                                id='shift'
                                multiple
                                value={[]}
                                // onChange={handleChange}
                                input={<OutlinedInput label='Class Teacher' />}
                                // MenuProps={MenuProps}
                                fullWidth
                            >
                                {SubjectList.map((name) => (
                                    <MenuItem key={name.id} value={name}>
                                        {name.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} type='date' name='admissionDate' label='Admission Date' required fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mb={3}>
                        <Grid item xs={12}>
                            <Typography variant='subtitle1' mb={1}>
                                Student Information
                            </Typography>
                            <Divider light />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} name='firstName' label='First Name' required fullWidth />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} name='lastName' label='Last Name' required fullWidth />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} type='date' name='dateOfBirth' label='Date of Birth' required fullWidth />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabel id='shift-label' required>
                                Gender
                            </InputLabel>
                            <Select
                                labelId='shift-label'
                                id='shift'
                                multiple
                                value={[]}
                                // onChange={handleChange}
                                input={<OutlinedInput label='Class Teacher' />}
                                // MenuProps={MenuProps}
                                fullWidth
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={1}>Female</MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField value={''} name='fatherName' label='Father Name' required fullWidth />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} name='motherName' label='Mother Name' required fullWidth />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField value={''} type='file' name='studentPhoto' label='Student Photo' fullWidth />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField value={''} name='previousInstitution' label='Previous Institution' fullWidth />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField multiline rows={2} value={''} name='presentAddress' label='Present Address' fullWidth required />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField multiline rows={2} value={''} name='permanentAddress' label='Permanent Address' fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mb={3}>
                        <Grid item xs={12}>
                            <Typography variant='subtitle1' mb={1}>
                                Guardian Information
                            </Typography>
                            <Divider light />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} name='guardianFirstName ' label='Guardian First Name' required fullWidth />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} type='text' name='guardianLastName' label='Guardian Last Name' required fullWidth />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField
                                value={''}
                                type='number'
                                name='guardianMobileNumber'
                                label='Guardian Mobile Number'
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField value={''} type='email' name='guardianEmail' label='Guardian Email' fullWidth />
                        </Grid>
                    </Grid>
                </Box>

                <Divider />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={1} p={2}>
                    <Button variant='tonal' color='inherit' /* onClick={onClose} */>
                        Reset
                    </Button>
                    <Button variant='contained' color='primary' /* onClick={handleSubmit} */>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default StudentAdmission;
