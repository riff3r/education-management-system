export const SectionList = [
    {
        id: 1,
        name: 'A',
    },
    {
        id: 2,
        name: 'B',
    },
    {
        id: 3,
        name: 'C',
    },
];

export const MediumList = [
    {
        id: 1,
        name: 'English',
    },
    {
        id: 2,
        name: 'Bangla',
    },
    {
        id: 3,
        name: 'Arabic',
    },
];

export const SubjectList: IClassWithSubject[] = [
    {
        id: 1,
        title: 'English',
        subjectCode: 'ENG01',
        medium: 'english',
        type: 'theory' /* Theory, Practical */,
        backgroundColor: '#f44336',
        image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    },
    {
        id: 2,
        title: 'Bangla',
        subjectCode: 'BNG01',
        medium: 'bangla',
        type: 'theory' /* Theory, Practical */,
        backgroundColor: '#f44336',
        image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    },
    {
        id: 3,
        title: 'Arabic',
        subjectCode: 'ARB01',
        medium: 'arabic',
        type: 'theory' /* Theory, Practical */,
        backgroundColor: '#f44336',
        image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    },
];

export const SubjectType = [
    {
        id: 1,
        title: 'Theory',
    },
    {
        id: 2,
        title: 'Practical',
    },
];

export const ClassList: IClass[] = [
    {
        id: 1,
        title: 'Class one',
        section: ['A', 'B', 'C'],
        shift: null,
        semester: null,
        tuitionFee: 2000,
    },
    {
        id: 2,
        title: 'Class two',
        section: ['A', 'B', 'C'],
        shift: null,
        semester: null,
        tuitionFee: 2000,
    },
    {
        id: 3,
        title: 'Class three',
        section: ['A', 'B', 'C'],
        shift: null,
        semester: null,
        tuitionFee: 2000,
    },
];

export const GENDER_LIST = [
    {
        id: 1,
        title: 'Male',
    },
    {
        id: 2,
        title: 'Female',
    },
];

export const FEES_TYPES = [
    {
        id: 1,
        title: 'Admission Fee',
        type: '1',
        amount: 10000,
        status: true,
    },
    {
        id: 2,
        title: 'Tuition Fee',
        type: '1',
        amount: 2000,
        status: true,
    },
    {
        id: 3,
        title: 'Transportation Fee',
        type: '2',
        amount: 750,
        status: true,
    },
    {
        id: 4,
        title: 'Hostel Fee',
        type: '2',
        amount: 2000,
        status: false,
    },
];

export const STUDENT_LIST = [
    {
        id: 1,
        name: 'Aminul Haque',
        class: '5',
        section: 'A',
        grNumber: 'GR-1001',
        rollNumber: 1,
        gender: 'Male',
        admissionDate: '2022-01-15',
        guardianName: 'Mokhlesur Rahman',
        guardianMobile: '01712345678',
    },
    {
        id: 2,
        name: 'Ruhul Amin',
        class: '5',
        section: 'B',
        grNumber: 'GR-1002',
        rollNumber: 2,
        gender: 'Male',
        admissionDate: '2022-02-10',
        guardianName: 'Abdur Rahim',
        guardianMobile: '01812345679',
    },
    {
        id: 3,
        name: 'Sadia Begum',
        class: '6',
        section: 'A',
        grNumber: 'GR-1003',
        rollNumber: 3,
        gender: 'Female',
        admissionDate: '2021-12-20',
        guardianName: 'Shahidul Islam',
        guardianMobile: '01912345680',
    },
    {
        id: 4,
        name: 'Farhana Islam',
        class: '6',
        section: 'B',
        grNumber: 'GR-1004',
        rollNumber: 4,
        gender: 'Female',
        admissionDate: '2022-03-01',
        guardianName: 'Ali Hossain',
        guardianMobile: '01612345681',
    },
    {
        id: 5,
        name: 'Mehedi Hasan',
        class: '7',
        section: 'A',
        grNumber: 'GR-1005',
        rollNumber: 5,
        gender: 'Male',
        admissionDate: '2022-04-15',
        guardianName: 'Jahangir Alam',
        guardianMobile: '01512345682',
    },
];

export const CHART_OF_ACCOUNT = [
    {
        id: 1,
        title: 'Educational Resources',
        type: '2',
    },
    {
        id: 2,
        title: 'Books',
        type: '2',
    },
    {
        id: 3,
        title: 'Re-examination fee',
        type: '1',
    }

];
