import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import useRunOnce from '../../hooks/useRunOnce';
import Comic from '../collection/Comic';

export default function NewIssue({comic}){
    const {data, loading, error, fetch} = useFetch(`https://metron.cloud/api/issue/${comic.id}/?format=json`)  
    
    useRunOnce({
        fn: ()=> {
            fetch();
        }
    });
    
    return(
        <>
        {
            loading && 
            <>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        }
        {
            data && <Comic comic={data} />
        }
        
        </>
    )
}