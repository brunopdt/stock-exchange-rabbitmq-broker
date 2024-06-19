import { AxiosResponse } from 'axios';
import { useApi } from '../apis/axiosInstance';
import ShareModel from '../models/Share';

class ShareService {
    async getShares(): Promise<AxiosResponse<ShareModel[]>> {
        return useApi.get('share/');
    }
}

export default new ShareService();