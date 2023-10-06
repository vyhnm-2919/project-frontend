import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError
} from 'axios';
import _get from 'lodash/get';
import { getItem } from '../constants/storage';
import { STORAGE_KEY_ENUM } from '../constants';
import { APP_HOST } from '../constants/config';

class HttpFactory {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      withCredentials: true,
      baseURL: APP_HOST
    });

    this.axios.interceptors.response.use(
      this.handleResponseSuccess,
      this.handleResponseFail
    );

    // set X-CSRF-TOKEN
    this.axios.interceptors.request.use(
      (config) => {
        const storage = JSON.parse(getItem(STORAGE_KEY_ENUM.USER_INFO) ?? '{}');

        if (storage?.csrfToken) {
          config.headers['X-CSRF-TOKEN'] = storage?.csrfToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }

  handleResponseSuccess(response: AxiosResponse) {
    const contentDisposition: string | null =
      response.headers['content-disposition'];

    return contentDisposition ? response : response.data;
  }

  handleResponseFail(error: AxiosError) {
    console.log(error);
  }
}

export default HttpFactory;
