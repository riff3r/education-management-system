import { Button, Divider, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: IChartOfAccounts;
}

interface FormData {
    chartAccountName: string;
    chartType: string;
}

const AddOrEditChartOfAccountsModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            chartAccountName: edit?.title || '',
            chartType: edit?.type || '',
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        onClose();
        alert(data.chartAccountName);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Chart of Account' : 'New Chart of Account'} open={open} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack px={2} py={3} spacing={2}>
                    <Controller
                        name='chartAccountName'
                        control={control}
                        rules={{ required: 'Title is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label='Title'
                                error={!!errors.chartAccountName}
                                helperText={errors.chartAccountName?.message}
                            />
                        )}
                    />

                    <Controller
                        name='chartType'
                        control={control}
                        rules={{ required: 'Chart Type is required' }}
                        render={({ field }) => (
                            <span>
                                <InputLabel
                                    id='accountType'
                                    required
                                    sx={{ color: errors.chartType && errors.chartType.message ? 'error.main' : '' }}
                                >
                                    Chart Type
                                </InputLabel>
                                <Select {...field} labelId='accountType' displayEmpty fullWidth error={!!errors.chartType}>
                                    <MenuItem value='' disabled>
                                        Select Type
                                    </MenuItem>
                                    <MenuItem value='1'>Expense</MenuItem>
                                    <MenuItem value='2'>Income</MenuItem>
                                </Select>
                                {errors.chartType && (
                                    <Typography variant='helperText' sx={{ color: 'error.main', fontSize: '12px' }}>
                                        {errors.chartType.message}
                                    </Typography>
                                )}
                            </span>
                        )}
                    />
                </Stack>

                <Divider />
                <Stack direction='row' alignItems='center' justifyContent='flex-end' spacing={1} p={2}>
                    <Button variant='tonal' color='inherit' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary' type='submit'>
                        {edit ? 'Update' : 'Submit'}
                    </Button>
                </Stack>
            </form>
        </ModalWithHeader>
    );
};

export default AddOrEditChartOfAccountsModal;
