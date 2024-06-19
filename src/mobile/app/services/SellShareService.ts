import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';

interface SellRequest {
    brokerId: string;
    active: string;
    stockAmount: string;
    price: string;
}

class SellService {
    async sellShare(data: SellRequest): Promise<AxiosResponse<any>> {
        return useApi.post('transaction/sell', data);
    }
}

export default new SellService();
