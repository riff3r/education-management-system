import { Box, Button, Divider, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material';
import { ClassList, SectionList } from '../../helper/constant/coreConstant';
import Headline from '../common/Headline';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    admissionNumber: string;
    class: string;
    sessionYear: string;
    classSection: string;
    admissionDate: string;
};

const StudentAdmission = () => {
    const {
        // register,
        control,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <Stack>
            <Headline title={'Admission Form'} pb={2} />

            <form onSubmit={handleSubmit(onSubmit)}>

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
                                <Controller
                                    name='admissionNumber'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'Admission number is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label='Admission Number'
                                            variant='outlined'
                                            error={!!errors.admissionNumber}
                                            helperText={errors.admissionNumber ? errors.admissionNumber.message : ''}
                                            fullWidth
                                            required
                                            margin='normal'
                                            sx={{ mt: 0 }}
                                        />
                                    )}
                                />

                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='class'
                                    control={control}
                                    defaultValue={''}
                                    rules={{ required: 'Selecting class is required' }}
                                    render={({ field }) => (
                                        <>
                                            <InputLabel
                                                sx={{ color: errors.class ? 'error.main' : '' }}
                                                id='class-label'
                                                required
                                            >
                                                Select Class
                                            </InputLabel>
                                            <Select
                                                {...field}
                                                labelId='class-label'
                                                id='shift'
                                                input={<OutlinedInput label='Class' />}
                                                fullWidth
                                                error={!!errors.class}
                                                displayEmpty
                                            >
                                                <MenuItem disabled value=''>
                                                    Select Class
                                                </MenuItem>
                                                {ClassList.map((item) => (
                                                    <MenuItem key={item.id} value={item.id}>
                                                        {item.title}
                                                    </MenuItem>
                                                ))}
                                            </Select>

                                            {errors.class && (
                                                <InputLabel
                                                    sx={{
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'error.main',
                                                        mt: 1,
                                                    }}
                                                >
                                                    {errors.class.message}
                                                </InputLabel>
                                            )}
                                        </>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='classSection'
                                    control={control}
                                    defaultValue={''}
                                    rules={{ required: 'Class Section is required' }}
                                    render={({ field }) => (
                                        <>
                                            <InputLabel
                                                sx={{ color: errors.classSection ? 'error.main' : '' }}
                                                id='classSection'
                                                required
                                            >
                                                Select Class Section
                                            </InputLabel>
                                            <Select
                                                {...field}
                                                labelId='classSection'
                                                id='shift'
                                                input={<OutlinedInput label='Session Year' />}
                                                fullWidth
                                                error={!!errors.classSection}
                                                displayEmpty
                                            >
                                                <MenuItem disabled value=''>
                                                    Select Session Year
                                                </MenuItem>
                                                {SectionList.map((item) => (
                                                    <MenuItem key={item.id} value={item.id}>
                                                        {item.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>

                                            {errors.classSection && (
                                                <InputLabel
                                                    sx={{
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'error.main',
                                                        mt: 1,
                                                    }}
                                                >
                                                    {errors.classSection.message}
                                                </InputLabel>
                                            )}
                                        </>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='sessionYear'
                                    control={control}
                                    defaultValue={''}
                                    rules={{ required: 'Session Year is required' }}
                                    render={({ field }) => (
                                        <>
                                            <InputLabel
                                                sx={{ color: errors.sessionYear ? 'error.main' : '' }}
                                                id='sessionYear'
                                                required
                                            >
                                                Select Session Year
                                            </InputLabel>
                                            <Select
                                                {...field}
                                                labelId='sessionYear'
                                                id='shift'
                                                input={<OutlinedInput label='Session Year' />}
                                                fullWidth
                                                error={!!errors.sessionYear}
                                                displayEmpty
                                            >
                                                <MenuItem disabled value=''>
                                                    Select Session Year
                                                </MenuItem>
                                                {ClassList.map((item) => (
                                                    <MenuItem key={item.id} value={item.id}>
                                                        {item.title}
                                                    </MenuItem>
                                                ))}
                                            </Select>

                                            {errors.sessionYear && (
                                                <InputLabel
                                                    sx={{
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'error.main',
                                                        mt: 1,
                                                    }}
                                                >
                                                    {errors.sessionYear.message}
                                                </InputLabel>
                                            )}
                                        </>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='admissionDate'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'Admission Date is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            type='date'
                                            label='Admission Date'
                                            variant='outlined'
                                            error={!!errors.admissionDate}
                                            helperText={errors.admissionDate ? errors.admissionDate.message : ''}
                                            fullWidth
                                            required
                                            margin='normal'
                                            sx={{ mt: 0 }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        {/* <Grid container spacing={2} mb={3}>
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
                        </Grid> */}
                    </Box>

                    <Divider />
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={1} p={2}>
                        <Button variant='tonal' color='inherit' /* onClick={onClose} */>
                            Reset
                        </Button>
                        <Button variant='contained' color='primary' type='submit' /* onClick={handleSubmit} */>
                            Submit
                        </Button>
                    </Stack>
                </Stack>

            </form>

        </Stack>
    );
};

export default StudentAdmission;
