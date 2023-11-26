import axios, { InternalAxiosRequestConfig } from "axios";
import store from "../store/store";

export const BASE_URL =
process.env.REACT_APP_BASE_API_URL || 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview';

export const betaApiWithoutSessionId = axios.create({
    baseURL:BASE_URL,   
  });

export const betaApi = axios.create({
    baseURL:BASE_URL,
  });

  const betaApiRequestInterceptor = async (
    request: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    request.headers['Session-ID'] = store.getState().sessionId.sessionId;
    return request;
  };
  
  betaApi.interceptors.request.use(betaApiRequestInterceptor);
