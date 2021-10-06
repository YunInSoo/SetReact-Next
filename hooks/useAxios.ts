import defaultAxios, { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts: any, axiosInstance: AxiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts).then((data: any) => {
      setState({
        ...state,
        loading: false,
        data,
      });
    });
  }, []);
  return { state, setState };
};

export default useAxios;
