import React from 'react';
import { Button, Divider, InputLabel, MenuItem, Select, Stack, Switch, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: any;
}

interface FormData {
    feesTitle: string;
    feesType: string;
    feesAmount: string;
    feesStatus: boolean;
}

const AddOrEditFeesTypeModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            feesTitle: edit?.title || '',
            feesType: edit?.feesType || '',
            feesAmount: edit?.amount || '',
            feesStatus: edit?.status || false,
        },
    });

    const onSubmit = (data: FormData) => {
        onClose();
        console.log(data);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Fees Type' : 'New Fees Type'} open={open} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} p='16px 24px 24px 24px'>
                    <Controller
                        name='feesTitle'
                        control={control}
                        rules={{ required: 'Fee Type Name is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField {...field} label='Fee Type Name' required error={!!error} helperText={error?.message} />
                        )}
                    />

                    <Controller
                        name='feesType'
                        control={control}
                        rules={{ required: 'Fees Type is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <InputLabel id='fees-type'>Fees Type</InputLabel>
                                <Select {...field} displayEmpty required fullWidth error={!!error}>
                                    <MenuItem value='' disabled>
                                        Select Fees Type
                                    </MenuItem>
                                    <MenuItem value='1'>Compulsory</MenuItem>
                                    <MenuItem value='2'>Optional</MenuItem>
                                </Select>
                                {error && <p style={{ color: 'red', margin: '4px 0 0' }}>{error.message}</p>}
                            </div>
                        )}
                    />

                    <Controller
                        name='feesAmount'
                        control={control}
                        rules={{ required: 'Fee Amount is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField {...field} label='Fee Amount' required error={!!error} helperText={error?.message} />
                        )}
                    />

                    <Stack>
                        <InputLabel id='fees-status'>Fees Status</InputLabel>
                        <Controller
                            name='feesStatus'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Switch
                                    variant='filled'
                                    size='medium'
                                    checked={value}
                                    onChange={(e) => onChange(e.target.checked)}
                                    color='primary'
                                />
                            )}
                        />
                    </Stack>
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

export default AddOrEditFeesTypeModal;
