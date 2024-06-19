import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';

interface BuyRequest {
    brokerId: string;
    active: string;
    stockAmount: string;
    price: string;
}

class BuyService {
    async buyShare(data: BuyRequest): Promise<AxiosResponse<any>> {
        return useApi.post('transaction/buy', data);
    }
}

export default new BuyService();
