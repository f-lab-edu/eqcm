export interface BaseResponse {
  code: string;
  message: string;
}

export interface LoginResponse extends BaseResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface DataResponse<T> extends BaseResponse {
  data: T;
}

// export interface ProductResponse {}
