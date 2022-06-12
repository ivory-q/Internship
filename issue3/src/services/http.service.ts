import axios, { AxiosResponse } from 'axios';
import EDictionaries from '../types/enums/EDictionaries';
import EStatuses from '../types/enums/EStatuses';
import { IRequestBody, IRequestFull } from '../types/IRequest';

const http = axios.create({
  baseURL: process.env.API_ROOT,
});

const responseBody = (res: AxiosResponse) => res.data;

const requests = {
  del: (url: string) => http.delete(url).then(responseBody),
  get: (url: string, body?: object) => http.get(url, body).then(responseBody),
  put: (url: string, body?: object) => http.put(url, body).then(responseBody),
  post: (url: string, body?: object) => http.post(url, body).then(responseBody),
};

const Requests = {
  getAll: (): Promise<IRequestFull[]> => requests.get('/requests'),
  getOne: (id: number): Promise<IRequestFull> => requests.get(`/request/${id}`),
  getStatus: (id: number): Promise<EStatuses> =>
    requests.get(`/request/status/${id}`),
  checkProcessing: (): Promise<boolean> => requests.get('/request/processing'),
  create: (body: IRequestBody): Promise<IRequestFull> =>
    requests.post('/request', body),
  register: (body: IRequestBody): Promise<IRequestFull> =>
    requests.post('/request/registration', body),
  update: (body: IRequestBody): Promise<IRequestFull> =>
    requests.put('/request', body),
};

const Dictionaries = {
  getDict: (key: EDictionaries) => requests.get(`/dictionary/${key}`),
};

export { Requests, Dictionaries };
