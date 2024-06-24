import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';
import LoginResponse from '../responses/LoginResponse';
import BaseResponse from '../responses/BaseResponse';
import LoginRequest from '../requests/LoginRequest';
import RegisterBrokerRequest from '../requests/RegisterBrokerRequest';

class BrokerService {
    async login(request: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
        return useApi.post('broker/userLogin', request);
    }

    async register(request: RegisterBrokerRequest): Promise<AxiosResponse<BaseResponse>> {
        return useApi.post('broker/registerUser', request);
    }
}

export default new BrokerService();
