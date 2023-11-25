import axios from "axios";
// import { getSessionId } from "../helpers/cacheSessionId";

export const BASE_URL =
process.env.REACT_APP_BASE_API_URL || 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview';

const sessionId = '5ulul6zv6';

export const betaApi = axios.create({
    baseURL:BASE_URL,
    headers:{
      'Session-ID':sessionId
    }
  });
export const betaApiWithoutSessionId = axios.create({
    baseURL:BASE_URL,   
  });