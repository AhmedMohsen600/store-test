import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Add loading state management
let activeRequests = 0;
const loadingSubscribers: ((isLoading: boolean) => void)[] = [];

const updateLoadingState = (delta: number) => {
  activeRequests += delta;
  const isLoading = activeRequests > 0;
  loadingSubscribers.forEach((subscriber) => subscriber(isLoading));
};

// Subscribe to loading changes
export const subscribeToLoading = (callback: (isLoading: boolean) => void) => {
  loadingSubscribers.push(callback);
  return () => {
    const index = loadingSubscribers.indexOf(callback);
    if (index > -1) loadingSubscribers.splice(index, 1);
  };
};

// Add request/response interceptors
axios.interceptors.request.use(
  (config) => {
    updateLoadingState(1);
    return config;
  },
  (error) => {
    updateLoadingState(-1);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    updateLoadingState(-1);
    return response;
  },
  (error) => {
    updateLoadingState(-1);
    return Promise.reject(error);
  }
);

// Simplified request params
interface ApiRequestParams {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

// Basic API request function
export const apiRequest = async <T>({
  path,
  method,
  body,
  params,
  headers,
}: ApiRequestParams): Promise<T> => {
  const response = await axios.request({
    method,
    baseURL: BASE_URL,
    url: path,
    data: body,
    params,
    headers: { 'Content-Type': 'application/json', ...headers },
  });

  return response.data;
};

// Simple error handling
export class ApiError extends Error {
  constructor(message: string, public statusCode: number = 500) {
    super(message);
    this.name = 'ApiError';
  }
}

// Simplified response handler
export const handleApiResponse = async <T>(
  apiCall: Promise<T>,
  defaultMessage: string
): Promise<T> => {
  try {
    return await apiCall;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        error.response?.data?.message || defaultMessage,
        error.response?.status || 500
      );
    }
    throw new ApiError(defaultMessage);
  }
};
