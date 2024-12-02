export interface IFeeFetchRequest {
    studentId?: number;
    schoolClassId?: number;
}

export interface IFeeFetchResponse {
    fees: IFee[];
}

export interface IFee {
    id?: number;
    title: string;
    amount: number;
    frequency: string;
}

export interface IFeeSaveRequest {
    feeParticulars: IFee[];
    schoolClassId?: number;
    studentId?: number;
}

export interface IFeeSaveResponse {
    fees: IFee[];
}