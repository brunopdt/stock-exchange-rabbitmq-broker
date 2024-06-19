import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';

interface LoginRequest {  
    email: string;
    password: string;   
}

class LoginService {
    async login(data: LoginRequest): Promise<AxiosResponse<any>> {
        return useApi.post('broker/login', data);
    }
}

export default new LoginService();
