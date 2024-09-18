import { Button, Divider, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { MediumList, SubjectType } from '../../../helper/constant/coreConstant';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: ISubject;
}

const AddOrEditSubjectModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const [subjectName, setSubjectName] = useState(edit?.title || '');
    const [subjectCode, setSubjectCode] = useState(edit?.subjectCode || '');
    const [selectedType, setSelectedType] = useState(edit?.type || SubjectType[0]?.id);
    const [selectedMedium, setSelectedMedium] = useState(edit?.medium || 2);

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectName(event.target.value);
    };

    const handleSubmit = () => {
        onClose();
        alert(subjectName);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Subject' : 'New Subject'} open={open} onClose={onClose}>
            <>
                <Stack spacing={2} p='16px 24px 24px 24px'>
                    <Stack>
                        <FormLabel sx={{ fontSize: 14, fontWeight: 500 }} id='medium-radio-label' required>
                            Medium
                        </FormLabel>
                        <RadioGroup name='quiz' row value={selectedMedium} aria-labelledby='medium-radio-label'>
                            {MediumList.map((medium) => (
                                <FormControlLabel
                                    onClick={() => {
                                        setSelectedMedium(medium.id);
                                    }}
                                    key={medium.id}
                                    control={<Radio size={'small'} color={'primary'} />}
                                    checked={selectedMedium === medium.id}
                                    label={medium.name}
                                />
                            ))}
                        </RadioGroup>
                    </Stack>

                    <TextField value={subjectName} label={'Subject Name'} required onChange={handleName} />

                    <Stack>
                        <FormLabel sx={{ fontSize: 14, fontWeight: 500 }} id='medium-radio-label' required>
                            Type
                        </FormLabel>
                        <RadioGroup name='quiz' row value={selectedType} aria-labelledby='medium-radio-label'>
                            {SubjectType.map((type) => (
                                <FormControlLabel
                                    onClick={() => {
                                        setSelectedType(type.id);
                                    }}
                                    key={type.id}
                                    control={<Radio size={'small'} color={'primary'} />}
                                    checked={selectedType === type.id}
                                    label={type.title}
                                />
                            ))}
                        </RadioGroup>
                    </Stack>

                    <TextField value={subjectCode} label={'Subject Code'} onChange={(e) => setSubjectCode(e.target.value)} />
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

export default AddOrEditSubjectModal;

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
