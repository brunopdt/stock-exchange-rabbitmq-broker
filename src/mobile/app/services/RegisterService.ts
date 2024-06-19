import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';

interface RegisterUserRequest {
    name: string;
    email: string;
    password: string;   
}

class RegisterUserService {
    async register(data: RegisterUserRequest): Promise<AxiosResponse<any>> {
        return useApi.post('broker/register', data);
    }
}

export default new RegisterUserService();
