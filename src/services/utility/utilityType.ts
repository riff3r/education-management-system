export interface IUtilitySchoolClassesFetchResponse {
    schoolClasses: IUtilitySchoolClasses[];
}

export interface IUtilitySchoolClasses {
    id: number;
    name: string;
}

export interface IUtilitySchoolStudentsFetchResponse {
    schoolStudents: ISchoolStudent[];
}

export interface ISchoolStudent {
    id: number;
    firstName: string;
    lastName: string;
}

export interface IUtilitySchoolStudentsFetchRequest {
    search?: string;
}
