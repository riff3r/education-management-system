import { Button, Divider, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
}

interface FormData {
    title: string;
    type: string;
    amount: number;
}

const AccountStatementModal: React.FC<IProps> = ({ open, onClose }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            title: '',
            type: '',
            amount: 0,
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        onClose();
        alert(data.title);
    };

    return (
        <ModalWithHeader width={500} title={'Add New Income / Expense'} open={open} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack px={2} py={3} spacing={2}>
                    <Controller
                        name='title'
                        control={control}
                        rules={{ required: 'Title is required' }}
                        render={({ field }) => (
                            <TextField {...field} label='Title' error={!!errors.title} helperText={errors.title?.message} required />
                        )}
                    />

                    <Controller
                        name='type'
                        control={control}
                        rules={{ required: 'Type is required' }}
                        render={({ field }) => (
                            <span>
                                <InputLabel
                                    id='accountType'
                                    required
                                    sx={{ color: errors.type && errors.type.message ? 'error.main' : '' }}
                                >
                                    Transaction Type
                                </InputLabel>
                                <Select {...field} labelId='accountType' displayEmpty fullWidth error={!!errors.type}>
                                    <MenuItem value='' disabled>
                                        Select Type
                                    </MenuItem>
                                    <MenuItem value='1'>Expense</MenuItem>
                                    <MenuItem value='2'>Income</MenuItem>
                                </Select>
                                {errors.type && (
                                    <Typography variant='helperText' sx={{ color: 'error.main', fontSize: '12px' }}>
                                        {errors.type.message}
                                    </Typography>
                                )}
                            </span>
                        )}
                    />

                    <Controller
                        name='amount'
                        control={control}
                        rules={{ required: 'Amount is required' }}
                        render={({ field }) => (
                            <TextField
                                type='number'
                                {...field}
                                label='Amount'
                                error={!!errors.amount}
                                helperText={errors.amount?.message}
                                required
                                slotProps={{ htmlInput: { min: 1 } }}
                                // InputProps={{ inputProps: { min: 1 } }}
                            />
                        )}
                    />
                </Stack>

                <Divider />
                <Stack direction='row' alignItems='center' justifyContent='flex-end' spacing={1} p={2}>
                    <Button variant='tonal' color='inherit' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary' type='submit'>
                        {'Submit'}
                    </Button>
                </Stack>
            </form>
        </ModalWithHeader>
    );
};

export default AccountStatementModal;
