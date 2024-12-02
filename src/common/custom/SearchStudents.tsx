import { ChangeEvent, FC, useRef, useState } from 'react';
import { Box, List, ListItemButton, ListItemText, Popper, TextField } from '@mui/material';
import UtilityService from '../../services/utility/UtilityService';
import { IResponse } from '../../services/fetch';
import { ISchoolStudent, IUtilitySchoolStudentsFetchResponse } from '../../services/utility/utilityType';

interface IProps {
    onSelect: (option: ISchoolStudent) => void;
}

const SearchStudents: FC<IProps> = ({ onSelect }) => {
    const [open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement | null>(null);
    const [search, setSearch] = useState<string>('');
    const [students, setStudents] = useState<ISchoolStudent[]>([]);

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const value = event.target.value;
        setSearch(value);

        if (value.trim() === '') {
            setOpen(false);
            setStudents([]);
            return;
        }

        const response: IResponse<IUtilitySchoolStudentsFetchResponse> = await UtilityService.schoolStudentsFetch({ search: value });

        if (response.success) {
            setStudents(response.data.schoolStudents);
            if (!response.data.schoolStudents.length) {
                setOpen(false);
            }
        }

        setOpen(true);
    };

    const handleOnSelect = (student: ISchoolStudent): void => {
        setOpen(false);
        setSearch(`${student.firstName} ${student.lastName}`);
        onSelect(student);
    };

    return (
        <Box>
            <TextField inputRef={inputRef} fullWidth value={search} onChange={handleInputChange} label='Search Student' placeholder='Choose Student' />
            <Popper
                open={open}
                anchorEl={inputRef.current}
                placement='bottom-start'
                sx={{ zIndex: 1, width: inputRef.current?.clientWidth, "& .MuiListItemButton-root": { padding: "6px 16px" }, "& .MuiListItemText-root": { margin: 0 }, "& .MuiListItemButton-root:hover": { backgroundColor: 'rgba(52, 111, 239, 0.08)' } }}
            >
                <Box sx={{ border: 1, borderColor: 'divider', bgcolor: 'background.paper', borderRadius: 1, boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)' }}>
                    <List>
                        {students.map((student) => (
                            <ListItemButton
                                key={student.id}
                                onClick={() => { handleOnSelect(student) }}
                            >
                                <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "14px" } }} primary={`${student.firstName} ${student.lastName}`} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Popper>
        </Box>
    );
};

export default SearchStudents;