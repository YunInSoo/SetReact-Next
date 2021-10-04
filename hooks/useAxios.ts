import { useEffect, useState } from 'react';

import defaultAxios from 'axios';

const useAxios = (opts: any, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    })
    useEffect(() => {
        if (!opts.url) {
            return;
        }
        axiosInstance(opts).then((data: any) => {
            setState({
                ...state,
                loading: false,
                data,
            })
        })

    }, [])
    return { state, setState };
};

export default useAxios;