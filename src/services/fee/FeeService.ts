import BaseService from '../BaseService';
import { IResponse } from '../fetch';
import { IFeeFetchRequest, IFeeFetchResponse, IFeeSaveRequest, IFeeSaveResponse } from './feeType';

class FeeService {
    async feeFetch(feeRequest: IFeeFetchRequest): Promise<IResponse<IFeeFetchResponse>> {
        const response = await BaseService.get<IResponse<IFeeFetchResponse>>('/schools/fees', { params: feeRequest });
        return response.data;
    }

    async feeSave(feeRequest: IFeeSaveRequest): Promise<IResponse<IFeeSaveResponse>> {
        const response = await BaseService.post<IResponse<IFeeSaveResponse>>('/schools/fees', feeRequest);
        return response.data;
    }
}

export default new FeeService();