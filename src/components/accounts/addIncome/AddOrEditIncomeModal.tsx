import { Button, Divider, Stack, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: IAddIncome;
}

interface FormData {
    title: string;
    amount: number;
}

const AddOrEditIncomeModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            title: edit?.title || '',
            amount: edit?.amount || 0,
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        onClose();
        alert(data);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Income' : 'New Income'} open={open} onClose={onClose}>
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
                        {edit ? 'Update' : 'Submit'}
                    </Button>
                </Stack>
            </form>
        </ModalWithHeader>
    );
};

export default AddOrEditIncomeModal;
