import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Button,
    Divider,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { MediumList, SubjectList } from '../../../helper/constant/coreConstant';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: any;
}

const AddOrEditClassesWithSubjectModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const [subjectName, setSubjectName] = useState(edit?.title || '');

    const [selectedMedium, setSelectedMedium] = useState(edit?.medium || 2);

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectName(event.target.value);
    };

    const handleSubmit = () => {
        onClose();
        alert(subjectName);
    };

    return (
        <ModalWithHeader width={700} title={edit ? 'Update Class With Subject' : 'Assign Class With Subject'} open={open} onClose={onClose}>
            <Stack sx={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }} spacing={2} p='16px 24px 24px 24px'>
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

                <Stack>
                    <InputLabel id='shift-label' required>
                        Select Class
                    </InputLabel>
                    <Select
                        labelId='shift-label'
                        id='shift'
                        multiple
                        value={[]}
                        // onChange={handleChange}
                        input={<OutlinedInput label='Class Teacher' />}
                        // MenuProps={MenuProps}
                    >
                        {SubjectList.map((subject, index) => (
                            <MenuItem key={index} value={subject.id}>
                                {subject.title}
                            </MenuItem>
                        ))}
                    </Select>
                </Stack>

                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography variant='subtitle1'>Core Subjects</Typography>
                        </Grid>

                        <Grid item xs={7} md={7}>
                            <TextField placeholder={'Subject Name'} fullWidth required />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <TextField value={subjectName} placeholder={'Mark'} required onChange={handleName} fullWidth />
                        </Grid>

                        <Grid item xs={1} md={1}>
                            <Stack height={'100%'} alignItems={'center'} justifyContent={'center'}>
                                <IconButton size='small' color='error'>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </Grid>

                        <Grid item xs={7} md={7}>
                            <Stack>
                                {/* <InputLabel id='shift-label' required>
                                    Select Subject
                                </InputLabel> */}
                                <Select
                                    labelId='shift-label'
                                    id='shift'
                                    multiple
                                    value={[]}
                                    // onChange={handleChange}
                                    input={<OutlinedInput label='Class Teacher' />}
                                    // MenuProps={MenuProps}
                                >
                                    {SubjectList.map((name) => (
                                        <MenuItem key={name.id} value={name.id}>
                                            {name.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <TextField value={subjectName} placeholder={'Mark'} required onChange={handleName} fullWidth />
                        </Grid>
                        <Grid item xs={1} md={1}>
                            <Stack height={'100%'} alignItems={'center'} justifyContent={'center'}>
                                <IconButton size='small' color='error'>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Button variant='tonal' size='small' color='secondary' startIcon={<AddIcon />}>
                                Add Core Subject
                            </Button>
                        </Grid>
                    </Grid>
                </div>
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
        </ModalWithHeader>
    );
};

export default AddOrEditClassesWithSubjectModal;
