import { Button, Divider, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: any;
}

const AddOrEditSectionModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const [sectionName, setSectionName] = useState(edit?.name || '');

    const handleName = (name: string) => {
        setSectionName(name);
    };

    const handleSubmit = () => {
        onClose();
        alert(sectionName);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Section' : 'New Section'} open={open} onClose={onClose}>
            <>
                <Stack px={2} py={3}>
                    <TextField value={sectionName} label={'Name'} required onChange={(event) => handleName(event.target.value)} />
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

export default AddOrEditSectionModal;

{
    /* <PopupAlertModal
title={'Do you want to add this Section?'}
description={'After confirming it will take a few minutes for your Section to update.'}
open={confirmModal}
onSubmit={handleConfirmSubmit}
onCancel={() => {
    setConfirmModal(false);
}}
/> */
}
