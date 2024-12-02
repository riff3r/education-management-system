import { Fragment, useEffect, useState } from 'react';
import { Button, Divider, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import Headline from '../../common/Headline';
import Grid from '@mui/material/Grid2';
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from 'react-redux';
import { feeActions } from '../../../state/feature/fee/feeSlice';
import { feeSelector } from '../../../state/feature/fee/feeSelector';
import { utilityActions } from '../../../state/feature/utility/utilitySlice';
import { utilitySelector } from '../../../state/feature/utility/utilitySelector';
import SearchStudents from '../../../common/custom/SearchStudents';
import LoadingButton from '../../../common/custom/LoadingButton';
import { IFeeSaveRequest } from '../../../services/fee/feeType';
import { FetchStatusEnum } from '../../../services/fetchType';

const GeneralFees = () => {
    const dispatch = useDispatch();
    const fees = useSelector(feeSelector.fees);
    const feeSaveStatus = useSelector(feeSelector.feeSaveStatus);
    const schoolClasses = useSelector(utilitySelector.schoolClasses);
    const [applicability, setApplicability] = useState("general");
    const [schoolClassId, setSchoolClassId] = useState("");
    const [studentId, setStudentId] = useState("");

    useEffect(() => {
        if (applicability === "class" && schoolClassId) {
            dispatch(feeActions.feeFetch({ schoolClassId: parseInt(schoolClassId) }));
            setStudentId("");
        } else if (applicability === "student" && studentId) {
            dispatch(feeActions.feeFetch({ studentId: parseInt(studentId) }));
            setSchoolClassId("");
        } else if (applicability === "general") {
            dispatch(feeActions.feeFetch({}));
            setSchoolClassId("");
            setStudentId("");
        }
    }, [applicability, schoolClassId, studentId]);

    useEffect(() => {
        if (applicability === "class") {
            dispatch(utilityActions.schoolClassesFetch());
        }
    }, [applicability]);

    const addNewParticular = () => {
        const prevFees = [...fees];

        prevFees.push({
            title: "Untitled",
            amount: 0,
            frequency: "once"
        });

        dispatch(feeActions.feesUpdate(prevFees));
    };

    const handleChangeFee = (key: string, value: string, index: number) => {
        const prevFees = [...fees];

        if (prevFees[index]) {
            prevFees[index] = {
                ...prevFees[index],
                [key]: value,
            };
        }

        dispatch(feeActions.feesUpdate(prevFees));
    };

    const handleSubmit = () => {
        const payload: IFeeSaveRequest = { feeParticulars: fees };

        if (schoolClassId) {
            payload.schoolClassId = parseInt(schoolClassId);
        } else if (studentId) {
            payload.studentId = parseInt(studentId);
        }

        dispatch(feeActions.feeSave(payload));
    };

    return (
        <>
            <Headline
                title={'General Fees Settings'}
                description={'Manage all your Fees from this dashboard.'}
                action={
                    <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={addNewParticular}>
                        New Particular
                    </Button>
                }
                pb={2}
            />
            <Stack bgcolor={'common.white'} borderRadius={2} mt={2} width={700} mx={'auto'}>
                <Grid container spacing={2} p={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <InputLabel required id='applicability-label'>
                            Fee Particulars for
                        </InputLabel>
                        <Select
                            labelId='applicability-label'
                            id='applicability'
                            value={applicability}
                            onChange={(e) => setApplicability(e.target.value)}
                            fullWidth
                            displayEmpty
                        >
                            <MenuItem value={"general"}>All Student</MenuItem>
                            <MenuItem value={"class"}>Specific Class</MenuItem>
                            <MenuItem value={"student"}>Specific Student</MenuItem>
                        </Select>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        {applicability === "class" && (
                            <>
                                <InputLabel required id='class-label'>
                                    Class
                                </InputLabel>
                                <Select
                                    labelId='class-label'
                                    id='class'
                                    value={schoolClassId}
                                    onChange={(e) => setSchoolClassId(e.target.value)}
                                    fullWidth
                                    displayEmpty
                                >
                                    <MenuItem value="">Choose Class</MenuItem>
                                    {
                                        schoolClasses.map((schoolClass) => (
                                            <MenuItem value={schoolClass.id} key={schoolClass.id}>{schoolClass.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </>
                        )}

                        {applicability === "student" && <SearchStudents onSelect={(student) => { setStudentId(JSON.stringify(student.id)) }} />}
                    </Grid>

                    {
                        fees.map((fee, index) => (
                            <Fragment key={fee.id}>
                                <Grid size={{ xs: 6, md: 5 }}>
                                    <TextField
                                        value={fee.title}
                                        name='title'
                                        onChange={(event) => { handleChangeFee(event.target.name, event.target.value, index) }}
                                        label='Particular Label'
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid size={{ xs: 6, md: 4 }}>
                                    <TextField
                                        name='amount'
                                        value={fee.amount}
                                        onChange={(event) => { handleChangeFee(event.target.name, event.target.value, index) }}
                                        placeholder={'Prefix Amount'}
                                        label='Prefix Amount'
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid size={{ xs: 6, md: 3 }}>
                                    <InputLabel required id='fee-frequency-label'>
                                        Fee Frequency
                                    </InputLabel>
                                    <Select
                                        labelId='fee-frequency-label'
                                        id='fee-frequency'
                                        value={fee.frequency}
                                        name='frequency'
                                        onChange={(event) => { handleChangeFee(event.target.name, event.target.value, index) }}
                                        fullWidth
                                    >
                                        <MenuItem value={"once"}>Once</MenuItem>
                                        <MenuItem value={"monthly"}>Monthly</MenuItem>
                                        <MenuItem value={"quarterly"}>Quarterly</MenuItem>
                                        <MenuItem value={"annually"}>Annually</MenuItem>
                                    </Select>
                                </Grid>
                            </Fragment>
                        ))
                    }
                </Grid>

                <Divider sx={{ width: '100%', mt: 2 }} />

                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={1} p={2}>
                    <LoadingButton loading={feeSaveStatus === FetchStatusEnum.SAVING} sx={{ width: "100px" }} variant='contained' color='primary' type='submit' onClick={handleSubmit}>
                        Submit
                    </LoadingButton>
                </Stack>
            </Stack>
        </>
    );
};

export default GeneralFees;
