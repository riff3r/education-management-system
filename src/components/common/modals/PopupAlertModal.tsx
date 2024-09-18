import React, { useState } from 'react';
import { Button, Divider, IconButton, Modal, Stack, TextField, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
};

interface IProps {
    open: boolean;
    onSubmit: () => void;
    onCancel: () => void;
    title?: string;
    description?: string;
    cancelText?: string;
    submitText?: string;
    width?: number;
    confirmText?: string;
    alertIcon?: React.ReactNode;
}

const PopupAlertModal: React.FC<IProps> = ({
    open,
    onSubmit,
    onCancel,
    title = 'Are you sure?',
    description,
    cancelText = 'Cancel',
    submitText = 'Confirm',
    width = 400,
    confirmText,
    alertIcon = <WarningIcon sx={{ fontSize: '50px', color: 'orange' }} />,
    ...rest
}) => {
    const [confirmTextInput, setConfirmTextInput] = useState('');

    return (
        <Modal
            open={open}
            onClose={() => {}}
            sx={{
                '&.MuiPaper-root': {
                    width: `${width} !important`,
                },
            }}
            {...rest}
        >
            <Stack sx={style}>
                <Stack direction={'row'} justifyContent={'center'} padding={2} paddingBottom={0}>
                    <IconButton /* variant={'outlined'} */ color={'warning'} sx={{ width: '75px', height: '75px' }}>
                        {alertIcon}
                    </IconButton>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} px={3} py={2}>
                    <Stack direction={'column'} alignItems={'center'}>
                        <Typography variant={'h5'} textAlign={'center'}>
                            {title}
                        </Typography>
                        <Typography variant={'body1'} mt={1} textAlign={'center'}>
                            {description}
                        </Typography>

                        {confirmText && (
                            <Stack direction={'column'} alignItems={'center'} mt={2} width={'100%'}>
                                <Typography variant={'body1'} mt={1} mb={1} textAlign={'center'}>
                                    Type <span style={{ color: 'rgb(227,66,110)' }}>{confirmText}</span> below to confirm.
                                </Typography>
                                <TextField
                                    fullWidth
                                    onChange={(event) => {
                                        setConfirmTextInput(event.target.value);
                                    }}
                                    value={confirmTextInput}
                                />
                            </Stack>
                        )}
                    </Stack>
                </Stack>
                <Stack width={'100%'}>
                    <Divider />
                    <Stack padding={2} direction={'row'} justifyContent={'flex-end'} gap={1}>
                        <Button variant={'tonal'} color={'inherit'} size={'large'} onClick={onCancel}>
                            {cancelText}
                        </Button>
                        <Button
                            disabled={confirmText ? confirmTextInput !== confirmText : false}
                            size={'large'}
                            onClick={() => {
                                if (confirmText ? confirmTextInput === confirmText : true) {
                                    onSubmit();
                                }
                            }}
                        >
                            {submitText}
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Modal>
    );
};

export default PopupAlertModal;
