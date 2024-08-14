import { Button, Divider, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

const AddOrEditMediumModal = ({ open, onClose, edit }) => {
    const [mediumName, setMediumName] = useState(edit?.name || '');

    const handleName = (event) => {
        setMediumName(event.target.value);
    };

    const handleSubmit = () => {
        onClose();
        alert(mediumName);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Medium' : 'New Medium'} open={open} onClose={onClose}>
            <>
                <Stack px={2} py={3}>
                    <TextField value={mediumName} label={'Name'} required onChange={handleName} />
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

export default AddOrEditMediumModal;

{
    /* <PopupAlertModal
title={'Do you want to add this Medium?'}
description={'After confirming it will take a few minutes for your Medium to update.'}
open={confirmModal}
onSubmit={handleConfirmSubmit}
onCancel={() => {
    setConfirmModal(false);
}}
/> */
}
