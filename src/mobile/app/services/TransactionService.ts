import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';
import Transaction from '../models/Transaction';
import OrderRequest from '../requests/OrderRequest';

class TransactionService {
    async getBrokerTransactions(id: number): Promise<AxiosResponse<Transaction[]>> {
        return useApi.get(`transaction/broker/${id}`);
    }

    async buyShare(data: OrderRequest): Promise<AxiosResponse<string>> {
        return useApi.post('transaction/buy', data);
    }

    async sellShare(data: OrderRequest): Promise<AxiosResponse<string>> {
        return useApi.post('transaction/sell', data);
    }
}

export default new TransactionService();