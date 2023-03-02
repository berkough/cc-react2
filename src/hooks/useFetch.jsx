import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        setData(null);
        setError(null);
        const controller = new AbortController();
        axios.get(url, {signal: controller.signal})
            .then(res => {
                setLoading(false);
                console.log(res);
                res.data.results && setData(res.data.results);
            })
            .catch(error => {
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    setError(`Error Data: ${error.response.data}
                    Error Status: ${error.response.status}
                    Error Headers: ${error.response.headers}`)
                } else if (error.request) {
                    console.log(error.request);
                    setError(`Error Request: ${error.request}`);
                } else {
                    console.log('Error ', error.message);
                    setError(`Error Mesage: ${error.message}`);
                }
            })
            return () => {
                controller.abort();
            }
    }, [url])

    return {data, loading, error}
}