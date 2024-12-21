export interface StoreState {
  loading: boolean;
  error: string | null;
}

export interface ApiError {
  message: string;
  code?: number;
}