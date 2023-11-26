import axios, { InternalAxiosRequestConfig } from "axios";
import store from "../store/store";

// I created two axios instances, one with session id required and one without. I checked the session id before each request using the axios interceptor and added it to the headers.

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
