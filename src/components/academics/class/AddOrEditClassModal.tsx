import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import { MediumList, SectionList } from '../../../helper/constant/coreConstant';
import ModalWithHeader from '../../common/modals/ModalWithHeader';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

interface IProps {
    open: boolean;
    onClose: () => void;
    edit?: any;
}

const AddOrEditClassModal: React.FC<IProps> = ({ open, onClose, edit }) => {
    const [classTitle, setClassTitle] = useState(edit?.title || '');
    const [selectedMedium, setSelectedMedium] = useState(edit?.medium || 2);

    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClassTitle(event.target.value);
    };

    const handleSubmit = () => {
        onClose();
        alert(classTitle);
    };

    return (
        <ModalWithHeader width={500} title={edit ? 'Update Class' : 'New Class'} open={open} onClose={onClose}>
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

                    <TextField value={classTitle} label={'Class Name'} required onChange={handleName} />

                    <TextField type='number' value={classTitle} label={'Monthly Tuition Fees'} required onChange={handleName} />

                    <Stack spacing={0.5}>
                        <FormLabel sx={{ fontSize: 14, fontWeight: 500 }} id='Section-label' required>
                            Section
                        </FormLabel>
                        <FormGroup row /* value={selectedType} */>
                            {SectionList.map((section) => (
                                <FormControlLabel
                                    /* onClick={() => {
                                        setSelectedType(type.id);
                                    }} */
                                    key={section.id}
                                    control={<Checkbox size={'small'} color={'primary'} />}
                                    // checked={selectedType === type.id}
                                    label={section.name}
                                />
                            ))}
                        </FormGroup>
                    </Stack>

                    <Stack>
                        <InputLabel id='shift-label'>Class Teacher</InputLabel>
                        <Select
                            labelId='shift-label'
                            id='shift'
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label='Class Teacher' />}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>

                    <Stack>
                        <InputLabel id='shift-label'>Shift (Optional)</InputLabel>
                        <Select
                            labelId='shift-label'
                            id='shift'
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label='Name' />}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>

                    <Stack>
                        <InputLabel id='stream-label'>Stream (Optional)</InputLabel>
                        <Select
                            labelId='stream-label'
                            id='stream'
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label='Name' />}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
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

export default AddOrEditClassModal;
