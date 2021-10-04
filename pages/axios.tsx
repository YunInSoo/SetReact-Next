import React, { useCallback, useEffect, useMemo, useState } from "react";

import { NextPage } from "next";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";

export type model = {
    movie_count: number,
    limit: number,
    page_number: number,
    movies: Array<listModels>
}
export type listModels = {
    title: string,
}
const AxiosPage: NextPage = () => {
    let emailTemp, contextTemp;



    const context = useInput('');
    const email = useInput('');

    const { state: axiosData, setState: setAxiosData }: any = useAxios({ url: 'https://yts.mx/api/v2/list_movies.json' })

    const list = useMemo(() => {
        const axiosTest: model = axiosData?.data?.data?.data
        const axiosList = axiosTest?.movies;

        return axiosList;
    }, [axiosData])

    const onSubmitAxios = useCallback(
        (e) => {
            contextTemp = context.value;
            emailTemp = email.value;
            setAxiosData({
                ...axiosData,
                data: {
                    data: {
                        data: {
                            movies: [
                                ...axiosData.data.data.data.movies,
                                { title: contextTemp },
                            ]
                        }
                    }
                }
            })
            e.preventDefault()
        },
        [axiosData, context, email],
    )
    return (
        <>
            <h1>AXIOS</h1>
            <div>Test form</div>
            <form onSubmit={onSubmitAxios}>
                <input {...context} type="text" name="context" />
                <input {...email} type="email" name="email" />
                <button type="submit">a</button>
            </form>
            <ul>{list?.map((e, index) => {
                return (
                    <li key={index}>{e.title}</li>
                );
            })}</ul>
        </>
    )
}

export default AxiosPage;