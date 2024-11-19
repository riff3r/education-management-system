import { Divider, Stack, TextField } from '@mui/material';
import Headline from '../../common/Headline';

const GeneralFees = () => {
    return (
        <>
            <Headline
                title={'General Fees Settings'}
                description={'Manage all your Fees from this dashboard.'}
                // action={
                //     <Button startIcon={<AddIcon />} variant='contained' size='large' onClick={() => setModal(true)}>
                //         New Class
                //     </Button>
                // }
                pb={2}
            />
            <Stack bgcolor={'common.white'} borderRadius={2}>
                <Divider light />

                <Stack spacing={2} p={2}>
                    <Stack>
                        <TextField value={'ADMISSION FEE'} label='Particular Label' fullWidth required />
                        <TextField placeholder={'Prefix Amount'} label='Prefix Amount' fullWidth required />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default GeneralFees;
