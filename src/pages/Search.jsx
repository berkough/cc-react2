import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import SearchForm from '../components/search/SearchForm';
import TitleEntry from '../components/search/TitleEntry';

export default function Search(){
    const [searchQuery, setSearchQuery] = useState();
    const {data, loading, error, fetch} = useFetch(`https://metron.cloud/api/series/?format=json&name=${searchQuery}`)

    return(
        <>
            <SearchForm setData={setSearchQuery} fetch={fetch} />
            <div>
            {
                loading && 
                <>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </>
            }
            {
                data && data.results.map((comic,i)=>{
                    return <TitleEntry comic={comic} key={i} />
                })
            }
            </div>
        </>
    )
}