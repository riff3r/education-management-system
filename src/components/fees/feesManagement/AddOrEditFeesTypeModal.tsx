import { Button, Divider, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: any;
}

const AddOrEditFeesTypeModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const [classTitle, setClassTitle] = useState(edit?.title || '');

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClassTitle(event.target.value);
    };

    const handleSubmit = () => {
        onClose();
        alert(classTitle);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Fees Type' : 'New Fees Type'} open={open} onClose={onClose}>
            <>
                <Stack spacing={2} p='16px 24px 24px 24px'>
                    <TextField value={classTitle} label={'Fee Type Name'} required onChange={handleName} />
                </Stack>

                <Divider />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={1} p={2}>
                    <Button variant='tonal' color='inherit' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary' onClick={handleSubmit}>
                        {edit ? 'Update' : 'Submit'}
                    </Button>
                </Stack>
            </>
        </ModalWithHeader>
    );
};

export default AddOrEditFeesTypeModal;
