import { Box, Button, Divider, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material';
import { ClassList, GENDER_LIST, SectionList } from '../../helper/constant/coreConstant';
import Headline from '../common/Headline';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    admissionNumber: string;
    class: string;
    sessionYear: string;
    classSection: string;
    admissionDate: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    fathersName: string;
    mothersName: string;
    studentPhoto: string;
    previousInstitution: string;
    presentAddress: string;
    permanentAddress: string;
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

                                        />
                                    )}
                                />
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
                                <Controller
                                    name='firstName'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'First Name is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label='First Name'
                                            variant='outlined'
                                            error={!!errors.firstName}
                                            helperText={errors.firstName ? errors.firstName.message : ''}
                                            fullWidth
                                            required

                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='lastName'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'Last Name is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label='Last Name'
                                            variant='outlined'
                                            error={!!errors.lastName}
                                            helperText={errors.lastName ? errors.lastName.message : ''}
                                            fullWidth
                                            required

                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='dateOfBirth'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'Date of Birth is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            type='date'
                                            label='Date of Birth'
                                            error={!!errors.dateOfBirth}
                                            helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ''}
                                            fullWidth
                                            required

                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='gender'
                                    control={control}
                                    defaultValue={''}
                                    rules={{ required: 'Gender is required' }}
                                    render={({ field }) => (
                                        <>
                                            <InputLabel
                                                sx={{ color: errors.gender ? 'error.main' : '' }}
                                                id='gender'
                                                required
                                            >
                                                Select Gender
                                            </InputLabel>
                                            <Select
                                                {...field}
                                                labelId='gender'
                                                id='gender'
                                                input={<OutlinedInput label='Gender' />}
                                                fullWidth
                                                error={!!errors.gender}
                                                displayEmpty
                                            >
                                                <MenuItem disabled value=''>
                                                    Select Gender
                                                </MenuItem>
                                                {GENDER_LIST.map((item) => (
                                                    <MenuItem key={item.id} value={item.id}>
                                                        {item.title}
                                                    </MenuItem>
                                                ))}
                                            </Select>

                                            {errors.gender && (
                                                <InputLabel
                                                    sx={{
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'error.main',
                                                        mt: 1,
                                                    }}
                                                >
                                                    {errors.gender.message}
                                                </InputLabel>
                                            )}
                                        </>
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='fathersName'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'fathers Name is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            label='Fathers Name'
                                            error={!!errors.fathersName}
                                            helperText={errors.fathersName ? errors.fathersName.message : ''}
                                            fullWidth
                                            required
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='mothersName'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'Mothers Name is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            label='Mothers Name'
                                            error={!!errors.mothersName}
                                            helperText={errors.mothersName ? errors.mothersName.message : ''}
                                            fullWidth
                                            required
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='studentPhoto'
                                    control={control}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextField
                                            type='file'
                                            label='Student Photo'
                                            error={!!errors.studentPhoto}
                                            helperText={errors.studentPhoto ? errors.studentPhoto.message : ''}
                                            fullWidth
                                            required
                                            {...field}
                                        />
                                    )}
                                />
                                {/* <TextField value={''} type='file' name='studentPhoto' label='Student Photo' fullWidth /> */}
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <Controller
                                    name='previousInstitution'
                                    control={control}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextField
                                            label='Previous Institution'
                                            error={!!errors.previousInstitution}
                                            helperText={errors.previousInstitution ? errors.previousInstitution.message : ''}
                                            fullWidth
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Controller
                                    name='presentAddress'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'Present Address is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            label='Present Address'
                                            multiline
                                            rows={2}
                                            error={!!errors.presentAddress}
                                            helperText={errors.presentAddress ? errors.presentAddress.message : ''}
                                            required
                                            fullWidth
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Controller
                                    name='permanentAddress'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: 'Permanent Address is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            label='Permanent Address'
                                            multiline
                                            rows={2}
                                            error={!!errors.permanentAddress}
                                            helperText={errors.permanentAddress ? errors.permanentAddress.message : ''}
                                            required
                                            fullWidth
                                            {...field}
                                        />
                                    )}
                                />
                                <TextField multiline rows={2} value={''} name='permanentAddress' label='Permanent Address' fullWidth />
                            </Grid>
                        </Grid>
                        {/* <Grid container spacing={2} mb={3}>
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
