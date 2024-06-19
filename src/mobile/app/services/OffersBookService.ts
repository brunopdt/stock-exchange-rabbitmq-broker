import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';
import OffersBook from '../models/OffersBook';

class OffersBookService {
    async getBrokerPurchasedShares(id: number): Promise<AxiosResponse<OffersBook[]>> {
        return useApi.get(`offersBook/broker/${id}`);
    }
}

export default new OffersBookService();