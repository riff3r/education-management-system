interface IMedium {
    id: number;
    name: string;
}
interface ISection {
    id: number;
    name: string;
}
interface ISubject {
    title: string;
    subjectCode: string;
    type: string;
    medium?: string;
}
interface IClass {
    id: number;
    title: string;
    section: string[];
    shift: string | null;
    semester: string | null;
    tuitionFee: number;
}
interface IClassWithSubject {
    id: number;
    title: string;
    subjectCode: string;
    backgroundColor: string;
    medium: string;
    image: string;
    type: string;
}
interface IChartOfAccounts {
    id: number;
    title: string;
    type: string;
}
interface IAccountStatement {
    id: number;
    date: string;
    title: string;
    type: string;
    amount: number;
    netAmount: number;
}
interface IAddIncome {
    id: number;
    title: string;
    amount: number;
}
interface ILoginCredentials {
    email: string;
    password: string;
}