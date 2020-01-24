export interface ServiceInit {
    status: 'init';
  }
  
  export interface ServiceLoading {
    status: 'loading';
  }
  
  export interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
  }
  
  export interface ServiceError {
    status: 'error';
    error: Error;
  }
  
  export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
  
  export interface ICategory {
    num_results: number;
    results: {
      list_name: string;
      bestsellers_date: string;
      books: IBooks[];
    }
  }
  
  export interface IBooks {
    rank: number;
    title: string;
    author: string;
    book_image: string;
  }