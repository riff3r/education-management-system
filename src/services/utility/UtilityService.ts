import BaseService from '../BaseService';
import { IResponse } from '../fetch';
import { IUtilitySchoolClassesFetchResponse, IUtilitySchoolStudentsFetchRequest, IUtilitySchoolStudentsFetchResponse } from './utilityType';

class UtilityService {
    async schoolClassesFetch(): Promise<IResponse<IUtilitySchoolClassesFetchResponse>> {
        const response = await BaseService.get<IResponse<IUtilitySchoolClassesFetchResponse>>('/schools/utilities/school-classes');
        return response.data;
    }

    async schoolStudentsFetch(schoolStudentRequest: IUtilitySchoolStudentsFetchRequest): Promise<IResponse<IUtilitySchoolStudentsFetchResponse>> {
        const response = await BaseService.get<IResponse<IUtilitySchoolStudentsFetchResponse>>('/schools/utilities/school-students', { params: schoolStudentRequest });
        return response.data;
    }
}

export default new UtilityService();