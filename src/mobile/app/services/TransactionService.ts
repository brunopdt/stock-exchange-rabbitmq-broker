import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';
import Transaction from '../models/Transaction';

class TransactionService {
    async getBrokerTransactions(id: number): Promise<AxiosResponse<Transaction[]>> {
        return useApi.get(`transaction/broker/${id}`);
    }
}

export default new TransactionService();